import { useState } from "react";
import { Input, Button } from "@/components/ui/input";

interface MessageInputProps {
  onSend: (name: string, message: string, image: File | null, setMessages: any) => void;
  setMessages: any;
}

export default function MessageInput({ onSend, setMessages }: MessageInputProps) {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [captcha, setCaptcha] = useState<string>("");
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);

  const verifyCaptcha = () => {
    if (captcha === "1234") setCaptchaVerified(true);
  };

  return (
    <div className="p-2 flex flex-col space-y-2">
      {!captchaVerified ? (
        <>
          <Input placeholder="Enter CAPTCHA (1234)" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
          <Button onClick={verifyCaptcha} className="mt-2">Verify</Button>
        </>
      ) : (
        <>
          <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <Button onClick={() => onSend(name, message, image, setMessages)} className="bg-blue-600">Send</Button>
        </>
      )}
    </div>
  );
}
