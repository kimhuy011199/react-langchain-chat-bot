import { BotMessageSquare } from 'lucide-react';

const AppLogo = () => {
  return (
    <h1 className="flex items-center justify-center font-semibold text-lg">
      <BotMessageSquare size={28} className="text-primary mr-2" />
      <span className="">Chat</span>
      <span className="text-muted-foreground">LangChain</span>
    </h1>
  );
};

export default AppLogo;
