import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ModuleWithComponentFactories } from '@angular/core/src/linker/compiler'
import {FotoModule} from './foto/foto.module'
import { HttpModule } from '@angular/http'
import { Http } from '@angular/http/src/http';
import 'rxjs/add/operator/map'
import { PanelModule } from './panel/panel.module';
import { routing } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FiltroTitulo } from './foto/foto.pipes';
import {FormsModule} from '@angular/forms'



@NgModule({
    imports : [ 
        BrowserModule,
        FotoModule, 
        HttpModule, 
        PanelModule, 
        routing,
        FormsModule
        
    ],
    declarations : [ AppComponent, ListagemComponent, CadastroComponent],
    bootstrap : [ AppComponent]
})
export class AppModule{

}