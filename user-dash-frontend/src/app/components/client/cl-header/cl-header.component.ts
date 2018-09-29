import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { query } from '@angular/core/src/animation/dsl';
import { NotificationService } from '../../../services/notification.service';
import { cl_configs } from '../../../config/cl-config';

import { TitleService } from '../../../services/client/cl-title.service';

// import { environment } from '../../../../environments/environment';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cl-header',
  templateUrl: './cl-header.component.html',
  styleUrls: ['./cl-header.component.css']
})
export class ClHeaderComponent implements OnInit {

  constructor(private notification: NotificationService,
              private router: Router,
              private mytitle: TitleService) {
                
              }

  ngOnInit() {

  }
}
