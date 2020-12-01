import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import { API_URL } from './API_URL.json';

const socket = io(API_URL);
const client = feathers();

client.configure(socketio(socket));
client.configure(auth({
  storage: window.localStorage,
}));

export default client;
