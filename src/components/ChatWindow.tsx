import { useState, useEffect } from "react";
//import { Message } from "../types"; // Importing the Message type
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { fetchMessages, sendMessage } from "../utils/matrixClient";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages(setMessages);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 text-white shadow-lg rounded-lg flex flex-col">
      <div className="bg-gray-700 p-2 rounded-t-lg text-center font-bold">PeerTube Live Chat</div>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} setMessages={setMessages} />
    </div>
  );
}
