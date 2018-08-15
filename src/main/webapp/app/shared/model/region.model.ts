import { Moment } from 'moment';

export interface IRegion {
  id?: number;
  saatdakika?: Moment;
}

export class Region implements IRegion {
  constructor(public id?: number, public saatdakika?: Moment) {}
}
