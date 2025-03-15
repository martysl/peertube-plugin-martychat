# PeerTube Live Chat Plugin

A custom live chat plugin for PeerTube using Matrix or Discord as the backend.

## Features
- Full-featured real-time chat
- No authentication required
- CAPTCHA verification for message sending
- Image uploads supported
- Supports both Matrix and Discord as backends

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/peertube-plugin-martychat.git
   cd peertube-plugin-martychat
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start development server:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build
   ```
5. Deploy the `dist/` folder to your PeerTube instance.

## Configuration
- Set your Matrix credentials in `src/utils/matrixClient.ts`.

## License
MIT
