import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CircleHelp } from 'lucide-react';

const AboutProject = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-0 h-10 w-10">
          <CircleHelp size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>ChatLangChain</DialogTitle>
          <DialogDescription>About ChatLangChain</DialogDescription>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutProject;
