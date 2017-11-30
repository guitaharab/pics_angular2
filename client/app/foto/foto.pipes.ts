import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";


@Pipe({
    name:'filtroTitulo'
})
export class FiltroTitulo implements PipeTransform{

    transform(foto:FotoComponent[],digitado:String){
        let titulo = digitado.toString().toLocaleLowerCase();

        return foto.filter(foto => foto.titulo.toLocaleLowerCase().includes(titulo));
    }

}