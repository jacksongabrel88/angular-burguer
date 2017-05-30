import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HamburgeresComponent } from './hamburgeres.component';
import { FazerHamburguerComponent } from './fazer-hamburguer/fazer-hamburguer.component';
import { HamburgeresService } from './hamburgeres.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HamburgeresComponent, FazerHamburguerComponent
  ],
  providers: [
    HamburgeresService
  ],
  declarations: [HamburgeresComponent, FazerHamburguerComponent]
})
export class HamburgeresModule { }
