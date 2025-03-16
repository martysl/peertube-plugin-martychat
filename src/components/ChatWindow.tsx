import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { Message } from "../types";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (name: string, message: string, image: File | null) => {
    const newMessage: Message = {
      name,
      message,
      image: image ? URL.createObjectURL(image) : undefined,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="w-full h-full flex flex-col border rounded bg-white">
      <div className="flex-1 overflow-auto p-2">
        <MessageList messages={messages} />
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
