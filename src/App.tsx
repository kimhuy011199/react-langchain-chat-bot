import { useState } from 'react';
import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import MessagesContainer from './components/MessagesContainer';
import ToggleThemeMode from './components/ToggleThemeMode';
import { Message } from './lib/interface';
import { SAMPLE_MESSAGES } from './lib/contants';
import { MessageType, StatusState } from './lib/enums';

const App = () => {
  // const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState(StatusState.idle);

  const handleSendMessage = async (message: string) => {
    setStatus(StatusState.submitting);
    setMessages((prev) => [
      ...prev,
      {
        id: new Date().toString(),
        content: message,
        type: MessageType.question,
      },
    ]);
    await new Promise((r) => setTimeout(r, 5000));
    setMessages((prev) => [
      ...prev,
      {
        id: new Date().toString(),
        content: message,
        type: MessageType.answer,
      },
    ]);
    setStatus(StatusState.resolved);
  };

  return (
    <div className="h-screen w-screen">
      <div className="py-4">
        <ToggleThemeMode />
      </div>
      {messages.length ? (
        <MessagesContainer messages={messages} />
      ) : (
        <IntroContainer handleSendMessage={handleSendMessage} />
      )}
      <InputContainer handleSendMessage={handleSendMessage} status={status} />
    </div>
  );
};

export default App;
