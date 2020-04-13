import 'reflect-metadata';
import { injectable } from 'inversify';
import { ThrowableWeapon } from '../interfaces';

@injectable()
export default class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'hit!';
  }
}
