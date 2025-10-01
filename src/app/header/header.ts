import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule, NgClass],
  template: `
    <header class="">
      <div class="bg-header-bar py-1.5">
        <div class="px-4">
          <p class="text-white">
            ★小宅會員大募集★ 現在加入會員立即免費贈送100元註冊禮，每筆訂單再享回饋金 ☛
            <a routerLink="/join">立即加入享好康</a>
          </p>
        </div>
      </div>
      <div class="flex justify-between px-3">
        <div class="py-3.5 flex-shrink-0 flex items-center gap-4">
          <i
            class="fa-solid fa-bars fa-xl md:hidden"
            style="color: #626262;"
            (click)="toggleMenu()"
          ></i>
          <a routerLink="/"
            ><img src="/home-shop-logo.png" width="160" height="38" alt="home-shop-logo"
          /></a>
        </div>
        <div class="text-nav-font-color">
          <ul class="flex text-base">
            @for (item of navItem; track item.id; let i = $index) {
              <li class="relative group cursor-pointer hidden md:flex">
                <a
                  [routerLink]="item.link"
                  [class]="
                    item.title === '企業採購'
                      ? 'flex gap-1 p-6 text-sidenav-text-hover'
                      : 'flex gap-1 p-6 hover:text-sidenav-text-hover'
                  "
                >
                  <span>{{ item.title }}</span>
                  <span
                    ><i class="fa-solid fa-chevron-down fa-xs" style="color:currentColor;"></i
                  ></span>
                </a>
                @if (item.children && item.children.length > 0) {
                  <div
                    class="absolute top-full bg-white z-[100] invisible group-hover:visible w-max"
                    [class]="i >= navItem.length - 3 ? 'right-0' : 'left-0'"
                  >
                    @if (item.id === 8) {
                      <div>
                        @for (child of item.children; track child.id) {
                          <ul class="">
                            <li class="px-6 mb-5 cursor-pointer hover:bg-grandson-hover">
                              <a [routerLink]="child.link">{{ child.title }}</a>
                            </li>
                          </ul>
                        }
                      </div>
                    } @else {
                      <div class="grid grid-cols-3">
                        @for (child of item.children; track child.id) {
                          <ul>
                            <li class="px-4 mb-5 font-bold cursor-pointer">{{ child.title }}</li>
                            @for (grandson of child.children; track grandson.id) {
                              <li class="px-4 mb-5 cursor-pointer hover:bg-grandson-hover">
                                <a [routerLink]="grandson.link">{{ grandson.title }}</a>
                              </li>
                            }
                          </ul>
                        }
                      </div>
                    }
                  </div>
                }
              </li>
            }
            <li>
              <a class="inline-block p-6" routerLink="/"
                ><i class="fa-solid fa-user fa-lg" style="color: #626262;"></i
              ></a>
            </li>
            <li class="relative group">
              <a class="inline-block p-6" routerLink="/"
                ><i class="fa-solid fa-cart-shopping fa-lg" style="color: #626262;"></i
              ></a>
              <div
                class="absolute top-3 left-9 rounded-full bg-white border w-6 h-6 flex justify-center items-center"
              >
                <span>0</span>
              </div>
              <div
                class="absolute right-0 top-full w-96 h-24 bg-white z-[100] invisible group-hover:visible shadow-md"
              >
                <p class="p-3">購物車內沒有任何商品。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden md:block px-4">
        <form
          class="border-4 border-search-border-color flex items-center"
          [formGroup]="form"
          (submit)="submit()"
        >
          <input
            type="text"
            placeholder="請輸入商品名稱..."
            class="outline-none p-3 pr-0 w-full"
            formControlName="searchControl"
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass fa-lg mr-2" style="color: #626262;"></i>
          </button>
        </form>
      </div>
    </header>

    <div
      class="fixed top-0 left-0 right-0 z-[10000] shadow-lg bg-white transition-transform duration-300"
      [ngClass]="{
        '-translate-y-full': !isScrolled(),
        'translate-y-0': isScrolled(),
      }"
    >
      <div class="flex justify-between px-3">
        <div class="py-3.5 flex-shrink-0 flex items-center gap-4">
          <i
            class="fa-solid fa-bars fa-xl md:hidden"
            style="color: #626262;"
            (click)="toggleMenu()"
          ></i>
          <a routerLink="/"
            ><img src="/home-shop-logo.png" width="160" height="38" alt="home-shop-logo"
          /></a>
        </div>
        <div class="text-nav-font-color">
          <ul class="flex text-base">
            @for (item of navItem; track item.id; let i = $index) {
              <li class="relative group cursor-pointer hidden md:flex">
                <a
                  [routerLink]="item.link"
                  [class]="
                    item.title === '企業採購'
                      ? 'flex gap-1 p-6 text-sidenav-text-hover'
                      : 'flex gap-1 p-6 hover:text-sidenav-text-hover'
                  "
                >
                  <span>{{ item.title }}</span>
                  <span
                    ><i class="fa-solid fa-chevron-down fa-xs" style="color:currentColor;"></i
                  ></span>
                </a>
                @if (item.children && item.children.length > 0) {
                  <div
                    class="absolute top-full bg-white z-[100] invisible group-hover:visible w-max"
                    [class]="i >= navItem.length - 3 ? 'right-0' : 'left-0'"
                  >
                    @if (item.id === 8) {
                      <div>
                        @for (child of item.children; track child.id) {
                          <ul class="">
                            <li class="px-6 mb-5 cursor-pointer hover:bg-grandson-hover">
                              <a [routerLink]="child.link">{{ child.title }}</a>
                            </li>
                          </ul>
                        }
                      </div>
                    } @else {
                      <div class="grid grid-cols-3">
                        @for (child of item.children; track child.id) {
                          <ul>
                            <li class="px-4 mb-5 font-bold cursor-pointer">{{ child.title }}</li>
                            @for (grandson of child.children; track grandson.id) {
                              <li class="px-4 mb-5 cursor-pointer hover:bg-grandson-hover">
                                <a [routerLink]="grandson.link">{{ grandson.title }}</a>
                              </li>
                            }
                          </ul>
                        }
                      </div>
                    }
                  </div>
                }
              </li>
            }
            <li>
              <a class="inline-block p-6" routerLink="/"
                ><i class="fa-solid fa-user fa-lg" style="color: #626262;"></i
              ></a>
            </li>
            <li class="relative group">
              <a class="inline-block p-6" routerLink="/"
                ><i class="fa-solid fa-cart-shopping fa-lg" style="color: #626262;"></i
              ></a>
              <div
                class="absolute top-3 left-9 rounded-full bg-white border w-6 h-6 flex justify-center items-center"
              >
                <span>0</span>
              </div>
              <div
                class="absolute right-0 top-full w-96 h-24 bg-white z-[100] invisible group-hover:visible shadow-md"
              >
                <p class="p-3">購物車內沒有任何商品。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      [class]="isMenuOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggleMenu()"
    ></div>
    <div
      class="fixed top-0 left-0 h-full bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isMenuOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="px-3 py-6">
        <form class="flex items-center gap-2" [formGroup]="form" (submit)="submit()">
          <input
            type="text"
            placeholder="請輸入商品名稱..."
            class="outline-none border-2 p-1 pr-0 w-full"
            formControlName="searchControl"
          />
          <button type="submit" class="bg-sidenav-bg-color p-2 border-2">
            <span>GO</span>
          </button>
        </form>
        <div class="mt-5">
          <ul class="text-base">
            @for (item of navItem; track item.id; let i = $index) {
              <li class="relative group cursor-pointer border-b flex">
                <a
                  [routerLink]="item.link"
                  [class]="
                    item.title === '企業採購'
                      ? 'flex gap-1 py-2.5 text-sidenav-text-hover'
                      : 'flex gap-1 py-2.5 hover:text-sidenav-text-hover'
                  "
                >
                  <span>{{ item.title }}</span>
                  <span
                    ><i class="fa-solid fa-chevron-down fa-xs" style="color:currentColor;"></i
                  ></span>
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Header {
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 158);
  }

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control('', {
      validators: [Validators.required],
    }),
  });

  submit() {
    if (this.form.invalid) {
      console.error('錯誤');
      return;
    }
    const data = this.form.getRawValue();
    data.searchControl = data.searchControl.trim();

    console.log(data);
  }

  navItem: NavList[] = [
    {
      id: 1,
      title: '小宅好食',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 2,
      title: '餐廚',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 3,
      title: '居家',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 4,
      title: '美妝保養',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 5,
      title: '休閒戶外',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 6,
      title: '親子',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 7,
      title: '寵物',
      link: '/header',
      children: [
        {
          id: 1,
          title: '主題嚴選',
          link: '/sub',
          children: [
            { id: 1, title: '新品搶先看 NEW!', link: '/' },
            { id: 2, title: '美食自由配 任2件95折', link: '/' },
            { id: 3, title: '年節送禮禮盒', link: '/' },
            { id: 4, title: '素食主義', link: '/' },
            { id: 5, title: '無麥麩飲食', link: '/' },
            { id: 6, title: '生酮飲食專區', link: '/' },
            { id: 7, title: '低糖低卡', link: '/' },
            { id: 8, title: '健康小零嘴', link: '/' },
            { id: 9, title: '台灣在地食材', link: '/' },
            { id: 10, title: '國外進口食材', link: '/' },
            { id: 11, title: '即期惜福良品', link: '/' },
          ],
        },
        {
          id: 2,
          title: '健康食材',
          link: '/sub',
          children: [
            { id: 1, title: '油品', link: '/' },
            { id: 2, title: '調味料', link: '/' },
            { id: 3, title: '沾拌醬', link: '/' },
            { id: 4, title: '米／麵', link: '/' },
            { id: 5, title: '義大利麵醬', link: '/' },
            { id: 6, title: '烘焙材料粉', link: '/' },
          ],
        },
        {
          id: 3,
          title: '嚴選食品',
          link: '/sub',
          children: [
            { id: 1, title: '蜂蜜', link: '/' },
            { id: 2, title: '果醬', link: '/' },
            { id: 3, title: '抹醬', link: '/' },
            { id: 4, title: '堅果', link: '/' },
            { id: 5, title: '零食糖果', link: '/' },
            { id: 6, title: '沖泡飲料', link: '/' },
            { id: 7, title: '穀片／麥片', link: '/' },
            { id: 8, title: '保健食品', link: '/' },
          ],
        },
      ],
    },
    {
      id: 8,
      title: '企業採購',
      link: '/header',
      children: [
        { id: 1, title: '企業採購', link: '/sub' },
        { id: 2, title: '品牌總覽', link: '/sub' },
      ],
    },
  ];
}
