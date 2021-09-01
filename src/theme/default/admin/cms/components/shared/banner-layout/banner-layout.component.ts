import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BannerSandbox } from '../../../../../../../core/admin/cms/banners/banner.sandbox';

@Component({
  selector: 'app-banner-layout',
  templateUrl: './banner-layout.component.html',
  styleUrls: ['./banner-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerLayoutComponent implements OnInit {
  constructor(public sandbox: BannerSandbox) {}
  ngOnInit() {
    this.getBannerLists();
  }
  // to get total count
  getBannerLists() {
    this.sandbox.getBannerListCount({ count: true });
    this.sandbox.getBannerListActive({ count: true, status: 1 });
    this.sandbox.getBannerListInActive({ count: true, status: 0 });
  }
}
