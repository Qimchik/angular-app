import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: Router) { }

  ngOnInit() {
  }
  @Input() unsign: boolean;
  onLogOut() {
    localStorage.clear();
    this.activatedRoute.navigate(['login']);
  }
}
