import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { cl_configs } from '../../../config/cl-config';

// import { environment } from '../../../../environments/environment';

import { RDSService } from '../../../services/client/rds.service';

import { Chart } from 'angular-highcharts';

declare var jQuery: any;
declare var $: any;
declare var PNotify: any;

@Component({
  selector: 'app-rd-list',
  templateUrl: './rd-list.component.html',
  styleUrls: ['./rd-list.component.css']
})
export class RDListComponent implements OnInit {

  total: any = [];
  user_index: any = 0;

  public loaded_data: any = [];

  chart = new Chart({
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Name-Age Chart'
    },
    subtitle: {
      text: 'Name'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Age'
      }
    },
    series: [{
      name: 'Age',
      data: []
    }]
  });

  chart2 = new Chart({
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Name-Coordinates Chart'
    },
    subtitle: {
      text: 'Name'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Coordinates'
      }
    },
    series: [{
      name: 'Age',
      data: []
    }]
  });

  constructor(private router: Router,
              private notification: NotificationService,
              private activateRoute: ActivatedRoute,
              private rdsService: RDSService) { }

  ngOnInit() {

    this.rdsService.getChosenDatasLen().subscribe(data => {
      console.log('data len : ' + JSON.stringify(data));
      this.total = [];
      for(let i = 0; i < data.data / 10; i++) {
        this.total.push(i+1);
      }
      console.log(JSON.stringify(this.total));
    }, err => {
      console.log(err);
    })
  }

  loadUserData(index) {
    this.rdsService.loadUserDataByIndex({page: index}).subscribe(data => {

      console.log(JSON.stringify(data));

      let age = [];
      let xlabels = [];
      let coordinates = {lat: [], long: []};

      let udata = [];

      for(let i = 0; i < data.data.length; i++) {
        xlabels.push(data.data[i].name);
        age.push(data.data[i].age);
        coordinates.lat.push(parseFloat(data.data[i].coordinates.latitude));
        coordinates.long.push(parseFloat(data.data[i].coordinates.longitude));

        udata.push({
          name: data.data[i].name,
          data: [[parseFloat(data.data[i].coordinates.latitude),
                  parseFloat(data.data[i].coordinates.longitude)]]
        });
      }

      this.chart = new Chart({
        chart: {
          type: 'column'
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Name-Age Chart'
        },
        subtitle: {
          text: 'Name'
        },
        xAxis: {
          categories: xlabels,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Age'
          }
        },
        series: [{
          name: 'Age',
          data: age
        }]
      });

      this.chart2 = new Chart({
        chart: {
          type: 'scatter',
          zoomType: 'xy'
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Name-Coordinates Chart'
        },
        subtitle: {
          text: 'Name'
        },
        xAxis: {
          title: {
            text: 'latitude'
          }
        },
        yAxis: {
          title: {
            text: 'longitude'
          }
        },
        series: udata
      });

      this.user_index = index + 1;

    }, err => {
      console.log(err);
    })
  }

  deleteUserData(index) {
    this.rdsService.deleteItem({page: index}).subscribe(data => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }
}
