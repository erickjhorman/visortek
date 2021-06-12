import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@UI/home/home.module`).then(module => module.HomeModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import(`@UI/product/product.module`).then(module => module.ProductModule
    )
  },
  {
    path: 'about',
    loadChildren: () => import(`@UI/aboutus/aboutus.module`).then(module => module.AboutusModule
    )
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
