import { Button } from './ui/button';

const SuggestionQuestionItem = ({ value }: { value: string }) => {
  return (
    <li>
      <Button
        className="whitespace-normal w-full px-6 py-4 md:py-5 h-auto text-left leading-6"
        variant="secondary"
      >
        <span>{value}</span>
      </Button>
    </li>
  );
};

export default SuggestionQuestionItem;
