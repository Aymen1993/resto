import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private data = new Subject<any>();

  updateData(data: any) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }
}