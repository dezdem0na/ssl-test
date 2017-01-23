import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Certificate } from './certificate';

import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/app.component.css' ],
})

export class AppComponent implements OnInit {
  title = 'SSL pricelist';
  certificates: Certificate[] = [];
  certificate: any;

  constructor(private http: Http) {
  }

  private certificatesUrl = 'app/ssl.json';

  ngOnInit(): void {
    this.http.get(this.certificatesUrl)
      .map(res => res.json())
      .subscribe(res => {
        this.certificates = res.pricelist;
      });
  }

  onMouseover(cert: Certificate[]): void {
    this.certificate = cert;
    this.certificate.description_visible=true;
  }

  onMouseout(cert: Certificate[]): void {
    this.certificate = cert;
    this.certificate.description_visible=false;
  }
}
