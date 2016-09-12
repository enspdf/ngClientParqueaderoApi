import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'index',
    templateUrl: 'index.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class IndexComponent implements OnInit {

    date : Date;
    year : string;

    constructor() {
        this.date = new Date();
        this.year = this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();

        setInterval(() => {
            this.date = new Date();
        }, 1000);
    }

    ngOnInit() {
        swal({   
            title: "Bienvenido",   
            text: "Gracias por preferir nuestros servicios",   
            imageUrl: "http://www.funlam.edu.co/uploads/sedebogota/logoFunlam.png",
            timer: 3000,   
            showConfirmButton: false 
        });
    }

 }