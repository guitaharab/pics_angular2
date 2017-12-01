import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
    moduleId : module.id,
    selector : 'cadastro',
    templateUrl : './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent;
    service : FotoService;
    meuForm : FormGroup;
    route : ActivatedRoute;
    router : Router;

    constructor(service:FotoService, fb:FormBuilder, route:ActivatedRoute, router:Router){
        this.route = route;
        this.router = router;
        this.service = service;

        this.route.params.subscribe(params => {

            let id = params['id'];

            if(id) {

                this.service.procurafoto(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));    
            }            
         });

        this.meuForm =  fb.group({
            titulo : ['',Validators.required],
            url : ['',Validators.required],
            descricao : ['']
        });
    }

    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
        
        this.service
            .cadastra(this.foto)
            .subscribe(() => {
                console.log('Foto cadastrada com sucesso!')
                this.foto = new FotoComponent();
                this.router.navigate(['']);
            }),(err)=>console.log(err);
    }
}