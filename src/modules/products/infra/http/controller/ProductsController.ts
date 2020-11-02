import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const product = request.body;

    const createProductService = container.resolve(CreateProductService);

    const createdProduct = await createProductService.execute(product);

    return response.status(201).json(createdProduct);
  }
}
