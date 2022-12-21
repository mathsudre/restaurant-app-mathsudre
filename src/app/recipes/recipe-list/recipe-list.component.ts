import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Teste Recipe','This is a simple Teste','https://s2.glbimg.com/XmboOMG7q_824IlRve7ZF-EplsU=/0x0:3120x2080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/R/Z/SFOj7ES1WMVHp1n7Gdnw/mg-4833.jpg'),
    new Recipe('Teste Recipe','This is a simple Teste','https://s2.glbimg.com/XmboOMG7q_824IlRve7ZF-EplsU=/0x0:3120x2080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/R/Z/SFOj7ES1WMVHp1n7Gdnw/mg-4833.jpg'),
  ]
}
