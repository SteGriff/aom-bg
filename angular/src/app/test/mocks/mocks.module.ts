import { NgModule } from '@angular/core';

const pipes = [];
const importAndExport = [];
const declareAndExport = [...pipes];

@NgModule({
  providers: [
    // TODO: Mock Store etc.
    ...pipes
  ],
  declarations: declareAndExport,
  imports: importAndExport,
  exports: [...importAndExport, ...declareAndExport]
})
export class MocksModule { }
