import { Component, inject, signal } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxControlError } from 'ngxtension/control-error';

interface ChildrenList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-sidenav',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatCheckbox,
    RouterLink,
    ReactiveFormsModule,
    MatError,
    NgxControlError,
  ],
  template: `
    <div class="bg-sidenav-bg-color">
      <div class="p-4 text-sidenav-text">
        <h2 class="text-base font-bold pb-2.5 mb-4">商品分類</h2>
        <div class="flex justify-between items-center">
          <h2 class="text-base font-bold hover:text-sidenav-text-hover">
            <a routerLink="/sidenav">企業採購</a>
          </h2>
          <div class="bg-white w-4 h-4 flex items-center justify-center cursor-pointer">
            <span (click)="toggleChildren()">
              {{ isChildrenOpen() ? '-' : '+' }}
            </span>
          </div>
        </div>
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          [class]="isChildrenOpen() ? 'max-h-64' : 'max-h-0'"
        >
          <ul class="pl-4 pt-4 flex flex-col gap-4">
            @for (item of childrenItem; track item.id) {
              <li class="text-base hover:text-sidenav-text-hover cursor-pointer">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
      </div>
      <div class="p-4 text-sidenav-text">
        <h2 class="text-base font-bold pb-2.5 mb-4">企業採購需求</h2>
        <p class="text-base mb-4">
          您有企業採購或團購相關問題嗎? 請用以下表單聯繫我們，我們會盡快於24小時內回覆給您~謝謝
        </p>
        <form class="flex flex-col gap-4" [formGroup]="information" (submit)="submit()">
          <mat-form-field>
            <mat-label>姓名</mat-label>
            <input type="text" matInput formControlName="Name" />
            <mat-error *ngxControlError="information.controls.Name; track: 'required'"
              >必填
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <mat-label>Email</mat-label>
            <input type="text" matInput formControlName="Email" />
            <mat-error *ngxControlError="information.controls.Email; track: 'required'"
              >必填
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <mat-label>您想詢問的問題</mat-label>
            <mat-select value="1" formControlName="Products">
              <mat-option value="1">商品相關問題</mat-option>
              <mat-option value="2">訂單相關問題</mat-option>
              <mat-option value="3">大宗採購相關問題</mat-option>
              <mat-option value="4">廠商合作</mat-option>
              <mat-option value="5">其他問題</mat-option>
            </mat-select>
            <mat-error *ngxControlError="information.controls.Products; track: 'required'"
              >必填
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <mat-label>內容</mat-label>
            <textarea matInput formControlName="Content"></textarea>
            <mat-error *ngxControlError="information.controls.Content; track: 'required'"
              >必填
            </mat-error>
          </mat-form-field>
          <mat-checkbox formControlName="Robot">我不是機器人</mat-checkbox>
          <button class="py-4 bg-bg-button text-white text-xs">送出</button>
        </form>
      </div>
    </div>
  `,
  styles: ``,
})
export class Sidenav {
  isChildrenOpen = signal(false);
  toggleChildren() {
    this.isChildrenOpen.update((toggle) => !toggle);
  }

  fb = inject(NonNullableFormBuilder);
  information = this.fb.group({
    Name: this.fb.control('', {
      validators: [Validators.required],
    }),
    Email: this.fb.control('', {
      validators: [Validators.required],
    }),
    Products: this.fb.control('1', {
      validators: [Validators.required],
    }),
    Content: this.fb.control('', {
      validators: [Validators.required],
    }),
    Robot: this.fb.control('', {
      validators: [Validators.required],
    }),
  });

  submit() {
    if (this.information.invalid) {
      console.error('錯誤');
      return;
    }

    const data = this.information.getRawValue();
    data.Name = data.Name.trim();
    data.Email = data.Email.trim();

    console.log(data);
  }

  childrenItem: ChildrenList[] = [
    {
      id: 1,
      title: '食品禮盒',
      link: '/child',
    },
    {
      id: 2,
      title: '餐廚禮盒',
      link: '/child',
    },
    {
      id: 3,
      title: '香氛保養禮盒',
      link: '/child',
    },
    {
      id: 4,
      title: '母嬰禮盒',
      link: '/child',
    },
    {
      id: 5,
      title: '居家生活禮品',
      link: '/child',
    },
  ];
  protected readonly NgxControlError = NgxControlError;
}
