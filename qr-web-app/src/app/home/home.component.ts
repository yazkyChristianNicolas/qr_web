import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('qrcode',sanitizer.bypassSecurityTrustResourceUrl('assets/qrcode.svg'));
    iconRegistry.addSvgIcon('qrcode-plus',sanitizer.bypassSecurityTrustResourceUrl('assets/qrcode-plus.svg'));
  }

  ngOnInit(): void {

  }

}
