import { useState, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import { StatusState } from '@/lib/enums';
import Spinner from './Spinner';

const InputContainer = ({
  handleSendMessage,
}: {
  handleSendMessage: (question: string) => void;
}) => {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState(StatusState.idle);

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitMessage();
    } else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      setQuestion(question + '\n');
    }
  };

  const handleSubmitMessage = async () => {
    setStatus(StatusState.submitting);
    setQuestion('');
    await handleSendMessage(question);
    setStatus(StatusState.resolved);
  };

  return (
    <div className="fixed bottom-0 w-screen flex justify-center items-center py-6 ">
      <div className="flex items-end w-full max-w-3xl gap-3 px-4">
        <ReactTextareaAutosize
          maxRows={5}
          placeholder="Type your message..."
          value={question}
          onChange={handleChangeValue}
          onKeyDown={handleOnEnter}
          disabled={status === StatusState.submitting}
          className="text-sm block resize-none w-full rounded-md border border-input bg-muted px-3 py-3 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          onClick={handleSubmitMessage}
          className="p-3 h-full text-white"
          disabled={status === StatusState.submitting}
        >
          {status === StatusState.submitting ? (
            <Spinner />
          ) : (
            <ArrowUp size={20} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default InputContainer;
