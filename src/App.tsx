import { useState } from 'react';
import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import MessagesContainer from './components/MessagesContainer';
import ToggleThemeMode from './components/ToggleThemeMode';
import { Message } from './lib/interface';
import { SAMPLE_MESSAGES } from './lib/contants';
import { MessageType } from './lib/enums';

const App = () => {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  // const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (message: string) => {
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
  };

  return (
    <div className="h-screen w-screen">
      <div className="py-4">
        <ToggleThemeMode />
      </div>
      {messages.length ? (
        <MessagesContainer messages={messages} />
      ) : (
        <IntroContainer />
      )}
      <InputContainer handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
