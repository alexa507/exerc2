import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  selectedOperation: any;
  history: any[] = [];


  operations: any[] = [
    { name: "+", code: "+" },
    { name: "-", code: "-" },
    { name: "*", code: "*" },
    { name: "/", code: "/" }
  ];

  calculate(){
    const currentDate = new Date();
    if (this.selectedOperation.code == "+"){
      this.result = this.num1 + this.num2;
      this.history.push({
        time:currentDate, request:this.num1.toString()+"+"+this.num2.toString(), result:this.result
      })
    }else if(this.selectedOperation.code == "-"){
      this.result = this.num1 - this.num2;
      this.history.push({
        time:currentDate, request:this.num1.toString()+"-"+this.num2.toString(), result:this.result
      })
    }else if(this.selectedOperation.code == "*"){
      this.result = this.num1 * this.num2;
      this.history.push({
        time:currentDate, request:this.num1.toString()+"*"+this.num2.toString(), result:this.result
      })
    }else {
      this.result = this.num1 / this.num2;
      this.history.push({
        time:currentDate, request:this.num1.toString()+"/"+this.num2.toString(), result:this.result
      })
    }
  }

  delete(calculation: any){
    const index: number = this.history.indexOf(calculation);
    if (index !== -1) {
        this.history.splice(index, 1);
    } 
  }
}
