import { SUGGESTION_QUESTIONS_LIST } from '@/lib/contants';
import { Button } from './ui/button';
import { CircleHelp } from 'lucide-react';

const IntroContainer = ({
  handleSendMessage,
}: {
  handleSendMessage: (question: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-12 items-center justify-center mx-auto w-full max-w-3xl px-5 mt-28 sm:mt-40">
      <h2 className="text-2xl font-medium text-center">
        Ask me anything about LangChain
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
        {SUGGESTION_QUESTIONS_LIST.map((item) => (
          <li key={item.id}>
            <Button
              className="whitespace-normal w-full px-5 py-4 md:py-5 h-auto text-left leading-6 justify-start md:items-start"
              variant="secondary"
              onClick={() => handleSendMessage(item.value)}
            >
              <div>
                <CircleHelp
                  size={16}
                  className="mr-3 md:mt-1.5 hidden md:block"
                />
              </div>
              <span>{item.value}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroContainer;
