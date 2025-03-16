import { Message } from "../types";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="p-4 overflow-y-auto flex-1">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <b>{msg.name}:</b> {msg.message}
          {msg.imageUrl && <img src={msg.imageUrl} alt="Uploaded" className="max-w-xs mt-2" />}
        </div>
      ))}
    </div>
  );
}
