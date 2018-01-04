import {Berry} from './Berry';

export class Wine {

  id: number;
  name: string;
  colors : string[];
  berries: Berry[];
  alcohol: number;
  restSugar : number;
  acid : number;
  price: number;
  bottleSize: number;

  constructor(id:number, name:string, colors:string[], berries:Berry[], alcohol:number, restSugar:number, acid:number, price:number, bottleSize:number){
    this.id = id;
    this.name = name;
    this.colors = colors;
    this.berries = berries;
    this.alcohol = alcohol;
    this.restSugar = restSugar;
    this.acid = acid;
    this.price= price;
    this.bottleSize = bottleSize;

  }

}
