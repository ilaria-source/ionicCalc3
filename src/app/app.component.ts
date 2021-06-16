import { TypeCalc } from './folder/models/enums/typeCalculator.model';
import { Component, Input } from '@angular/core';
import { FolderPage  } from './folder/folder.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  // public appPages = [ //qua richiama il model che darà i dati contenuti in enum
  //   { title: 'Classica', url: '/classic/Classic', icon: 'bug' },
  //   { title: 'Scientifica', url: '', icon: 'construct' }, // /scientific/Scientific
  //   { title: 'Programmatore', url: '', icon: 'save' }, //  /programmer/Programmer
  // ];

  // @Input() typeCalc: TypeCalc = { typeName: TypeCalc, active : boolean };
  @Input() typeCalc: TypeCalc;



  constructor() {}
}
//vedilo come il main (c#)
