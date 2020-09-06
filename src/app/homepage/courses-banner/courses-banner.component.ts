import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../_domain/Course';

@Component({
  selector: 'app-course-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.scss']
})
export class CoursesBannerComponent implements OnInit {

  @Input() courses: Course[];

  @Output() campusSelected = new EventEmitter<{index: number, data: string}>();
  @Output() typesOfClassesSelected = new EventEmitter<{index: number, data: string[]}>();
  @Output() removeBtn = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  campusPicked(campusSelected: {index: number, data: string}): void {
    this.campusSelected.emit(campusSelected);
  }

  typesOfClassesPicked(typesSelected: {index: number, data: string[]}): void {
    this.typesOfClassesSelected.emit(typesSelected);
  }

  removeBtnClicked(index: number): void {
    this.removeBtn.emit(index);
  }

}
