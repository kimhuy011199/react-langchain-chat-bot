import { useState, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatusState } from '@/lib/enums';
import Spinner from './Spinner';
import { Textarea } from './ui/textarea';

const InputContainer = () => {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState(StatusState.idle);

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setStatus(StatusState.submitting);
    await new Promise((r) => setTimeout(r, 10000));
    console.log(question);
    setStatus(StatusState.resolved);
  };

  return (
    <div className="fixed bottom-0 w-screen flex justify-center items-center px-4 py-6">
      <div className="flex items-center w-full max-w-2xl gap-3">
        <Textarea
          placeholder="Type your message..."
          value={question}
          onChange={handleChangeValue}
          onKeyDown={handleOnEnter}
        />
        <Button
          onClick={handleSubmit}
          className="h-8 w-14 p-1 text-foreground"
          disabled={status === StatusState.submitting}
        >
          {status === StatusState.submitting ? (
            <Spinner />
          ) : (
            <ArrowUp size={30} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default InputContainer;
