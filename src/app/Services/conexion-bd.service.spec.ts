import { TestBed } from '@angular/core/testing';

import { ConexionBdService } from './conexion-bd.service';

describe('ConexionBdService', () => {
  let service: ConexionBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
