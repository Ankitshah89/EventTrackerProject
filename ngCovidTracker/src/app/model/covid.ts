import { NumberValueAccessor } from '@angular/forms';

export class Covid {

  id : number;
  state : string;
  positive : number;
  negative : number;
  inIcu : number;
  onVentilator : number;
  recovered : number;
  death : number;
  hospitalized : number;
  totalTestResult : number;

  constructor(
  id?:number,
  state?: string,
  positive?: number,
  negative?: number,
  inIcu?: number,
  onVentilator?: number,
  recovered?: number,
  death?: number,
  hospitalized?: number,
  totalTestResult?: number
  )
       {
      this.id=id;
      this.state= state;
      this.positive= positive;
      this.negative= negative;
      this.inIcu= inIcu;
      this.onVentilator= onVentilator;
      this.recovered= recovered;
      this.death= death;
      this.hospitalized= hospitalized;
      this.totalTestResult= totalTestResult;

    }




}
