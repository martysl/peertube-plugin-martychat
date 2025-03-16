import { useState } from "react";
import { Input, Button } from "../../components/ui/input"; // Ensure this file exists
import { Message } from "../types"; // Ensure Message type is defined

interface MessageInputProps {
  onSend: (name: string, message: string, image: File | null, setMessages: any) => Promise<void>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [captcha, setCaptcha] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSend = () => {
    if (!message.trim() && !image) return;
    if (captcha !== "1234") {
      alert("Invalid CAPTCHA");
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: name || "Anonymous",
      content: message,
      timestamp: Date.now(),
      imageUrl: image ? URL.createObjectURL(image) : undefined,
    };

    onSendMessage(newMessage);
    setMessage("");
    setImage(null);
  };

  return (
    <div className="flex flex-col space-y-2 p-4 border-t">
      <Input 
        placeholder="Enter CAPTCHA (1234)" 
        value={captcha} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaptcha(e.target.value)}
      />

      <Input 
        placeholder="Your name" 
        value={name} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <Input 
        placeholder="Type a message..." 
        value={message} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
      />

      <input 
        type="file" 
        accept="image/*" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.files && setImage(e.target.files[0])} 
      />

      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}
