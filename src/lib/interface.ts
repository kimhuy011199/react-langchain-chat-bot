import { MessageType } from './enums';

export interface Message {
  id: string;
  content: string;
  type: MessageType;
}
