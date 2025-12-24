import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // habilita navegación
    provideHttpClient()   // habilita HttpClient en servicios
  ]
};
//Aqui se registran los providers globales -> Cosas que usa toda la app
//sin esto no hay navegacion | no hay http | los servicios fallan
