import { Component } from '@angular/core';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ParqueaderoService } from './services/Parqueadero.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [HTTP_PROVIDERS, ParqueaderoService],
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { }
