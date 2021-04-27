import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showData($event:any){
    console.log("button is clicked!");if($event){
    console.log($event.target);
    console.log($event.target.value);
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
