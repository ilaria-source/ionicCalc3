
import { Component, Input } from '@angular/core';
import { ClassicModePage } from './classic-mode/classic-mode.page';
import { FolderPage  } from './folder/folder.page';
import { TypeCalc } from './folder/models/enums/typeCalculator.model';
import dataCalc from './folder/repositories/data_repositories.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
//vedilo come il main (c#)
  dataCalcList: {typeName: TypeCalc; url: string; icon: string; active: boolean}[] = dataCalc;

  // classicCalculator: ClassicModePage;

  constructor() {}
}

