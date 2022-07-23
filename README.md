# Scaffolding_Angular_Traductions_And_Cards

[![CodeFactor](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions/badge)](https://www.codefactor.io/repository/github/nexus122/scaffolding_angular_traductions)

## Index
- [🏗️ Scaffolding Structure](#scaffolding-structure)
- [🎨 Scss](#scss)
- [🎨 Frameworks css](#framework-css)
  - [Angular Material](#angular-material)
  - [Bulma](#bulma)
  - [Fontawersome](#fontawersome)
- [✏️ Translations](#translations)
- [🔗 Routing](#routing)
- [⚗️ Pipes](#pipes)
- [📜 Versions](#versions)

## Scaffolding Structure

<details>
  <summary><b>Click to see the project structure</b></summary>

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

## Scss
I use Scss to be able to create variables that we will use to define the colours of the application and other default properties in a single place, so that changing them globally is much easier.
### Scss Vars
Here are some of the colours we have defined:
```` Scss
$color-1: #F4D822;
$color-2: #33BBA5;
$color-3: #1F154F;
$color-4: #C60F2A;
$color-5: #E9D3AC;
$color-6: white;
````
In styles.scss I define the styles for some of the most common elements on the web, for example:
```` Scss
.button{
    border: 1px solid $color-1;
    &:hover{
        background-color: $color-1;
        border: 1px solid $color-1;
        color: $color-3;    
    }
}
````
In this case we create a button with a built-in hover, which changes the background colour of the button to fill it.

## Framework Css
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
## Input
I have used the **input** to send data from the parent components to the child components.
In my case **container** is the parent, **section** is the child (in case I have to split the cards into different sections) and **card** is the child of section.

### Container:
**html:**
```` html
<main class="page-body">
    <app-section [pokemons]="pokemons"></app-section> <!-- 👈 Send data to child -->
    <!-- [pokemons]="pokemons" in this case send array of objects -->
    <!-- 👆 input var | 👆 ts class atribute -->
</main>
````
**Ts:**
```` Ts
  this.pokemons = this.obtainDataService.getData(); //👈 Obtain data to service
````
### Section:
**html:**
``` html
<div class="gap is-flex is-flex-wrap-wrap is-justify-content-center is-align-content-center">    
    <div *ngFor="let pokemon of pokemons">        
        <app-card [pokemon]="pokemon"></app-card> <!--👈 Send data to  child -->
        <!-- [pokemon]="pokemon" in this case send only one object-->
        <!-- 👆 input var | 👆 ts class atribute -->
    </div>    
</div>
```
**Ts:**
``` ts
import { Component, Input } from '@angular/core'; // 👈 Import Angular Input

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent{
  @Input() pokemons:any // 👈 Create a Input var, obtain value of Container
  constructor() { }
}

```

### Card
**html:**
``` html
<a [routerLink]="'/detail/'+(pokemon.name | cleanUrl)+'/'+pokemon.id">
    <div>    
        <div class="bg card" [style.background-image]="'url('+pokemon.img+')'">
            <div class="panel-info is-flex is-justify-content-flex-end is-align-items-center is-flex-direction-column">
                <div class="is-flex">
                    <p class="title has-text-white mr-4">#{{pokemon.id}}</p>
                    <p class="title has-text-white">{{pokemon.name}}</p>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center gap">
                    <p class="tag" *ngFor="let type of pokemon.type">{{type}}</p>
                </div>
            </div>        
        </div>
    </div>
</a>
```
**Ts**
``` ts
import { Component, Input } from '@angular/core'; // 👈 Import Angular Input

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() pokemon:any // 👈 Create a Input var, obtain value of Container
  constructor() { }
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
