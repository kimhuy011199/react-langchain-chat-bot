import { Message } from '@/lib/interface';
import MessageItem from './MessageItem';

const MessagesContainer = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="overflow-y-auto h-[calc(100vh-100px)]">
      <div className="flex flex-col mx-auto w-full max-w-3xl px-4">
        <ul className="flex flex-col gap-3">
          {messages.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagesContainer;
