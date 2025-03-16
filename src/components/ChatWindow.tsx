import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { Message } from "../types"; // Importing the Message type

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (name: string, message: string, image: File | null) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      name,
      message,
      imageUrl: image ? URL.createObjectURL(image) : undefined,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-full w-full p-4 border rounded-lg bg-white shadow-md">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
