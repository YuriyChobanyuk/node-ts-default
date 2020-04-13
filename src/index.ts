import express from 'express';
import { container } from './DIContainer/container';
import { Warrior } from './interfaces/index';
import { TYPES } from './DIContainer/types';

const app = express();

const ninja = container.get<Warrior>(TYPES.Warrior);
const samurai = container.get<Warrior>(TYPES.Warrior);

console.log(ninja === samurai);

console.log(ninja.fight());
console.log(ninja.sneak());

app.listen(3000, () => {
  console.log('App is listening port 3000');
});
