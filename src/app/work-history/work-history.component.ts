import { Component, OnInit } from '@angular/core';
import { WorkHistoryService } from './work-history.service';
import { Experience } from 'src/data';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  constructor(private workHistoryService: WorkHistoryService) {}
  workHistory: Experience[];
  splitPosition = 0;

  ngOnInit() {
    this.workHistory = this.workHistoryService.get();
    this.splitPosition = Math.ceil(this.workHistory.length / 2);
  }
}
