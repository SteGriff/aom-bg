import { TestBed } from '@angular/core/testing';

import { UnitDialogService } from './unit-dialog.service';

describe('UnitDialogService', () => {
  let service: UnitDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
