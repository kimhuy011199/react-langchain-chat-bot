import { Message } from '@/lib/interface';
import MessageItem from './MessageItem';

const MessagesContainer = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="flex flex-col h-full mx-auto w-full max-w-3xl px-4 mt-8">
      <ul className="flex flex-col gap-3">
        {messages.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
      </ul>
    </div>
  );
};

export default MessagesContainer;
