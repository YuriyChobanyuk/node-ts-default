import { PostDefaultDto } from './dto/post-default.dto';
import { IDefaultInterface } from './interfaces/default.interface';
import 'reflect-metadata';
import { controller, interfaces, httpGet, request, httpPost, requestBody } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../common/DI/types';
import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import {validate} from 'class-validator';

@controller('/default')
export class DefaultController implements interfaces.Controller {
  constructor(@inject(TYPES.Default) private defaultService: IDefaultInterface) {}

  @httpGet('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('middleware invoked');
    next();
  })
  getDefault() {
    return this.defaultService.getDefault();
  }

  @httpPost('/', async (req, res, next) => {
    const body = plainToClass(PostDefaultDto, req.body);

    const error = await validate(body);

    if (error) {
      res.status(400).send(error);
    }

    req.body = body;
    next();
  })
  postDefault(@requestBody() body: PostDefaultDto) {
    return body.getCombined();
  }
}
