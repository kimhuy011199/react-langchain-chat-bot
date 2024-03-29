import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appendQuestionMark = (question: string) => {
  return question.endsWith('?') ? question : question + '?';
};

export const extractDataValue = (chunkString: string) => {
  const regex = /"data":"(.*?)"/;
  const match = chunkString.match(regex);
  return match ? match[1] : '';
};
