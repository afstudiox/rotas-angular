import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(private activeRoute: ActivatedRoute) { 

    // http://127.0.0.1:4200/portifolio/2
    this.activeRoute.params.subscribe(
      res => console.log(res)
    );

    
    // http://127.0.0.1:4200/portifolio/2?name=maria
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    );
  }



  ngOnInit(): void {}

}
