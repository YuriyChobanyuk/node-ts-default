import 'reflect-metadata';
import { injectable } from 'inversify';
import { Weapon } from '../interfaces';

@injectable()
export default class Katana implements Weapon {
  public hit() {
    return 'cut!';
  }
}
