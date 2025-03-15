import axios from "axios";

const MATRIX_SERVER = "https://your-matrix-server.com";
const MATRIX_USER = "@yourbot:matrix.org";
const MATRIX_TOKEN = "your-access-token";
const ROOM_ID = "!your-room-id:matrix.org";

export const fetchMessages = async (setMessages: any) => {
  try {
    const res = await axios.get(`${MATRIX_SERVER}/_matrix/client/r0/rooms/${ROOM_ID}/messages?limit=20`, {
      headers: { Authorization: `Bearer ${MATRIX_TOKEN}` },
    });
    setMessages(res.data.chunk.map((msg: any) => ({
      name: msg.sender,
      message: msg.content.body,
      image: msg.content.url ? `${MATRIX_SERVER}${msg.content.url}` : null,
    })));
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

export const sendMessage = async (name: string, message: string, image: File | null, setMessages: any) => {
  if (!name || (!message.trim() && !image)) return;
  try {
    let msgData: any = { msgtype: "m.text", body: `${name}: ${message}` };
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      const uploadRes = await axios.post(`${MATRIX_SERVER}/_matrix/media/r0/upload`, formData, {
        headers: { Authorization: `Bearer ${MATRIX_TOKEN}` },
      });
      msgData = { msgtype: "m.image", body: `${name} sent an image`, url: uploadRes.data.content_uri };
    }
    await axios.post(`${MATRIX_SERVER}/_matrix/client/r0/rooms/${ROOM_ID}/send/m.room.message`, msgData, {
      headers: { Authorization: `Bearer ${MATRIX_TOKEN}` },
    });
    setMessages((prev: any) => [...prev, { name, message, image: msgData.url || null }]);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
