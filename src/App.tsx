import { useState } from 'react';
import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import MessagesContainer from './components/MessagesContainer';
import Header from './components/Header';
import { Message } from './lib/interface';
import { MessageType, StatusState } from './lib/enums';
import { CHAT_ENDPOINT, ERROR_ANSWER } from './lib/contants';
import {
  appendQuestionMark,
  extractDataValue,
  getHistoryString,
} from './lib/utils';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState(StatusState.idle);
  const [inputHeight, setInputHeight] = useState(0);

  const handleSendMessage = async (message: string) => {
    setStatus(StatusState.submitting);

    // Add question and empty answer to the messages list
    const messageId = new Date().getTime().toString();
    setMessages((prev) => [
      ...prev,
      {
        id: messageId,
        content: message,
        type: MessageType.question,
      },
      {
        id: messageId + '_answer',
        content: '',
        type: MessageType.answer,
      },
    ]);

    // Get answer from langchain
    await handleGetAnswer(message);
  };

  const handleGetAnswer = async (question: string) => {
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          question: appendQuestionMark(question),
          history: getHistoryString(messages),
        }),
      });

      if (!response?.body || !response?.ok) {
        throw response;
      }

      const reader = response.body.getReader();
      const handleReadChunk = async () => {
        const { value, done } = await reader.read();

        // Set status to resolved when fetch done
        if (done) {
          return setStatus(StatusState.resolved);
        }

        const chunkString = new TextDecoder().decode(value);
        const dataValue = extractDataValue(chunkString);

        setMessages((prev) =>
          prev.map((item, index) => {
            if (index !== prev.length - 1) {
              return item;
            }
            return {
              ...item,
              content: item.content + dataValue,
            };
          })
        );

        // Read next chunk until done
        await handleReadChunk();
      };

      // Start reading chunks
      await handleReadChunk();
    } catch (error) {
      handleAppendErrorMessage();
    }
  };

  const handleRegenerate = async () => {
    const lastQuestion = messages[messages.length - 2];
    await handleSendMessage(lastQuestion.content);
  };

  const handleAppendErrorMessage = () => {
    setMessages((prev) =>
      prev.map((item, index) =>
        index !== prev.length - 1 ? item : { ...item, content: ERROR_ANSWER }
      )
    );
    setStatus(StatusState.rejected);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="mt-20">
        {messages.length ? (
          <MessagesContainer
            messages={messages}
            status={status}
            handleRegenerate={handleRegenerate}
            paddingBottom={inputHeight}
          />
        ) : (
          <IntroContainer handleSendMessage={handleSendMessage} />
        )}
      </div>
      <InputContainer
        handleSendMessage={handleSendMessage}
        status={status}
        setInputHeight={setInputHeight}
      />
    </div>
  );
};

export default App;
