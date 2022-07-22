import { Component, OnInit } from '@angular/core';
import { ObtainDataService } from '../../services/obtain-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationServiceService } from 'src/app/services/navigation-service.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(
    private obtainDataService: ObtainDataService,
    private activatedRoute: ActivatedRoute,
    private navigation:NavigationServiceService
  ) {
    this.navigation.startSaveHistory()
  }

  pokemons: any = this.obtainDataService.getData();

  ngOnInit() {
    this.activatedRoute.params.subscribe((event) => {
      let type = this.activatedRoute.snapshot.params['type'];

      if(type){
        console.log("Existe Type");
        this.pokemons = this.obtainDataService.getElementForType(type);
        console.log("Pokemons: ", this.pokemons);
      }
    });
  }
}
