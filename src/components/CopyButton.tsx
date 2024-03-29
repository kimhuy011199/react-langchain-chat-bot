import { Clipboard } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Message } from '@/lib/interface';

const CopyButton = ({ message }: { message: Message }) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(message.content)
      .then(() => {
        toast({
          description: 'Copied answer to clipboard!',
        });
      })
      .catch(() => {
        toast({
          description: 'Cannot copied answer to clipboard!',
          variant: 'destructive',
        });
      });
  };

  return (
    <Button
      variant="outline"
      className="p-2 h-8 flex gap-2 items-center text-muted-foreground"
      onClick={handleCopy}
    >
      <Clipboard size={14} />
      <span>Copy</span>
    </Button>
  );
};

export default CopyButton;
