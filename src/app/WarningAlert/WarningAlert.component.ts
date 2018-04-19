import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';


@Component({
    selector:'[app-warning]',
    template:`
        <p>Guys,warning! You are in DANGER!!</p>
        `,
    styles: [`
       p {
            color: red;
        }
    `]
})
export class WarningAlertComponent{

}