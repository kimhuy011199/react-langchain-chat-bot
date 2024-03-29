import { Message } from '@/lib/interface';
import MessageItem from './MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';

const MessagesContainer = ({ messages }: { messages: Message[] }) => {
  return (
    <ScrollToBottom
      className="overflow-y-auto h-[calc(100vh-100px-72px)]"
      followButtonClassName="scroll-to-bottom-button"
    >
      <div className="flex flex-col mx-auto w-full max-w-3xl px-4">
        <ul className="flex flex-col gap-3">
          {messages.map((message, index) => (
            <MessageItem message={message} key={message.id + index} />
          ))}
        </ul>
      </div>
    </ScrollToBottom>
  );
};

export default MessagesContainer;
