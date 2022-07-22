import { Component, OnInit } from '@angular/core';
import { ObtainDataService } from 'src/app/services/obtain-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationServiceService } from 'src/app/services/navigation-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {  
  constructor(public navigation:NavigationServiceService,private obtainDataService:ObtainDataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}
  id:any = this.activatedRoute.snapshot.paramMap.get("id");
  pokemon = this.obtainDataService.getSingleElement(this.id);

}
