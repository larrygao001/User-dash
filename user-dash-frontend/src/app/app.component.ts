import { Component, OnInit, enableProdMode, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  timer: number;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scroll(0, 0);
    });
  }

  gotoTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
  }
}
