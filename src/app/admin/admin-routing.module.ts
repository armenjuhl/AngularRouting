import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'blast', component: EmailBlastComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
