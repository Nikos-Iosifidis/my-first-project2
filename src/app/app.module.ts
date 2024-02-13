import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragToSelectModule } from 'ngx-drag-to-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { PageUpDownListenerDirective } from './directives/page-up-down-listener.directive';

@NgModule({
  declarations: [AppComponent, PageUpDownListenerDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragToSelectModule.forRoot(),
    ButtonModule,
    TableModule,
    DragDropModule,
    DropdownModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
