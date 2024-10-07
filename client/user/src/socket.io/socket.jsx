import { io } from 'socket.io-client';

const socket = io('https://iti-graduation-back-end-production.up.railway.app', {
    transports: ['websocket'],
    withCredentials: true,
});

export default socket;

