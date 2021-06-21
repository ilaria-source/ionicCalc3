import { ClassicModePageModule } from './../classic-mode/classic-mode.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ClassicModePage } from '../classic-mode/classic-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ClassicModePageModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
