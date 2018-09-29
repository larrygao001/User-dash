import { Component, OnInit, NgZone, ViewChild, ElementRef, TemplateRef } from '@angular/core';


import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { cl_configs } from '../../../config/cl-config';

// import { environment } from '../../../../environments/environment';

import { RDSService } from '../../../services/client/rds.service';

import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

import { Chart } from 'angular-highcharts';

declare var $: any;

@Component({
  selector: 'app-rd-data',
  templateUrl: './rd-data.component.html',
  styleUrls: ['./rd-data.component.css']
})
export class RDDataComponent implements OnInit {

  loadTemplate: string = cl_configs.loadgif;

  public latest_data: any = [];
  public necessary_data: any = [];
  public previous_data: any = [];

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
              private rdsService: RDSService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {

    //this.ng4LoadingSpinnerService.show();
    this.randomize();

    setInterval(() => {
      this.randomize();
    }, 10000);

  }

  public randomize() {

    this.necessary_data = [];

    this.rdsService.getLatestRandomData().subscribe(data => {
      console.log('data2 : ' + JSON.stringify(data));

      //this.ng4LoadingSpinnerService.hide();

      this.latest_data = data.results;
      
      let age = [];
      let xlabels = [];
      let coordinates = {lat: [], long: []};

      let udata = [];

      for(let i = 0; i < this.latest_data.length; i++) {
        xlabels.push(this.latest_data[i].name.first);
        age.push(this.latest_data[i].dob.age);
        coordinates.lat.push(parseFloat(this.latest_data[i].location.coordinates.latitude));
        coordinates.long.push(parseFloat(this.latest_data[i].location.coordinates.longitude));
        
        udata.push({
          name: this.latest_data[i].name.first,
          data: [[parseFloat(this.latest_data[i].location.coordinates.latitude),
                  parseFloat(this.latest_data[i].location.coordinates.longitude)]]
        });

        this.necessary_data.push({
          name: this.latest_data[i].name.first,
          age: this.latest_data[i].dob.age,
          coordinates: this.latest_data[i].location.coordinates
        });
      }

      console.log(JSON.stringify(coordinates));

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

      this.rdsService.postAllData(this.necessary_data).subscribe(data => {
      }, err => {
        console.log(err);
      })

    }, err => {
      console.log(err);
    }); 

  }

  doSave() {
    console.log('sub : ' + JSON.stringify(this.necessary_data));
    
    let vf = 0;
    if(this.previous_data.length == 0) {
      vf = 1;
    } else {
      for(let i = 0; i < this.necessary_data.length; i++) {
        if(this.previous_data[i].age != this.necessary_data[i].age) {
          vf = 1;
        }
      }
    }
    
    if(vf == 1) {
      this.rdsService.getChosenDatasLen().subscribe(data => {
        console.log('data len : ' + JSON.stringify(data));
        if((data.data / 10) < 100) {
          this.rdsService.postChosenData(this.necessary_data).subscribe(data => {
            alert("saved successfully");
            this.previous_data = this.necessary_data;
          }, err => {
            console.log(err);
          })
        } else {
          alert("limited");
        }
      }, err => {
        console.log(err);
      })
      
    } else {
      alert('this data already saved.');
    }
  }

}
