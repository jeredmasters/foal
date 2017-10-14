import {
  methodNotAllowed,
  newContextualDecorator,
  NotFoundError,
  RestController,
  RestParams,
  Service
} from '@foal/core';

@Service()
export class User implements RestController {
  constructor() {}

  public async create(data: any, params: RestParams): Promise<any> {
    console.log(data);
    return 1;
  }

  @newContextualDecorator(async ctx => {
    console.log(ctx);
    return ctx;
  })
  public async get(id: any, params: RestParams): Promise<any> {
    throw new NotFoundError();
  }

  @methodNotAllowed()
  public async getAll(params: RestParams): Promise<any> {
    return 'You got it all';
  }

  public async update(id: any, data: any, params: RestParams): Promise<any> {
    console.log('id', id);
    console.log('data', data);
    console.log('params', params);
    return Promise.resolve();
  }

  @newContextualDecorator(ctx => Promise.resolve(ctx))
  public async patch(id: any, data: any, params: RestParams): Promise<any> {
    console.log('id', id);
    console.log('data', data);
    console.log('params', params);
    return Promise.resolve();
  }

  public async delete(id: any, params: RestParams): Promise<any> {
    console.log('id', id);
    console.log('params', params);
    return Promise.resolve();
  }
}
