import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {
  @Input() newsList?: any[];


  formatDateTime(date : string) : string {
    return moment(date).format("DD/MM/YYYY - HH:mm:ss")
  }
}
