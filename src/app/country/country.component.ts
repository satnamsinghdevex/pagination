import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service'; 


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  posts :any = [];
  public start_slice = 0;
  public end_Slide = 10;
  //Total Pages
  public total_page =['1','2','3','4','5','6','7','8','9','10'] ;
 
  constructor( private country: CountryService) { }

  ngOnInit() {
    this.country.getPosts().subscribe(
      data =>{ 
                this.posts = data;
              // GET TOTAL PAGES  this.page = new Array(data['totalPages']);

              }, 
      (error)=>{ console.log(error.error.message); }
    );
  }
  goPagination(i,event:any)
  {
    event.preventDefault();
    if(i=='0')
    {
      this.start_slice=0;
      this.end_Slide=10;
      console.log(i);
    }
   
    else
    {
      this.start_slice= i *10;
      this.end_Slide = i * 10 + 10;
      console.log(this.start_slice );
      console.log( this.end_Slide);
    }
    console.log(i + event);
  }
  test()
  {
    console.log(this.page);
  }
}
