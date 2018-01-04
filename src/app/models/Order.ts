import {Seller} from './Seller';
import {OrderedWine} from "./OrderedWine";

export class Order {
  id: number;
  porto: number;
  fullPrice: number;
  seller: Seller;
  orderedWines: OrderedWine[];
}
