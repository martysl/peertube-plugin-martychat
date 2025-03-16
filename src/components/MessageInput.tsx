import { useState } from "react";

interface MessageInputProps {
  onSend: (name: string, message: string, image: File | null) => Promise<void>;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [captcha, setCaptcha] = useState("");

  const handleSend = async () => {
    if (!message.trim() && !image) return;
    if (captcha !== "1234") {
      alert("Invalid CAPTCHA!");
      return;
    }

    await onSend(name || "Anonymous", message, image);
    setMessage("");
    setImage(null);
  };

  return (
    <div className="p-2 border-t flex flex-col gap-2">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />
      <input
        type="text"
        placeholder="Enter CAPTCHA (1234)"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
}
