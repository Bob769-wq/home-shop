import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  title: string;
  link?: string;
  children?: FooterList[];
}
interface PrivacyList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="bg-footer-bg-color text-footer-text">
      <div class="max-w-80rem mx-auto px-3.5 pt-9">
        <div class="flex flex-col md:flex-row gap-16">
          <div class="px-3.5 md:w-1/4">
            <a><img src="/footer-logo.png" alt="logo" width="266" height="95" /></a>
          </div>
          <div class="px-3.5 mb-9 flex-1 md:w-3/4">
            <ul class="grid grid-cols-2 gap-y-8  md:flex justify-around md:gap-4 md:gap-y-0">
              @for (item of footerItem; track item.id) {
                <li class="">
                  <div class="mb-6 text-base font-bold">{{ item.title }}</div>
                  <ul class="flex flex-col gap-1.5">
                    @for (child of item.children; track child.id) {
                      <li class="text-base">
                        <a
                          [routerLink]="child.link"
                          class="inline-block hover:text-footer-list-hover"
                          >{{ child.title }}</a
                        >
                      </li>
                    }
                  </ul>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white h-0.5"></div>
    <div class="bg-footer-bg-color text-footer-text">
      <div class="max-w-80rem mx-auto px-3.5 py-8">
        <div class="flex flex-col md:flex-row  md:justify-between text-xs">
          <ul class="flex separator-list">
            @for (item of privacyItem; track item.id) {
              <li class="hover:text-footer-list-hover">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
          <div>Copyright 2025 homeshops小宅私物 All Rights Reserved</div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .separator-list li {
      display: inline;
    }
    .separator-list li:after {
      content: '/';
      padding: 0.25rem;
    }
    .separator-list li:last-child:after {
      content: none;
    }
  `,
})
export class Footer {
  footerItem: FooterList[] = [
    {
      id: 1,
      title: '會員中心',
      children: [
        {
          id: 1,
          title: '會員註冊/登入',
          link: '/footer',
        },
        {
          id: 2,
          title: '忘記密碼',
          link: '/footer',
        },
        {
          id: 3,
          title: '會員制度說明',
          link: '/footer',
        },
        {
          id: 4,
          title: '我的最愛',
          link: '/footer',
        },
        {
          id: 5,
          title: '訂單查詢',
          link: '/footer',
        },
      ],
    },
    {
      id: 2,
      title: '購物說明',
      children: [
        {
          id: 1,
          title: '購物常見問題',
          link: '/footer',
        },
        {
          id: 2,
          title: '付款常見問題',
          link: '/footer',
        },
        {
          id: 3,
          title: '退換貨及退款',
          link: '/footer',
        },
        {
          id: 4,
          title: 'Global Shopping',
          link: '/footer',
        },
        {
          id: 5,
          title: '聯絡我們',
          link: '/footer',
        },
      ],
    },
    {
      id: 3,
      title: '關於我們',
      children: [
        {
          id: 1,
          title: '最新消息',
          link: '/footer',
        },
        {
          id: 2,
          title: '公司簡介',
          link: '/footer',
        },
        {
          id: 3,
          title: '企業採購',
          link: '/footer',
        },
        {
          id: 4,
          title: '廠商合作',
          link: '/footer',
        },
        {
          id: 5,
          title: '人才招募',
          link: '/footer',
        },
      ],
    },
    {
      id: 4,
      title: '社群媒體',
      children: [
        {
          id: 1,
          title: 'LINE@官方客服',
          link: '/footer',
        },
        {
          id: 2,
          title: 'home+ 生活誌',
          link: '/footer',
        },
        {
          id: 3,
          title: 'Facebook',
          link: '/footer',
        },
        {
          id: 4,
          title: 'Instagram',
          link: '/footer',
        },
      ],
    },
  ];
  privacyItem: PrivacyList[] = [
    {
      id: 1,
      title: '網站使用條款',
      link: '/privacy',
    },
    {
      id: 2,
      title: '隱私權政策',
      link: '/privacy',
    },
    {
      id: 3,
      title: '最新消息',
      link: '/privacy',
    },
  ];
}
