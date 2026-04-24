# FRONTEND — React + Vite Chat UI

![img1](../img1.png)

This frontend is a React + Vite chat UI for a real-time voice and text chat app. It connects to the backend WebSocket server at `http://localhost:8081/ws` and allows users to join with a display name, send messages, and record voice notes.

## Features

- Real-time chat interface with text and voice message support
- Join screen with username input and modern light theme
- Sidebar for users and channel navigation
- Message pane with scroll handling and responsive layout
- Audio recording and playback support via the browser MediaRecorder API

## Tech stack

- React 19
- Vite 4
- STOMP.js for WebSocket messaging
- SockJS client for WebSocket fallback support
- ESLint for linting

## Local setup

### Install dependencies

```bash
cd frontend
npm install
```

### Run frontend

```bash
npm run dev
```

The app will start locally on `http://localhost:5174/` by default.

## Backend requirements

The frontend expects the backend WebSocket service to run on `http://localhost:8081/`. The backend is implemented in `../Websocketdev` and must be started separately.

## Recommended backend startup

```bash
cd ../Websocketdev
./mvnw spring-boot:run
```

## Notes

- If port `8081` is already in use, update `Websocketdev/src/main/resources/application.properties` or the frontend `BACKEND_URL` accordingly.
- The current UI styling is handled in `src/App.css`.
- The main React entry point is `src/main.jsx`.
