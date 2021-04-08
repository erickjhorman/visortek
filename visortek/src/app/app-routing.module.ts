import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@UI/home/home.module`).then(module => module.HomeModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import(`@UI/product/product.module`).then(module => module.ProductModule
    )
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
