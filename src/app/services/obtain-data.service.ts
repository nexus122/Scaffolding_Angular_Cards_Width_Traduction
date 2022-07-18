import { Injectable } from '@angular/core';

const data:any =[
  {id:0, name: "Pikachu", type:"Electric", img: "https://img.pokemondb.net/sprites/home/normal/pikachu.png"},
  {id:1, name: "Charizard", type:"Fire", img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png"},
  {id:2, name: "Venomoth", type:"Bug", img: "https://img.pokemondb.net/sprites/home/normal/venomoth.png"},
  {id:3, name: "Regidrago", type:"Dragon", img: "https://img.pokemondb.net/sprites/home/normal/regidrago.png"},
  {id:4, name: "Guzzlord", type:"Dragon", img: "https://img.pokemondb.net/sprites/home/normal/guzzlord.png"}
]

@Injectable({
  providedIn: 'root'
})
export class ObtainDataService {

  constructor() { }
  
  /* Devovlemos todos los datos */
  getData(){
    return data;
  }

  /* Devolvemos datos por su tipo */
  getElementForType(type: string){
    return data.filter((element:any) => element.type == type);
  }

  /* Devolvemos solo un dato individual */
  getSingleElement(id:number){
    return data.filter((element:any) => element.id == id);
  }

}
