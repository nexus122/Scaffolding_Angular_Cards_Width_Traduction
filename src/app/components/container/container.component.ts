import { Component, OnInit } from '@angular/core';
import { ObtainDataService } from '../../services/obtain-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(
    private obtainDataService: ObtainDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  pokemons: any = this.obtainDataService.getData();
  pokemonDragon: any = this.obtainDataService.getElementForType('Dragon');
  firstPokemon: any = this.obtainDataService.getSingleElement(0);

  ngOnInit() {
    this.activatedRoute.params.subscribe((event) => {
      let id = this.activatedRoute.snapshot.params['id'];
      let type = this.activatedRoute.snapshot.params['type'];
      console.log(id);
      console.log(type);

      if(id){
        this.pokemons = this.obtainDataService.getSingleElement(id);
      }

      if(type){
        this.pokemons = this.obtainDataService.getElementForType(type);
      }
    });
  }
}
