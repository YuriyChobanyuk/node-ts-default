import { IDefaultInterface } from './../../default/interfaces/default.interface';
import { DefaultService } from './../../default/default.service';
import { Container } from 'inversify';
import TYPES from './types';

const container = new Container();

container.bind<IDefaultInterface>(TYPES.Default).to(DefaultService);

export { container };
