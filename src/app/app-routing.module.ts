import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { HomeComponent as home } from '../app/pages/home/home.component';
import { SobreComponent as sobre } from '../app/pages/sobre/sobre.component';
import { PagesError404Component as paginaNaoEncontrada } from '../app/pages/pages-error404/pages-error404.component';

/* Aqui na rota root deixamos uma string vazia que significa que é a rota raiz. Colocamos também o pathMatch como full para dizer que todas as outras rotas são filhas desta primeira */
const routes: Routes = [
  {
    path: '',
    component: home,
    pathMatch: 'full',
  },
  {
    path: 'sobre/:id/:username',
    component: sobre,
  },
  {
    path: 'paginaNaoEncontrada',
    component: paginaNaoEncontrada,
  },
  /* rota coringa, representada por dois asteriscos significa uma rota que o usuário digita que não é encontrada, quando não enocntrada é redirecionada para página 404 */
  {
    path: '**',
    redirectTo: 'paginaNaoEncontrada',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
