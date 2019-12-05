import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience;

  constructor() {}

  ngOnInit() {}

}
