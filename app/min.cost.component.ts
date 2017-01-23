import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'min-cost',
  template: '<span>{{ getMinCost() }}</span>',
})

export class MinCostComponent  implements OnInit {
  @Input() costs: Array<string>;

  getMinCost() {
    let period: Array<number> = [];
    for ( let i = 0; i < this.costs.length; i++ ){
        if ( this.costs[i]['cost'] ) {
          period.push(parseInt(this.costs[i]['cost']));
        }
      }
      let min_cost = Math.min.apply(Math, period);
      return min_cost
  }

  ngOnInit(): void {
    this.getMinCost()
  }
}

