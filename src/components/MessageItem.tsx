import { MessageType } from '@/lib/enums';
import { Message } from '@/lib/interface';
import { twMerge } from 'tailwind-merge';

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <li
      className={twMerge(
        'text-sm font-medium rounded-md ring-offset-background px-4 py-2.5 flex flex-col md:max-w-[90%]',
        message.type === MessageType.question
          ? 'text-right bg-primary text-primary-foreground rounded-ee-none self-end ml-10'
          : 'border text-left bg-muted rounded-es-none mr-10'
      )}
    >
      <span>{message.content}</span>
    </li>
  );
};

export default MessageItem;
