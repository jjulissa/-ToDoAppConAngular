import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  title: string = 'To Do App con Angular & Bootstrap';

  employees = 
  [ 
    { 
      name: "JJulissa", 
      position: 'Developer', 
      email: 'julissajoseph9@gmail.com'
    }, 
    { 
      name: "Edkarlie JOSEPH", 
      position: 'Enfermera', 
      email: 'karlie@gmail.com'
    }, 
    { 
      "name": "Jeff-Hermane Francois", 
      position: 'Business Manager', 
      email:'jeff@yahwoo.us'
    }
  ]; 

  model:any = {}; 
  model2:any = {};

// TipoVoid: KiPapRetounenAnyen
  addEmployee(): void { 
    this.employees.push(this.model)

  } 

  deleteEmployee(i:any): void { 
    
  } 
 
  myValue:any; 

  editEmployee(i:any): void { 
    this.model2.name = this.employees[i].name; 
    this.model2.position = this.employees[i].position;  
    this.model2.email = this.employees[i].email; 
    this.myValue = i; 
  } 

  upDateEmployee(): void { 
    console.log(this.model2);
    
  }
}
