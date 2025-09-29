import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Client } from '../../interfaces/Client';
import { map } from 'rxjs';
import { ListResponse } from '../../../../shared/interfaces/http';

@Component({
  selector: 'app-selector-client',
  imports: [],
  templateUrl: './selector-client.component.html',
  styleUrl: './selector-client.component.scss'
})
export class SelectorClientComponent {
  public clients = signal<Client[]>([]);

  constructor(
    private readonly _activeRoute: ActivatedRoute
  ) {
    _activeRoute.data.pipe(
      map(data => (data['clients'] ?? []) as ListResponse<Client>)
    ).subscribe({
      next: (data) => {
        console.log(data);
        const { code, data: { results } } = data;
        if (code == 0) {
          this.clients.set(results);
        }
      },
      complete: () => {
        this.clients.set([]);
      }
    })
  }
}
