import { Injectable } from '@angular/core';
import { Product } from '../app.component';
import { generate } from 'random-words';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {
  createProducts(count: number): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
      products.push({
        id: i,
        code: 'code-' + i,
        name: generate(),
        category: generate(),
        quantity: Math.floor(Math.random() * 100),
        dragEnabled: false,
      });
    }
    return products;
  }
}
