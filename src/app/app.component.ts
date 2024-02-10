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
  selectedDocuments: any[] = [];
  disableDragSelection: boolean = false;
  @ViewChild(SelectContainerComponent)
  selectContainer: SelectContainerComponent | null = null;

  constructor(private dataService: Dataservice) {
    this.products = this.dataService.createProducts(100);
  }

  someMethod(event: any) {
    //console.log(event);
  }

  isSelected(product: Product) {
    return !!this.selectedDocuments.find((x) => x == product);
  }

  disableIfNeeded(event: any, product: Product) {
    this.disableDragSelection =
      this.selectedDocuments.length === 1 &&
      this.selectedDocuments[0] === product;
    this.products.forEach((x) => {
      x.dragEnabled = false;
    });
    product.dragEnabled = this.disableDragSelection;
  }

  disableReorder() {
    //console.log(this.selectedDocuments.length);
    return this.selectedDocuments.length > 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
    setTimeout(() => {
      this.selectContainer?.update();
    });
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
