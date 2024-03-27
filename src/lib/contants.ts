import { MessageType } from './enums';

export const API_ENDPOINT = import.meta.env.VITE_LANGCHAIN_API;

export const SUGGESTION_QUESTIONS_LIST = [
  {
    id: 1,
    value:
      'Can you provide an overview of your professional background and experience?',
  },
  {
    id: 2,
    value: 'Could you highlight the technical skills and expertise?',
  },
  {
    id: 3,
    value:
      'Can you share any relevant certifications that support your expertise?',
  },
  {
    id: 4,
    value: 'Could you discuss the strengths and areas of improvement?',
  },
];

export const SAMPLE_MESSAGES = [
  {
    id: '1',
    content:
      'Can you provide an overview of your professional background and experience?',
    type: MessageType.question,
  },
  {
    id: '2',
    content:
      'I have a diverse background in web development, with over five years of experience in designing and building responsive and user-friendly websites and web applications. Throughout my career, I have worked with various technologies and frameworks, including HTML, CSS, JavaScript, React.js, and Node.js.',
    type: MessageType.answer,
  },
  {
    id: '3',
    content:
      'Could you share any relevant certifications or qualifications that support your expertise as demonstrated in your portfolio?',
    type: MessageType.question,
  },
  {
    id: '4',
    content:
      'Absolutely. I hold several certifications and qualifications that validate my expertise in web development and related fields. Firstly, I am certified in front-end web development from a recognized institution, where I gained in-depth knowledge of HTML, CSS, and JavaScript fundamentals. This certification demonstrates my proficiency in creating visually appealing and interactive user interfaces.',
    type: MessageType.answer,
  },
  {
    id: '5',
    content:
      'Could you share any relevant certifications or qualifications that support your expertise as demonstrated in your portfolio?',
    type: MessageType.question,
  },
  {
    id: '6',
    content:
      'Absolutely. I hold several certifications and qualifications that validate my expertise in web development and related fields. Firstly, I am certified in front-end web development from a recognized institution, where I gained in-depth knowledge of HTML, CSS, and JavaScript fundamentals. This certification demonstrates my proficiency in creating visually appealing and interactive user interfaces.',
    type: MessageType.answer,
  },
  {
    id: '7',
    content:
      'Could you share any relevant certifications or qualifications that support your expertise as demonstrated in your portfolio?',
    type: MessageType.question,
  },
  {
    id: '8',
    content:
      'Absolutely. I hold several certifications and qualifications that validate my expertise in web development and related fields. Firstly, I am certified in front-end web development from a recognized institution, where I gained in-depth knowledge of HTML, CSS, and JavaScript fundamentals. This certification demonstrates my proficiency in creating visually appealing and interactive user interfaces.',
    type: MessageType.answer,
  },
];
