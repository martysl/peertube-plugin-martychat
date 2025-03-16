import { useState } from "react";

interface MessageInputProps {
  onSend: (name: string, message: string, image: File | null) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const send = () => {
    if (name.trim() && message.trim()) {
      onSend(name, message, image);
      setMessage("");
      setImage(null);
    }
  };

  return (
    <div className="p-4 flex gap-2 items-center border-t bg-gray-50">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded flex-1"
      />
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 border rounded flex-1"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] ?? null)}
        className="p-2 border rounded"
      />
      <button
        onClick={send}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
