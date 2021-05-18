import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroes:string[]=['Spiderman', "Ironman","Hulk","Thor"];
  borrados:string[]=[];

  borrarHeore(){
    console.log("borrando");
    const heroeBorrado:string=this.heroes.shift() || "";
    this.borrados.push(heroeBorrado);
  }
}
