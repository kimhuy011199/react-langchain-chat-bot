import { SUGGESTION_QUESTIONS_LIST } from '@/lib/contants';
import { Button } from './ui/button';

const IntroContainer = ({
  handleSendMessage,
}: {
  handleSendMessage: (question: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center mx-auto w-full max-w-3xl px-6 mt-40">
      <h2 className="text-2xl font-medium">Ask me anything about LangChain</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
        {SUGGESTION_QUESTIONS_LIST.map((item) => (
          <li key={item.id}>
            <Button
              className="whitespace-normal w-full px-6 py-4 md:py-5 h-auto text-left leading-6"
              variant="secondary"
              onClick={() => handleSendMessage(item.value)}
            >
              <span>{item.value}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroContainer;
