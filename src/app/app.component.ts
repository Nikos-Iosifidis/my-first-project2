import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { SelectContainerComponent } from 'ngx-drag-to-select';
import { Dataservice } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: Product[] = [];
  selectedProducts: any[] = [];
  disableDragSelection: boolean = false;
  @ViewChild(SelectContainerComponent)
  selectContainer: SelectContainerComponent | null = null;

  constructor(private dataService: Dataservice) {
    this.products = this.dataService.createProducts(100);
  }

  select(product: Product[]) {}

  isSelected(product: Product) {
    return !!this.selectedProducts.find((x) => x == product);
  }

  configureDragAndDrop(event: any, product: Product) {
    this.disableDragSelection =
      this.selectedProducts.length === 1 &&
      this.selectedProducts[0] === product;
    this.products.forEach((x) => {
      x.dragEnabled = false;
    });
    product.dragEnabled = this.disableDragSelection;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
    setTimeout(() => {
      this.selectContainer?.update();
    });
  }

  triggerSelectedProductsUpdate() {
    this.selectedProducts = [...this.selectedProducts];
  }
}

export interface Product {
  id: any;
  code: any;
  name: any;
  category: any;
  quantity: any;
  dragEnabled: boolean;
}
