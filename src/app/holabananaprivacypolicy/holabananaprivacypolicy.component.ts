import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-holabananaprivacypolicy',
  templateUrl: './holabananaprivacypolicy.component.html',
  styleUrls: ['./holabananaprivacypolicy.component.scss']
})
export class HolabananaprivacypolicyComponent implements OnInit {
  url: string = "https://www.iubenda.com/privacy-policy/29701095";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
