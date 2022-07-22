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
  pokemons: any;
  constructor(
    private obtainDataService: ObtainDataService,
    private activatedRoute: ActivatedRoute,
    private navigation:NavigationServiceService
  ) {
    // Activate browsing history
    this.navigation.startSaveHistory();
    // We obtain the route data
    this.pokemons = this.obtainDataService.getData();
    let type = this.activatedRoute.snapshot.params['type'];
    if(type) this.pokemons = this.obtainDataService.getElementForType(type);
  }  

  ngOnInit() {}
}
