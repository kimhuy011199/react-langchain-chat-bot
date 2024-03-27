import { useState } from 'react';
import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import MessagesContainer from './components/MessagesContainer';
import { Message } from './lib/interface';
import { SAMPLE_MESSAGES } from './lib/contants';
import { MessageType, StatusState } from './lib/enums';
import Header from './components/Header';

const App = () => {
  // const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState(StatusState.idle);

  const handleSendMessage = async (message: string) => {
    setStatus(StatusState.submitting);
    setMessages((prev) => [
      ...prev,
      {
        id: new Date().getTime().toString(),
        content: message,
        type: MessageType.question,
      },
    ]);
    await new Promise((r) => setTimeout(r, 1000));
    setMessages((prev) => [
      ...prev,
      {
        id: new Date().getTime().toString(),
        content: message,
        type: MessageType.answer,
      },
    ]);
    setStatus(StatusState.resolved);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="mt-20">
        {messages.length ? (
          <MessagesContainer messages={messages} status={status} />
        ) : (
          <IntroContainer handleSendMessage={handleSendMessage} />
        )}
      </div>
      <InputContainer handleSendMessage={handleSendMessage} status={status} />
    </div>
  );
};

export default App;
