import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService {
  apiLink: BehaviorSubject<string> = new BehaviorSubject('https://ec2-3-87-140-186.compute-1.amazonaws.com')
  constructor() {
  }
}
