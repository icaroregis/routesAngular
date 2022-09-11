import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Aqui na rota root deixamos uma string vazia que significa que é a rota raiz. Colocamos também o pathMatch como full para dizer que todas as outras rotas são filhas desta primeira */
const routes: Routes = [
  // {
  //   path: '',
  //   component: PageHomeComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'sobre',
  //   component: PageSobreNos,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
