# Scaffolding_Angular_Traductions_And_Cards

[![CodeFactor](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions/badge)](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions)

## Indice

- [🎨 Frameworks css](#frameworks-css)
  - [Angular Material](#angular-material)
  - [Bulma](#bulma)
  - [Fontawersome](#fontawersome)
- [✏️ Translations](#translations)
- [🔗 Routing](#routing)
- [⚗️ Pipes](#pipes)
- [📜 Versions](#versions)

## Scaffolding Structure

<details>
<summary>Click to see the project structure</summary>

````
- 📁 src
  - 📁 app
    - 📁 components
      - 📁 card
        - 📜 card.component.html
        - 📜 card.component.scss
        - 📜 card.component.ts
      - 📁 container
        - 📜 container.component.html
        - 📜 container.component.scss
        - 📜 container.component.ts
      - 📁 detail-page
        - 📜 detail-page.component.html
        - 📜 detail-page.component.scss
        - 📜 detail-page.component.ts
      - 📁 footer-component
        - 📜 footer-component.component.html
        - 📜 footer-component.component.scss
        - 📜 footer-component.component.ts
      - 📁 header-component
        - 📜 header-component.component.html
        - 📜 header-component.component.scss
        - 📜 header-component.component.ts
      - 📁 main-component
        - 📜 main-component.component.html
        - 📜 main-component.component.scss
        - 📜 main-component.component.ts
      - 📁 section
        - 📜 section.component.html
        - 📜 section.component.scss
        - 📜 section.component.ts
    - 📁 models      
    - 📁 pipes
      - 📜 clean-url.pipe.ts
    - 📁 services
      - 📜 navigation-service.service.ts
      - 📜 obtain-data.service.ts
    - 📜 app-routing.module.ts
    - 📜 app.module.ts
  - 📁 assets
    - 📁 i18n
      - 📜 en.json
      - 📜 es.json
  - 📁 environments
    - 📜 environment.prod.ts
    - 📜 environment.ts

  - 📜 favicon.ico
  - 📜 index.html
  - 📜 main.ts
  - 📜 polyfills.ts
  - 📜 styles.scss
  - 📜 test.ts
````
</details>
## Frameworks Css

In order to make the layout work easier I have used the following frameworks

- [Angular Material](https://material.angular.io/)
- [Bluma](https://bulma.io/)
- [Fontawersome](https://fontawesome.com/)

### Angular Material
I use this library to create the header and footer of the page.
It allows me to load only the elements I'm going to use, and I've used it because the header and the menu they offer convince me more than the ones offered by Bulma.
It also gives a touch of Angular Material that the rest of the page follows, despite not being created with Angular Material.

### Bulma
Bluma is a css library that gives me multiple css selectors that allow me to create in a simple way a responsive page.
Being able to resize texts and elements according to the size of the screen.
And making it very easy to use flex to centre and make the cards of the page responsive.

### Fontawersome
We use this library to load icons on the website, as they have a lot of variety, high quality and are free.

## Translations
Translations are done with the library [ngx-translate](https://github.com/ngx-translate/core)

- "@ngx-translate/core": `14.0.0`
- "@ngx-translate/http-loader": `7.0.0`

To create the translations I have created a folder within assets:
- 📁 assets
  - 📁 i18n
    - 📜 en.json
    - 📜 es.json

**Example:** en.json
```` json
{
    "demo": {
        "title": "Translation demo",
        "text": "This is a simple demonstration app for ngx-translate",
        "number": "This is a number {{number}}"
    },
    "header":{
        "title": "Translate Demo"
    },
    "lenguajes":{
        "english": "English",
        "spanish": "Spanish"
    },
    "turn-back": "Turn Back",
    "turn-home": "Turn to home"
}
````
Translations are used in the same way as a pipe
```` Html

<p>{{'turn-back' | translate}}</p> <!-- Is 👉 <p>Turn Back</p> -->

<!-- If you want to pass parameters it can be done like this -->
<p>{{'demo.number' | translate:{number: 0} }}</p> <!-- Is 👉 <p>This is a number 0 </p> -->
````

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
