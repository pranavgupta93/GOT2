import { Component, OnInit } from '@angular/core';
import {GotService} from '../got.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private id=this._route.snapshot.paramMap.get('id');
  public book;
  constructor(private _route:ActivatedRoute,private gotservice:GotService) { }
  public getBookDetails=(id)=>{
    this.gotservice.getBook(id).subscribe(
      response=>{
        this.book=response;
        console.log(this.book);
      }
    );
  }
  ngOnInit() {
    this.getBookDetails(this.id);
  }

}
