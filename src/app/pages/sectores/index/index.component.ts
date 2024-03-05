import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/animation/carousel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  activeItem: number = 0;
  private activeItemSubscription!: Subscription;

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.activeItemSubscription = this.carouselService.getActiveItem().subscribe(index => {
      this.activeItem = index;
    });
  }

  ngOnDestroy() {
    this.activeItemSubscription.unsubscribe();
  }
}
