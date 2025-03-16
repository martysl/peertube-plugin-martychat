import { Message } from "../types";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="p-2 space-y-2">
      {messages.map((msg, index) => (
        <div key={index} className="p-2 border rounded">
          <b>{msg.name}:</b> {msg.message}
          {msg.imageUrl && <img src={msg.imageUrl} alt="Uploaded" className="max-w-xs mt-2" />}
        </div>
      ))}
    </div>
  );
}
