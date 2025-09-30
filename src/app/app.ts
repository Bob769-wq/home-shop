import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { HeroSection } from './hero-section/hero-section';
import { ProductCard } from './product-card/product-card';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidenav, HeroSection, ProductCard, Footer],
  template: `
    <app-header />
    <div
      class="flex gap-8 md:max-w-46.8rem media-screen-62rem:max-w-60.6rem
      media-screen-75rem:max-w-73rem media-screen-90rem:max-w-80rem
      mx-auto px-4 mt-9"
    >
      <app-sidenav class="w-1/4 hidden md:block" />
      <div class="md:w-3/4">
        <app-hero-section />
        <app-product-card />
      </div>
    </div>
    <app-sidenav class="md:hidden" />
    <app-footer />
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('home-shops');
}
