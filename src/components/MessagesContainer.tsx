import { Message } from '@/lib/interface';
import MessageItem from './MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';
import { StatusState } from '@/lib/enums';
import CopyButton from './CopyButton';
import RegenerateButton from './RegenerateButton';

const MessagesContainer = ({
  messages,
  status,
  handleRegenerate,
}: {
  messages: Message[];
  status: StatusState;
  handleRegenerate: () => void;
}) => {
  return (
    <ScrollToBottom
      className="overflow-y-auto h-[calc(100vh-100px-72px)]"
      followButtonClassName="scroll-to-bottom-button"
    >
      <div className="flex flex-col mx-auto w-full max-w-3xl px-4">
        <ul className="flex flex-col gap-3">
          {messages.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
        </ul>
        {status === StatusState.resolved ? (
          <div className="py-3 flex gap-2">
            <CopyButton message={messages[messages.length - 1]} />
            <RegenerateButton handleRegenerate={handleRegenerate} />
          </div>
        ) : null}
      </div>
    </ScrollToBottom>
  );
};

export default MessagesContainer;
