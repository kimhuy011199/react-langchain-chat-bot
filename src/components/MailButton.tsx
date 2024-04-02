import { TriangleAlert } from 'lucide-react';

const MailButton = () => {
  const mail = 'kimhuy011199@gmail.com';
  const subject = 'ChatLangChain Error Report';
  const body = `Dear Huy Nguyen Kim,

I encountered an error while using ChatLangChain. Please investigate.

Thank you.`;

  const href = `mailto:${mail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      className="p-2 h-8 flex gap-2 items-center text-muted-foreground text-sm rounded-md font-medium transition-colors border border-ring bg-background hover:bg-muted hover:text-muted-foreground"
      href={href}
    >
      <TriangleAlert size={14} />
      <span>Report</span>
    </a>
  );
};

export default MailButton;
