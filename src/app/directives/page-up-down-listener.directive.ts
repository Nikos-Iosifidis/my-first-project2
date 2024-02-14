import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

@Directive({
  selector: '[pageUpDownListener]',
})
export class PageUpDownListenerDirective implements AfterViewInit {
  @Input({ required: true }) dropdown!: Dropdown;

  private step = 10;
  private defaultOnClickFn!: (
    event: any,
    option: any,
    isHide?: boolean,
    preventChange?: boolean
  ) => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.dropdown.onPageUpKey = () => {};
    this.dropdown.onPageDownKey = () => {};
    this.defaultOnClickFn = this.dropdown.onOptionSelect;
    this.dropdown.onOptionSelect = (
      event: any,
      option: any,
      isHide?: boolean,
      preventChange?: boolean
    ) => {
      this.defaultOnClickFn.apply(this.dropdown,[event, option, isHide, preventChange]);
      event.preventDefault();
    };
  }

  @HostListener('document:keydown.pageup', ['$event'])
  handlePageUp(event: KeyboardEvent): void {
    if (this.isDropdownFocused()) {
      this.navigateDropdownItems(-this.step);
      this.dropdown.scrollInView(this.dropdown.focusedOptionIndex());
      event.preventDefault();
    }
  }

  @HostListener('document:keydown.pagedown', ['$event'])
  handlePageDown(event: KeyboardEvent): void {
    if (this.isDropdownFocused()) {
      this.navigateDropdownItems(this.step);
      this.dropdown.scrollInView(this.dropdown.focusedOptionIndex());
      event.preventDefault();
    }
  }

  private isDropdownFocused(): boolean {
    return this.el.nativeElement.contains(document.activeElement);
  }

  private navigateDropdownItems(direction: number): void {
    const lastIndex = this.dropdown.findLastOptionIndex();
    if (
      direction > 0 &&
      this.dropdown.focusedOptionIndex() + direction > lastIndex
    ) {
      this.dropdown.focusedOptionIndex.set(lastIndex);
      return;
    }

    if (direction < 0 && this.dropdown.focusedOptionIndex() + direction < 0) {
      this.dropdown.focusedOptionIndex.set(0);
      return;
    }
    this.dropdown.focusedOptionIndex.update((current) => current + direction);
  }
}
