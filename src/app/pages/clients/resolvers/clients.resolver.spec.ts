import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allClientsResolver } from './clients.resolver';

describe('allClientsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allClientsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
