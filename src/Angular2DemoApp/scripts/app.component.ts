﻿import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "app",
    template: `  <nav>
                    <a [routerLink]="['/Puzzle']">Puzzle</a> | 
                    <a [routerLink]="['/ShoppingList']">Shopping List</a> | 
                    <a [routerLink]="['/DirectivesSample']">Directives Sample</a> |
                    <a [routerLink]="['/TemplateDrivenForm']">Template Driven Form</a> |
                    <a [routerLink]="['/DataDrivenForm']">Data Driven Form</a> |
                    <a [routerLink]="['/HttpSampleComponent']">Http Sample |</a> 
                    <a [routerLink]="['/MemoryGameComponent']">Memory game</a> 
                  </nav>
                    <br><br>
                 <router-outlet></router-outlet>
              `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

}