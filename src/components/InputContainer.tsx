import { useState, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import { StatusState } from '@/lib/enums';
import Spinner from './Spinner';

const InputContainer = () => {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState(StatusState.idle);

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    } else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      setQuestion(question + '\n');
    }
  };

  const handleSendMessage = async () => {
    setStatus(StatusState.submitting);
    await new Promise((r) => setTimeout(r, 10000));
    console.log(question);
    setStatus(StatusState.resolved);
  };

  return (
    <div className="fixed bottom-0 w-screen flex justify-center items-center px-4 py-6">
      <div className="flex items-end w-full max-w-2xl gap-3">
        <ReactTextareaAutosize
          maxRows={5}
          placeholder="Type your message..."
          value={question}
          onChange={handleChangeValue}
          onKeyDown={handleOnEnter}
          disabled={status === StatusState.submitting}
          className="block resize-none w-full rounded-md border border-input bg-muted px-3 py-2.5 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          onClick={handleSendMessage}
          className="p-3 h-full text-foreground"
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
