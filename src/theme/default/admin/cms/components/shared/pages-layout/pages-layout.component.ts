import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PagesSandbox } from '../../../../../../../core/admin/cms/pages/pages.sandbox';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesLayoutComponent implements OnInit {
  constructor(public pageSandbox: PagesSandbox) {}
  ngOnInit() {
    this.getPagesLists();
  }
  getPagesLists() {
    this.pageSandbox.getPagePagination({ count: true });
    this.pageSandbox.getActivePageCount({ count: true, status: 1 });
    this.pageSandbox.getInactivePageCount({ count: true, status: 0 });
  }
}
