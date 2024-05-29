import { Component } from "@angular/core";
import { mobileProducts } from "../../const/mobileData";




@Component({
    selector : 'app-mobile',
    templateUrl : './mobile.component.html',
    styleUrls : ['./mobile.component.scss']
})
export class Mobilecomponent{
[x: string]: any;
    mobileData = mobileProducts
    constructor(){

    }
}