import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Message } from './interface';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appendQuestionMark = (question: string) => {
  return question.endsWith('?') ? question : question + '?';
};

export const extractDataValue = (chunkString: string) => {
  return chunkString
    .trim()
    .split('\n')
    .map((item) => {
      const regex = /"data":"(.*?)"/;
      const match = item.match(regex);
      return match ? match[1] : '';
    })
    .join('');
};

export const getHistoryString = (messages: Message[]) => {
  return messages.map((item) => item.content);
};
