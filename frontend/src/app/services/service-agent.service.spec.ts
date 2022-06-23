import { TestBed } from '@angular/core/testing';

import { ServiceAgentService } from './service-agent.service';

describe('ServiceAgentService', () => {
  let service: ServiceAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
