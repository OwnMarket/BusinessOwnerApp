import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartModel } from '../models/chart.model';
/*
  Generated class for the InvestorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvestorsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InvestorsProvider Provider');
  }

  getTopInvestors(){ // TODO load from server
    return {
      "items": [
          {
              "id": 1,
              "title": "Jessica Miles",
              "image": "assets/images/avatar-small/0.jpg",
              "description": "Number of shares: 1984",
              "shortDescription": "Equity (%): 12",
              "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              "iconFavorite": "icon-email"
          },
          {
              "id": 2,
              "title": "Natasha Gamble",
              "image": "assets/images/avatar-small/1.jpg",
              "description": "Number of shares: 1980",
              "shortDescription": "Equity (%): 12",
              "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              "iconFavorite": "icon-email"
          },
          {
              "id": 3,
              "title": "Julia Petersen",
              "image": "assets/images/avatar-small/2.jpg",
              "description": "Number of shares: 1984",
              "shortDescription": "Equity (%): 12",
              "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              "iconFavorite": "icon-email"
          },
          {
              "id": 4,
              "title": "Marisa Cain",
              "image": "assets/images/avatar-small/3.jpg",
              "description": "Number of shares: 1984",
              "shortDescription": "Equity (%): 12",
              "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              "iconFavorite": "icon-email"
          },
          {
              "id": 5,
              "title": "Lara Lynn",
              "image": "assets/images/avatar-small/4.jpg",
              "description": "Number of shares: 1984",
              "shortDescription": "Equity (%): 12",
              "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              "iconFavorite": "icon-email"
          }
      ]
    };
  }

  getInvestorDistribution(): ChartModel{
    var chartModel = new ChartModel();

    chartModel.doughnutChartLabels = [
      'Big Company Coffee Co', 
      'Test owner 1',
      'Test owner 2',
      'Test owner 3',
      'Test owner 4',
      'Test owner 5'
    ];
    chartModel.doughnutChartData = [
      800,
      90,
      10,
      30,
      45,
      25
    ];
    chartModel.doughnutChartType = 'doughnut';

    return chartModel;
  }

}
