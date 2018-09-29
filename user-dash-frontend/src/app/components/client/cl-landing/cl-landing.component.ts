import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { cl_configs } from '../../../config/cl-config';

import { environment } from '../../../../environments/environment';

declare var jQuery: any;
declare var $: any;
declare var PNotify: any;

@Component({
  selector: 'app-cl-landing',
  templateUrl: './cl-landing.component.html',
  styleUrls: ['./cl-landing.component.css']
})
export class ClLandingComponent implements OnInit {

  constructor(private router: Router,
              private notification: NotificationService){
                  }

  ngOnInit() {


  }
}
