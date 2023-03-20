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
  message: string = ''; 
  hideUpdate: boolean = true; 

// TipoVoid: KiPapRetounenAnyen
  addEmployee(): void { 
    this.employees.push(this.model) 
    this.message = 'Successfully Aggregate'

    console.log(this.model);
    localStorage.setItem("Model", this.model); 
  } 

  deleteEmployee(i:any): void {  
    var answer = confirm("Are you sure? "); 

    if (answer) {
      this.employees.slice(i, 1); 
      this.message = "Successfully Delete" 
    }

  } 
 
  myValue:any; 

  editEmployee(i:any): void { 
    this.model2.name = this.employees[i].name; 
    this.model2.position = this.employees[i].position;  
    this.model2.email = this.employees[i].email; 
    this.myValue = i;  
    this.hideUpdate = false; 
  } 

  upDateEmployee(): void { 
    console.log(this.model2); 
    let i = this.myValue; 
    for(let j=0; j<this.employees.length; j++) {  
      if( i == j ) { 
        this.employees[i] = this.model2; 
        this.message = 'Record is successfully upDated'; 
      }
    } 
    this.hideUpdate = true; 
  } 
  closeAlert():void {  
    this.message = ''; 
  }
}
