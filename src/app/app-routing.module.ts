import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatyaComponent } from './component/satya/satya.component';
import { NextComponent } from './component/next/next.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';

const routes: Routes = [
  {path: "satya", component: SatyaComponent,
  children:[
    {path: "parent", component: ParentComponent},
    {path: "child", component: ChildComponent},
    {path: "next", component: NextComponent}
   
  ]},
  {path: "parent", component: ParentComponent},
    {path: "child", component: ChildComponent},
    {path: "next", component: NextComponent}

]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
