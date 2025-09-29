import { Component, effect, EventEmitter, Input, Output, signal } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Client } from '../../interfaces/Client';
import { map } from 'rxjs';
import { ListResponse } from '../../../../shared/interfaces/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector-client',
  imports: [FormsModule],
  templateUrl: './selector-client.component.html',
  styleUrl: './selector-client.component.scss'
})
export class SelectorClientComponent {
  public clients = signal<Client[]>([]);
  @Input() clientId = signal<number>(0);
  @Output() selectEvent = new EventEmitter<number>();

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

  onClientChange(newId: number) {
    this.selectEvent.emit(newId);
  }
}
