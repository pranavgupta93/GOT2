import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GotService } from '../got.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private id=this._route.snapshot.paramMap.get('id');
  public character;
  constructor(private _route:ActivatedRoute,private gotservice:GotService) { }
  private getCharacterDetails=(id)=>{
    this.gotservice.getCharacter(id).subscribe(
      response=>{
        //console.log(response);
        this.character=response;
        console.log(this.character);
      }
    );
  }
  ngOnInit() {
    this.getCharacterDetails(this.id);
  }

}
