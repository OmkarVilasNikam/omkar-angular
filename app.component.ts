import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular ';
  name="Sai";
  clickCount=0;
  text = ''; 
  isDisabled=true;
  isEnabled=false;
  cssStringVar: string= 'red size20';
  hasError:boolean =false;
  cssArray:string[]=['red','size20']; 

  items= [
    new item(1, 'Mobile'),
    new item(2, 'Laptop'),
    new item(3, 'Desktop'),
    new item(4, 'Printer')
  ]
  getTitle(): string {
    return this.title;
}

max(first: number, second: number): number {
  return Math.max(first, second);
}

getClass() {
  return 'green';
}
isError()
{
  return true;
}
//Event binding
  clickMe() {
    this.clickCount++;
  }
  //click event - textbox
  show(event:any) {
    console.log("Event target="+event.target);
    console.log(event.target.value);
  }    
  
    //keyup event
    displayText(x:any) { 
      console.log(x.target.value);
    //this.text=this.text+x.target.value;
        this.text += x.target.value + ' , '; 
    } 
    //click event -button
    onSave(event:any){    
      console.log("Save button is clicked!"+ event.target);    
    }    
}



export class item {
  code:number
  itemName:string
  
  constructor(code:number,itemName:string) {
    this.code=code;
    this.itemName=itemName
  }

}