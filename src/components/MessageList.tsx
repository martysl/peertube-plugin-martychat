import { Message } from "@/types";
interface MessageProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageProps) {
  return (
    <div className="flex-grow overflow-y-auto p-2 h-64 border border-gray-700 rounded-md">
      {messages.map((msg, index) => (
        <div key={index} className="p-1">
          <b>{msg.name}:</b> {msg.message}
          {msg.image && <img src={msg.image} alt="Uploaded" className="max-w-xs mt-2" />}
        </div>
      ))}
    </div>
  );
}
