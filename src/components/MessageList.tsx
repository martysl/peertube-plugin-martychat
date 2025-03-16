import { Message } from "../types";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 border-b">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages yet...</p>
      ) : (
        messages.map((msg) => (
          <div key={msg.id} className="mb-3 p-2 border rounded-md bg-gray-100">
            <strong className="text-blue-600"> {msg.message} </strong>
          </div>
        ))
      )}
    </div>
  );
}
