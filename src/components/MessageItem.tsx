import { MessageType } from '@/lib/enums';
import { Message } from '@/lib/interface';
import { twMerge } from 'tailwind-merge';

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <li
      className={twMerge(
        'text-sm font-medium rounded-md ring-offset-background px-4 py-2.5 flex flex-col md:max-w-[90%] whitespace-pre-wrap',
        message.type === MessageType.question
          ? 'text-right bg-primary text-primary-foreground rounded-ee-none self-end ml-10'
          : 'border text-left bg-muted rounded-es-none self-start mr-10 pb-4',
        !message.content ? 'px-8 py-4' : ''
      )}
    >
      {message.content ? (
        <span dangerouslySetInnerHTML={{ __html: message.content }}></span>
      ) : (
        <div className="relative left-[-9999px] w-1.5 h-1.5 rounded-full bg-muted text-muted animate-dot-typing" />
      )}
    </li>
  );
};

export default MessageItem;
