import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Observable } from 'rxjs';
import { ListResponse } from '../../../shared/interfaces/http';
import { Client } from '../interfaces/Client';

export const allClientsResolver: ResolveFn<Observable<ListResponse<Client>>> = (route, state) => {
  const clientService = inject(ClientsService);

  return clientService.getAllClients();
};
