import { Message } from '@/lib/interface';
import MessageItem from './MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';
import { MessageType, StatusState } from '@/lib/enums';

const MessagesContainer = ({
  messages,
  status,
}: {
  messages: Message[];
  status: StatusState;
}) => {
  return (
    <ScrollToBottom className="overflow-y-auto h-[calc(100vh-100px-72px)]">
      <div className="flex flex-col mx-auto w-full max-w-3xl px-4">
        <ul className="flex flex-col gap-3">
          {messages.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
          {status === StatusState.submitting ? (
            <MessageItem
              message={{ id: 'loading', content: '', type: MessageType.answer }}
            />
          ) : null}
        </ul>
      </div>
    </ScrollToBottom>
  );
};

export default MessagesContainer;
