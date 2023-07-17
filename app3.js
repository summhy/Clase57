import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.NAME_APP);

console.log(process.env.NAME_USER);
process.env.NAME_USER="Nibaldo"
console.log(process.env.NAME_USER);

