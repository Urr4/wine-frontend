import {Order} from './Order';
import {Wine} from './Wine';

export class OrderedWine {
  id: number;
  amountOfWine: number;
  order: Order;
  wine: Wine;
}
