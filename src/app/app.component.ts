import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private http:HttpClient){}

  ngOnInit(): void {}
/* 
selected = "recipe";

onSelected(selected: string){
  this.selected = selected;
} */
}
