import { Injectable } from '@angular/core';
import { Experience, experiences } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class WorkHistoryService {
  constructor() {}

  get(): Experience[] {
    return experiences;
  }
}
