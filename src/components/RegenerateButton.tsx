import { RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

const RegenerateButton = ({
  handleRegenerate,
}: {
  handleRegenerate: () => void;
}) => {
  return (
    <Button
      variant="outline"
      className="p-2 h-8 flex gap-2 items-center text-muted-foreground"
      onClick={handleRegenerate}
    >
      <RotateCcw size={14} />
      <span>Regenerate</span>
    </Button>
  );
};

export default RegenerateButton;
