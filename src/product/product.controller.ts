import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Product } from './product.model'; // Corrige la importación aquí
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Product {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: Product): Product {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Product {
    return this.productService.deleteProduct(id);
  }
}
