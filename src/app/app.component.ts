import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: Product[] = [];
  selectedDocuments: any[] = [];
  disable: boolean = false;

  constructor() {
    this.products.push({
      id: '1000',
      code: 'f230fh0g31',
      name: 'Bamboo Watch1',
      description: 'Product Description1',
      image: 'bamboo-watch.jpg',
      price: 651,
      category: 'Accessories1',
      quantity: 241,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
    this.products.push({
      id: '1001',
      code: 'f230fh0g32',
      name: 'Bamboo Watch2',
      description: 'Product Description2',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories2',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
    this.products.push({
      id: '1002',
      code: 'f230fh0g33',
      name: 'Bamboo Watch3',
      description: 'Product Description3',
      image: 'bamboo-watch3.jpg',
      price: 65,
      category: 'Accessories3',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
    this.products.push({
      id: '1004',
      code: 'f230fh0g34',
      name: 'Bamboo Watch1',
      description: 'Product Description1',
      image: 'bamboo-watch.jpg',
      price: 651,
      category: 'Accessories1',
      quantity: 241,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
    this.products.push({
      id: '1005',
      code: 'f230fh0g35',
      name: 'Bamboo Watch2',
      description: 'Product Description2',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories2',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
    this.products.push({
      id: '1006',
      code: 'f230fh0g36',
      name: 'Bamboo Watch3',
      description: 'Product Description3',
      image: 'bamboo-watch3.jpg',
      price: 65,
      category: 'Accessories3',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    });
  }

  someMethod(event: any) {
    console.log(event);
  }

  isSelected(product: Product) {
    return !!this.selectedDocuments.find((x) => x == product);
  }

  disableIfNeeded(event: any, product: Product) {
    console.log(event);
    this.disable =
      this.selectedDocuments.length === 1 &&
      this.selectedDocuments[0] === product;
  }
  disableReorder() {
    console.log(this.selectedDocuments.length);
    return this.selectedDocuments.length > 1;
  }
}

export interface Product {
  id: any;
  code: any;
  name: any;
  description: any;
  image: any;
  price: any;
  category: any;
  quantity: any;
  inventoryStatus: any;
  rating: any;
}
