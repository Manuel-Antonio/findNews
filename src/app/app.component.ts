import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';
  newsList : any[] = [];
  isLoading : boolean = false;
  isError : boolean = false;
  txtError : string = "";

  constructor(private noticiaSrv: NoticiaService) {

  }
  buscarNoticias( parametros : any) : void {
    this.isLoading = true;
    this.newsList = [];
    const timeout = setTimeout(() => {
      this.noticiaSrv.getNoticias(parametros).subscribe( 
        data => {
          this.isLoading = false;
          this.newsList = data.articles;
          if(this.newsList.length === 0) {
            this.error("No hay articulos para este filtro");
          }
        }
        , 
        error => {
          console.log(error)
          this.isLoading = false;
          this.error("Ha ocurrido un error en buscar las noticias para la categoría y país elegidos");
      } );
      clearTimeout(timeout);
    }, 1000);
  }

  error(message : string) {
    this.isError = true;
    this.txtError = message;
    const errorTimeout = setTimeout(() => {
      this.isError = false;
      this.txtError = "";
      clearTimeout(errorTimeout);
    }, 3000);
  }
}
