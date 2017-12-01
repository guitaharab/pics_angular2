import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'
import { FiltroTitulo } from './foto.pipes';
import { FotoService } from './foto.service';


@NgModule({
    declarations : [FotoComponent, FiltroTitulo],
    exports : [FotoComponent, FiltroTitulo],
    providers : [FotoService]

})
export class FotoModule{

}