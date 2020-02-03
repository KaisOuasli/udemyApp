import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @ViewChild('f', { static: false }) formRef: NgForm;

  editMode = false;

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.editMode = param['id'] != null;
      }
    )
  }


}
