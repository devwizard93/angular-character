import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  /* Punto de arranque de la app */
  //crea la app 
  //carga app component 
  //aplica app.config (provider globales)