import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonHttpService } from 'src/app/shared/services/http/common-http.service';
import { FrameURLService } from 'src/app/shared/services/http/frame-url.service';



@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _frameUrlService: FrameURLService,
    private _commonHttpService: CommonHttpService) { }

  login(requestObject: any): Observable<any> {
    requestObject.path = this._frameUrlService.getHttpFramedURL(requestObject);
    console.log(requestObject);
    return this._commonHttpService.sendReciveService(requestObject);
  }
}
