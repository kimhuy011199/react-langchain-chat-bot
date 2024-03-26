import { SUGGESTION_QUESTIONS_LIST } from '@/lib/contants';
import SuggestionQuestionItem from './SuggestionQuestionItem';

const IntroContainer = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-full mx-auto w-full max-w-3xl px-6">
      <h2 className="text-2xl font-medium">Ask me anything about LangChain</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
        {SUGGESTION_QUESTIONS_LIST.map((item) => (
          <SuggestionQuestionItem value={item.value} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default IntroContainer;
