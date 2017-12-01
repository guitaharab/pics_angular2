import {Component} from '@angular/core'
import { FotoService } from '../foto/foto.service';


@Component({
    moduleId : module.id,
    selector : 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

    fotos : Object[] = [];
    service: FotoService;
    mensagem: String = '';

    constructor(service:FotoService){
        this.service = service;
      this.service
        .lista()
        .subscribe(fotos =>{
            this.fotos = fotos;
        }),err => console.log(err);
        
    }

    remove(foto){
        this.service
            .remove(foto)
            .subscribe(()=>{
                let novasfotos = this.fotos.slice(0);
                let index = novasfotos.indexOf(foto);
                novasfotos.splice(index,1);
                this.fotos = novasfotos;
                this.mensagem = "Foto removida com sucesso!"

            }), err => {
                console.log(err);
                this.mensagem = "Erro ao remover a foto!"
            }
        
    }
}