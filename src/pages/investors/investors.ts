import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InvestorsProvider } from '../../providers/investors.provider';
import { ChartModel } from '../../models/chart.model';

@IonicPage()
@Component({
  selector: 'page-investors',
  templateUrl: 'investors.html',
})
export class InvestorsPage {
  params: any = {};
  chartModel: ChartModel;

  constructor(investorsProvider: InvestorsProvider) {
    this.params.data = investorsProvider.getTopInvestors();
    this.chartModel = investorsProvider.getInvestorDistribution();
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestorsPage');
  }
}
