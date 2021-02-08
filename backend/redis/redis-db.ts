import { promisify } from 'util';
import redis from 'redis';
import dotenv from 'dotenv';
import { Gamestate } from '../utils/game';
import { IUser } from '../utils/users';

dotenv.config({ path: __dirname + '../.env' });

const PORT = Number(process.env.DB_PORT) || 6379;
const HOST = process.env.DB_HOST || '127.0.0.1';

const client = redis.createClient(PORT, HOST);

if (process.env.DB_PASSWORD) {
  client.auth(process.env.DB_PASSWORD);
}

client.once('error', (err) => {
  console.error('Redis connect error', err);
  process.exit(1);
});

client.on('ready', () => {
  console.log('Redis connected');
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const redisGetAsync = promisify(client.get).bind(client);
const redisKEYSAsync = promisify(client.KEYS).bind(client);
// const redisDelAsync = promisify(client.del).bind(client);


export const setState = (room: IUser['room'], state?: Gamestate): void => {

  const json = JSON.stringify(state);
  client.set(room, json);

};

export const getState = async (room: IUser['room']): Promise<Gamestate | undefined> => {

  const json = await redisGetAsync(room);
  if (json) {
    const state = JSON.parse(json);
    return state;
  }
};

// get all games saved room:Game list returns as an array of strings 
export const getGames = async (patern: string): Promise<string[] | undefined> => {

  const games = await redisKEYSAsync(patern);
  if (games) return games;

};

// export const deleteGame = async (room: string): Promise<string> => {
//   await redisDelAsync(room).then(data => data);
//   return `${room} successfully deleted`;
// };
