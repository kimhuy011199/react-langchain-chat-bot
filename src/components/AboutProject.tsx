import { ReactNode } from 'react';
import { CircleHelp, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import AppLogo from './AppLogo';
import LangChainIcon from './icons/LangChainIcon';
import { ReactIcon } from './icons/ReactIcon';
import NodejsIcon from './icons/NodejsIcon';

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      className="px-3.5 py-2.5 text-sm flex items-center gap-3 rounded-md font-medium transition-colors border border-ring bg-background hover:bg-muted hover:text-muted-foreground border-dashed"
      href={href}
    >
      {children}
    </a>
  );
};

const AboutProject = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-0 h-10 w-10">
          <CircleHelp size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <AppLogo />
        </DialogHeader>
        <div className="text-sm font-medium flex flex-col gap-3">
          <p>
            ChatLangChain is an innovative chatbot web application powered by a
            large language model (GPT), intelligently trained on my portfolio
            data to deliver personalized responses instantly. You can ask this
            chatbot about my profile and receive AI-powered answers.
          </p>
          <ul className="list-disc ml-4 flex flex-col gap-2">
            <li>
              Utilize AI technology to generate answers based on trained data.
            </li>
            <li>
              Copy and regenerate answers as needed for enhanced convenience.
            </li>
            <li>Customize viewing experience with light/dark mode options.</li>
          </ul>
          <div className="flex items-center gap-4">
            <span className="mr-2">Tech stack:</span>
            <a href="https://www.langchain.com/">
              <LangChainIcon />
            </a>
            <a href="https://react.dev/">
              <ReactIcon />
            </a>
            <a href="https://nodejs.org/en">
              <NodejsIcon />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/kimhuy011199/react-langchain-chat-bot">
              <LinkIcon size={14} />
              <span>Github Repo</span>
            </Link>
            <Link href="https://github.com/kimhuy011199/react-langchain-chat-bot">
              <LinkIcon size={14} />
              <span>My Portfolio</span>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutProject;
