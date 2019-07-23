import { HTTPStatus } from './../../../helpers/interceptors/httpLoader.interceptor';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  HTTPActivity: boolean = false;
  httpActivitySubscribe: any;
  constructor(private httpStatus: HTTPStatus) {

    // Loader Hide/Show
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.httpActivitySubscribe = this.HTTPActivity = status;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.httpActivitySubscribe) {
      this.httpActivitySubscribe.unsubscribe()
    }
  }

}
