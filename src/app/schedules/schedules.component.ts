import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

import {LoggerService} from '../_util/logger.service';
import {AlertService} from '../_util/alert.service';
import {SchedulesGenerationService} from '../_services/schedules-generation/schedules-generation.service';
import {StateService} from '../_services/state/state.service';

import {Course} from '../_domain/Course';
import {Schedule} from '../_domain/Schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit, AfterViewInit {

  generatedSchedules: Schedule[] = [];
  selectedCourses: Course[] = [];

  scheduleInView = 0;
  schedulesPicked: Schedule[] = [];

  spinner = true;
  generationTime: number = null;

  mobileView = false;
  keyDownSubject: Subject<string> = new Subject<string>();

  constructor(
    private logger: LoggerService,
    private router: Router,
    private alertService: AlertService,
    private schedulesGenerationService: SchedulesGenerationService,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.onWindowResize();

    // Receive selected courses
    if (!this.stateService.hasStateSaved()) {
      this.router.navigate(['/']);
      return;
    }
    this.selectedCourses = this.stateService.selectedCourses;
    this.logger.log('courses to generate', this.selectedCourses);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // if (!this.data) { // FIXME
      //   this.alertService.showAlert(
      //     'Acção inválida',
      //     'Não é possível andar para a frente. Por favor, preenche os campos de novo.',
      //     'danger');
      //   return;
      // }

      // Generate schedules
      const t0 = performance.now();
      this.generatedSchedules = this.schedulesGenerationService.generateSchedules(this.selectedCourses);
      const t1 = performance.now();
      this.generationTime = t1 - t0;
      this.logger.log('generated in (milliseconds)', this.generationTime);
      this.logger.log('generated schedules', this.generatedSchedules);

      if (this.generatedSchedules.length === 0) {
        this.alertService.showAlert(
          'Sem horários',
          'Não existe nenhum horário possível com estas cadeiras. Remove alguma e tenta de novo.',
          'warning');
        this.goBack();
        return;
      }

      // Fake staling for UX
      this.generationTime != null && this.generationTime < 1000 ?
        setTimeout(() => this.spinner = false, 1000) : this.spinner = false;
    }, 0);
  }

  pickViewOption(event): void {
    // TODO
    console.log(event.innerText);
  }

  addSchedule(scheduleID: number): void {
    const scheduleToAdd = this.generatedSchedules[scheduleID];
    if (!this.schedulesPicked.includes(scheduleToAdd)) {
      this.schedulesPicked.push(scheduleToAdd);
    } else {
      this.alertService.showAlert('Atenção', 'Este horário já foi adicionado!', 'warning');
    }
    this.logger.log('schedules picked', this.schedulesPicked);
  }

  removeSchedule(scheduleID: number): void {
    const scheduleToRemove = this.generatedSchedules[scheduleID];
    if (this.schedulesPicked.includes(scheduleToRemove)) {
      this.schedulesPicked.splice(this.schedulesPicked.indexOf(scheduleToRemove), 1);
    }
    this.logger.log('schedules picked', this.schedulesPicked);
  }

  finish(): void {
    // TODO
    this.alertService.showAlert(
      'Brevemente 😄',
      'Esta funcionalidade está ainda em desenvolvimento. Se quiseres contribuir passa pelo repositório no Github!',
      'info');
    console.log('finish');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onKeyDownArrowRight(): void {
    this.keyDownSubject.next('right');
  }

  onKeyDownArrowLeft(): void {
    this.keyDownSubject.next('left');
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.mobileView = window.innerWidth <= 991.98; // phones & tablets
  }

  @HostListener('window:popstate', [])
  onPopState(): void {
    this.goBack();
  }
}
