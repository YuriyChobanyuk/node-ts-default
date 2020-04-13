import { Warrior, ThrowableWeapon, Weapon } from './../interfaces/index';
import { Container } from 'inversify';
import { TYPES } from './types';
import Katana from '../services/katana.service';
import Shuriken from '../services/shuriken.service';
import Ninja from '../services/warior.service';

const container = new Container();

container.bind<Warrior>(TYPES.Warrior).to(Ninja).inSingletonScope();
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { container };
