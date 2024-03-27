import { useState } from 'react';
import InputContainer from './components/InputContainer';
import IntroContainer from './components/IntroContainer';
import MessagesContainer from './components/MessagesContainer';
import ToggleThemeMode from './components/ToggleThemeMode';
import { Message } from './lib/interface';
import { SAMPLE_MESSAGES } from './lib/contants';

const App = () => {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);

  return (
    <div className="h-screen w-screen">
      <ToggleThemeMode />
      {messages.length ? (
        <MessagesContainer messages={messages} />
      ) : (
        <IntroContainer />
      )}
      <InputContainer />
    </div>
  );
};

export default App;
