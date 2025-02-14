import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


interface FormletterResponse{
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class FormletterService {
  private endpointURL = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';
  constructor(private http: HttpClient) { }

  sendData(
    firstName: string,
    lastName: string,
    emailAddress:string,
    queryType:string,
    message: string,
    checkBox: boolean
  ): Observable<FormletterResponse> {
    const data = {
      firstName,
      lastName,
      emailAddress,
      queryType,
      message,
      checkBox
    };
    return this.http.post<FormletterResponse>(this.endpointURL, data);
  }
}
