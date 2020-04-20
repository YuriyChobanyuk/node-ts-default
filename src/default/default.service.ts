import { IDefaultInterface } from './interfaces/default.interface';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class DefaultService implements IDefaultInterface {
  getDefault() {
    return {
      default: 'default',
    };
  }
}
