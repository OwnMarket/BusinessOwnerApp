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
              "title": "Jes Miles",
              "image": "assets/images/avatar-small/0.jpg",
              "description": "Number of shares: 40",
              "shortDescription": "Equity (%): 8",
              "longDescription": "",
              "iconFavorite": "icon-email"
          },
          {
              "id": 4,
              "title": "Marisa Cain",
              "image": "assets/images/avatar-small/3.jpg",
              "description": "Number of shares: 30",
              "shortDescription": "Equity (%): 6",
              "longDescription": "",
              "iconFavorite": "icon-email"
          },
          {
            "id": 3,
            "title": "Julio Petersen",
            "image": "assets/images/avatar-small/2.jpg",
            "description": "Number of shares: 15",
            "shortDescription": "Equity (%): 3",
            "longDescription": "",
            "iconFavorite": "icon-email"
          },
          {
              "id": 5,
              "title": "Lara Lynn",
              "image": "assets/images/avatar-small/4.jpg",
              "description": "Number of shares: 8",
              "shortDescription": "Equity (%): 1.6",
              "longDescription": "",
              "iconFavorite": "icon-email"
          },
          {
            "id": 2,
            "title": "Natasha Gamble",
            "image": "assets/images/avatar-small/1.jpg",
            "description": "Number of shares: 7",
            "shortDescription": "Equity (%): 1.4",
            "longDescription": "",
            "iconFavorite": "icon-email"
        },
      ]
    };
  }

  getInvestorDistribution(): ChartModel{
    var chartModel = new ChartModel();

    chartModel.doughnutChartLabels = [
      'Big Company Coffee Co', 
      'Jes Miles',
      'Marisa Cain',
      'Julio Petersen',
      'Lara Lynn',
      'Natasha Gamble'
    ];
    chartModel.doughnutChartData = [
      400,
      40,
      30,
      15,
      8,
      7,
    ];
    chartModel.doughnutChartType = 'doughnut';

    return chartModel;
  }

}
