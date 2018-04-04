import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class GotService {
  public characterApi="https://www.anapioficeandfire.com/api/characters";
  public bookApi="https://www.anapioficeandfire.com/api/books";
  public houseApi="https://www.anapioficeandfire.com/api/houses";
  constructor(private _http:HttpClient) { }
  public getCharacterData=()=>{
    let response=this._http.get(this.characterApi);
    return response;
  }
  public getHouseData=()=>{
    let response=this._http.get(this.houseApi);
    return response;
  }
  public getBookData=()=>{
    let response=this._http.get(this.bookApi);
    return response;
  }
  public getBook=(id:number)=>{
    let response=this._http.get(this.bookApi+'/'+id);
    return response;
  }
  public getCharacter=(id:number)=>{
    let response=this._http.get(this.characterApi+'/'+id);
    return response;
  }
  public getHouse=(id:number)=>{
    let response=this._http.get(this.houseApi+'/'+id);
    return response;
  }
}
