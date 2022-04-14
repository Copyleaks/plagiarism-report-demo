import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'copyleaks-report/:scanId',
    loadChildren: () =>
      import('./pages/copyleaks-report-page/copyleaks-report-page.module').then(
        (mod) => mod.CopyleaksReportPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'copyleaks-report/coimk6ykypk7naam',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
