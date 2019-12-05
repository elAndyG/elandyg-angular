import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryComponent } from './work-history.component';
import { WorkHistoryService } from './work-history.service';

describe('WorkHistoryComponent', () => {
  let component: WorkHistoryComponent;
  const workHistoryServiceSpy = jasmine.createSpyObj('WorkHistoryService', [
    'get'
  ]);

  beforeEach(() => {
    component = new WorkHistoryComponent(workHistoryServiceSpy);
  });

  afterEach(() => {
    component = null;
  });

  it('5 items should split to 3', () => {
    workHistoryServiceSpy.get.and.returnValue([null, null, null, null, null]);

    component.ngOnInit();

    expect(component.splitPosition).toEqual(3);
  });

  it('2 items should split to 1', () => {
    workHistoryServiceSpy.get.and.returnValue([null, null]);

    component.ngOnInit();

    expect(component.splitPosition).toEqual(1);
  });

  it('0 items should split to 0', () => {
    workHistoryServiceSpy.get.and.returnValue([]);

    component.ngOnInit();

    expect(component.splitPosition).toEqual(0);
  });
});
