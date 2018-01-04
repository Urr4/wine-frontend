import {Wine} from './Wine'

export class Seller {
  id: number;
  name: string;
  address: string;
  email: string;
  isActive: boolean;
  wines: Wine[];
}
