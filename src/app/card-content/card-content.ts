import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Product {
  id: number;
  img: string;
  title: string;
  link: string;
  price1: string;
  price2?: string;
}
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col">
      <div class="aspect-square">
        <a [routerLink]="product().link"
          ><img [src]="product().img" [alt]="product().title" class="w-full h-full"
        /></a>
      </div>
      <div class="p-2.5">
        <div class="min-h-10 line-clamp-2 mb-4 text-center">
          <a [routerLink]="product().link">
            <h3 class="text-base font-bold text-sidenav-text">{{ product().title }}</h3>
          </a>
        </div>
        @if (product().price2) {
          <div class="flex gap-2 justify-center text-base font-bold">
            <span class="line-through">{{ product().price1 }}</span>
            <span class="text-price2">{{ product().price2 }}</span>
          </div>
        } @else {
          <div class="text-center font-bold text-base">{{ product().price1 }}</div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CardContent {
  product = input.required<Product>();
}
