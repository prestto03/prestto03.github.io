import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private activeItemSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public activeItem$: Observable<number> = this.activeItemSubject.asObservable();

  constructor() { }

  setActiveItem(index: number) {
    this.activeItemSubject.next(index);
  }

  getActiveItem(): Observable<number> {
    return this.activeItem$;
  }
}
