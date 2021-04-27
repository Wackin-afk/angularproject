import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  showData($event:any){
    console.log("button is clicked!");if($event){
    console.log($event.target);
    console.log($event.target.value);
  }
}
  constructor() { }
  partnerArr:any[] = [
    {
      company: "Microsoft",
      trademark:"assets/image1.jpg",
      sponsorship:"Platinum"
    },
    {
      company: "Apple, Inc.",
      trademark2: "john@xyz.com",
      sponsorship:"Gold"
    },
    {
      company: "Amazon",
      trademark3: "james@xyz.com",
      sponsorship:"Amazon"
    },
    {
      company: "Google, Inc.",
      trademark4: "carmela@xyz.com",
      sponsorship:"Bronze"
    }
  ];
  trackByData(index:number, partnerArr:any):number
  {
    return partnerArr.id;
  }
  ngOnInit(): void {
  }

}
