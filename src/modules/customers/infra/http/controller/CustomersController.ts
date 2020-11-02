import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const customer = request.body;

    const createCustomerService = container.resolve(CreateCustomerService);

    const createdUser = await createCustomerService.execute(customer);

    return response.status(201).json(createdUser);
  }
}
