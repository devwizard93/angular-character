import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //es solo un contenedor | no tiene logia | renderiza lo que diga el router
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-character';
}
//1
//Cuando angular carga un componente se ejectua el archivo ts
//resuelve los import
//inyectaa servicios 
//2
//angular procesa el decorador @Component
//Lee: Template url | styleUrl | standalone | import 
//3
//Se renderiza el html  
//Angular carga el html
//evalua bindings {{}} | ngFor | [(ngModel)]

