import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
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
