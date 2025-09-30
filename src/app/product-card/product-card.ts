import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Products {
  id: number;
  img: string;
  title: string;
  link: string;
  price1: string;
  price2?: string;
}
@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  template: `
    <div class="text-center text-base my-16">
      <p class="mb-2.5">小宅私物推薦適合作為禮品的好物，提供您做選擇！</p>
      <p class="mb-2.5">
        若您有企業或大量採購的需求，歡迎您填寫線上採購需求單，我們將會盡快回覆給您！
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-x-2 gap-y-6">
      @for (item of productCard; track item.id) {
        <div class="flex flex-col">
          <div class="aspect-square">
            <a [routerLink]="item.link"
              ><img [src]="item.img" [alt]="item.title" class="w-full h-full"
            /></a>
          </div>
          <div class="p-2.5">
            <div class="min-h-10 line-clamp-2 mb-4 text-center">
              <a [routerLink]="item.link">
                <h3 class="text-base font-bold text-sidenav-text">{{ item.title }}</h3>
              </a>
            </div>
            @if (item.price2 && item.price2.length > 0) {
              <div class="flex gap-2 justify-center text-base font-bold">
                <span class="line-through">{{ item.price1 }}</span>
                <span class="text-price2">{{ item.price2 }}</span>
              </div>
            } @else {
              <div class="text-center font-bold text-base">{{ item.price1 }}</div>
            }
          </div>
        </div>
      }
    </div>
    <div class="flex justify-center items-center mt-7">
      <button
        class="text-center text-white text-xs bg-show-more-button hover:bg-show-more-button-hover py-3 px-4 flex gap-2 rounded"
      >
        <span><i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i></span>
        <span>顯示更多禮品</span>
      </button>
    </div>

    <div class="mt-20 flex items-center">
      <div class="w-full bg-info-divider h-1"></div>
      <h2 class="text-center text-xl font-bold px-16 flex-shrink-0">企業服務專線</h2>
      <div class="w-full bg-info-divider h-1"></div>
    </div>
    <div class="px-10 py-9">
      <ul class="list-disc text-base">
        <li>服務專線：02 – 8712 – 0767</li>
        <li>線上客服：<a href="/">Line@ 官方客服</a></li>
        <li>服務時間：AM 09:00 ~ PM 19:00（週一至週五)</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  productCard: Products[] = [
    {
      id: 1,
      img: '/product1.webp',
      title: '英國 NEOM 清新甦活 室內擴香 100ml',
      link: '/product',
      price1: 'NT$1,822',
    },
    {
      id: 2,
      img: '/product2.jpg',
      title: '美國 SEASONS AERO 煦日無線無水香氛儀提把套組 (抹茶綠色)',
      link: '/product',
      price1: 'NT$3,400',
      price2: 'NT$3,128',
    },
    {
      id: 3,
      img: '/product3.jpg',
      title: 'LUCARIS 曼谷系列卡本內紅酒杯-470ML (2入禮盒組) 水晶玻璃杯',
      link: '/product',
      price1: 'NT$638',
      price2: 'NT$574',
    },
    {
      id: 4,
      img: '/product4.jpg',
      title: '日本 BUOY 海洋再生 皂盤 / 置物盤 (白)',
      link: '/product',
      price1: 'NT$823',
      price2: 'NT$650',
    },
    {
      id: 5,
      img: '/product5.jpg',
      title: '日本 悠悠庵 天然香木薰香系列 天然沉香木線香 13.5CM 長香 超值盒',
      link: '/product',
      price1: 'NT$1,320',
      price2: 'NT$990',
    },
    {
      id: 6,
      img: '/product6.jpg',
      title: '【幸福迎春禮盒】SYLLOGI 斯洛奇 冷壓初榨橄欖油750ML+三葉草蜂蜜500MLX2',
      link: '/product',
      price1: 'NT$2,210',
      price2: 'NT$1,776',
    },
    {
      id: 7,
      img: '/product1.webp',
      title: '英國 NEOM 清新甦活 室內擴香 100ml',
      link: '/product',
      price1: 'NT$1,822',
    },
    {
      id: 8,
      img: '/product2.jpg',
      title: '美國 SEASONS AERO 煦日無線無水香氛儀提把套組 (抹茶綠色)',
      link: '/product',
      price1: 'NT$3,400',
      price2: 'NT$3,128',
    },
    {
      id: 9,
      img: '/product3.jpg',
      title: 'LUCARIS 曼谷系列卡本內紅酒杯-470ML (2入禮盒組) 水晶玻璃杯',
      link: '/product',
      price1: 'NT$638',
      price2: 'NT$574',
    },
    {
      id: 10,
      img: '/product4.jpg',
      title: '日本 BUOY 海洋再生 皂盤 / 置物盤 (白)',
      link: '/product',
      price1: 'NT$823',
      price2: 'NT$650',
    },
    {
      id: 11,
      img: '/product5.jpg',
      title: '日本 悠悠庵 天然香木薰香系列 天然沉香木線香 13.5CM 長香 超值盒',
      link: '/product',
      price1: 'NT$1,320',
      price2: 'NT$990',
    },
    {
      id: 12,
      img: '/product6.jpg',
      title: '【幸福迎春禮盒】SYLLOGI 斯洛奇 冷壓初榨橄欖油750ML+三葉草蜂蜜500MLX2',
      link: '/product',
      price1: 'NT$2,210',
      price2: 'NT$1,776',
    },
    {
      id: 13,
      img: '/product1.webp',
      title: '英國 NEOM 清新甦活 室內擴香 100ml',
      link: '/product',
      price1: 'NT$1,822',
    },
    {
      id: 14,
      img: '/product2.jpg',
      title: '美國 SEASONS AERO 煦日無線無水香氛儀提把套組 (抹茶綠色)',
      link: '/product',
      price1: 'NT$3,400',
      price2: 'NT$3,128',
    },
    {
      id: 15,
      img: '/product3.jpg',
      title: 'LUCARIS 曼谷系列卡本內紅酒杯-470ML (2入禮盒組) 水晶玻璃杯',
      link: '/product',
      price1: 'NT$638',
      price2: 'NT$574',
    },
    {
      id: 16,
      img: '/product4.jpg',
      title: '日本 BUOY 海洋再生 皂盤 / 置物盤 (白)',
      link: '/product',
      price1: 'NT$823',
      price2: 'NT$650',
    },
    {
      id: 17,
      img: '/product5.jpg',
      title: '日本 悠悠庵 天然香木薰香系列 天然沉香木線香 13.5CM 長香 超值盒',
      link: '/product',
      price1: 'NT$1,320',
      price2: 'NT$990',
    },
    {
      id: 18,
      img: '/product6.jpg',
      title: '【幸福迎春禮盒】SYLLOGI 斯洛奇 冷壓初榨橄欖油750ML+三葉草蜂蜜500MLX2',
      link: '/product',
      price1: 'NT$2,210',
      price2: 'NT$1,776',
    },
    {
      id: 19,
      img: '/product1.webp',
      title: '英國 NEOM 清新甦活 室內擴香 100ml',
      link: '/product',
      price1: 'NT$1,822',
    },
    {
      id: 20,
      img: '/product2.jpg',
      title: '美國 SEASONS AERO 煦日無線無水香氛儀提把套組 (抹茶綠色)',
      link: '/product',
      price1: 'NT$3,400',
      price2: 'NT$3,128',
    },
    {
      id: 21,
      img: '/product3.jpg',
      title: 'LUCARIS 曼谷系列卡本內紅酒杯-470ML (2入禮盒組) 水晶玻璃杯',
      link: '/product',
      price1: 'NT$638',
      price2: 'NT$574',
    },
    {
      id: 22,
      img: '/product4.jpg',
      title: '日本 BUOY 海洋再生 皂盤 / 置物盤 (白)',
      link: '/product',
      price1: 'NT$823',
      price2: 'NT$650',
    },
    {
      id: 23,
      img: '/product5.jpg',
      title: '日本 悠悠庵 天然香木薰香系列 天然沉香木線香 13.5CM 長香 超值盒',
      link: '/product',
      price1: 'NT$1,320',
      price2: 'NT$990',
    },
    {
      id: 24,
      img: '/product6.jpg',
      title: '【幸福迎春禮盒】SYLLOGI 斯洛奇 冷壓初榨橄欖油750ML+三葉草蜂蜜500MLX2',
      link: '/product',
      price1: 'NT$2,210',
      price2: 'NT$1,776',
    },
  ];
}
