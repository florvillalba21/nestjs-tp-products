import { Injectable } from '@nestjs/common';
import {Product} from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  updateProduct(id: string, product: Product): Product {
    const index = this.products.findIndex(p => p.id === parseInt(id, 10));
    this.products[index] = product;
    return this.products[index];
  }

  deleteProduct(id: string): Product {
    const index = this.products.findIndex(p => p.id === parseInt(id, 10));
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }
}
