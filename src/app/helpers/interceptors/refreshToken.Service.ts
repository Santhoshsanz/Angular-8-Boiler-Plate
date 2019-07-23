import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class RefreshTokenService {
  public processing: boolean = false;
  public storage: Subject<any> = new Subject<any>();

  public publish(value: any) {
    // console.log("Publishing")
    // console.log(this.storage)
    this.storage.next(value);
    this.storage=new Subject();
    // console.log(this.storage)
  }
}