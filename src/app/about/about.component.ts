import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
