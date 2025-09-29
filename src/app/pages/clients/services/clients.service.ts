import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '../../../shared/interfaces/http';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private readonly _http: HttpClient) { }

  public getAllClients() {
    return this._http.get<ListResponse<Client>>('clients');
  }
}
