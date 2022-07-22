# Scaffolding_Angular_Traductions

[![CodeFactor](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions/badge)](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions)

## Indice

- [Frameworks css](#frameworks-css)
  - [Angular Material](#angular-material)
  - [Bulma](#bluma)
- [Translations](#translations)
- [Routing](#routing)
- [Pipes](#pipes)
- [Versions](#versions)

## Frameworks Css

Para facilitar el diseño he obtado por tener dos frameworks.

- [Angular Material](https://material.angular.io/)
- [Bluma](https://bulma.io/)

### Angular Material

This library allows me to build a website following Material Design.
By loading only the elements I need I get a performance improvement.
There is quite a generous library of components that I can access.

### Bluma

Bluma is a css library that gives me multiple css selectors that allow me to create in a simple way a responsive page.
Being able to resize texts and elements according to the size of the screen.

## Translations

Translations are done with the library [ngx-translate](https://github.com/ngx-translate/core)

- "@ngx-translate/core": `14.0.0`
- "@ngx-translate/http-loader": `7.0.0`

## Routing

The scaffold has Angular routing installed with the <router-outlet> and a link configured.

```Typescript
const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'type/:type', component: ContainerComponent},
  { path: 'pokemon/:name/:id', component: ContainerComponent},
  { path: 'detail/:name/:id', component: DetailPageComponent},
];
```

Obtain route parameters:

```Typescript
export class DetailPageComponent implements OnInit {  
  constructor(
    public navigation:NavigationServiceService,
    private obtainDataService:ObtainDataService, // 👈 We load the service to obtain data
    private activatedRoute:ActivatedRoute // 👈 We load ActivatedRoute to find the parameter for the url
    ) { } 

  id:any = this.activatedRoute.snapshot.paramMap.get("id");   //👈 We get the route parameter
  pokemon = this.obtainDataService.getSingleElement(this.id); //👈 We call the service, passing it the type as a parameter
}
```

## Pipes

In my case I use pipes to pass the name of x through the url so that it appears without %20 instead of a space and delete accents.

```Typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanUrl'
})
export class CleanUrlPipe implements PipeTransform {

  transform(value: string, ): string {
    value = value.replace(/\s/g, '-');                              //👈 clear white spaces
    value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //👈 delete accents
    return value;
  }

}

```

## Versions

- Angular CLI: `14.0.5`
- Node: `16.14.2`
- Package Manager: npm `8.5.0`
- OS: `win32 x64`
