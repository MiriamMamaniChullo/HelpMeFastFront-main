import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulto-joven',
  templateUrl: './adulto-joven.component.html',
  styleUrls: ['./adulto-joven.component.css']
})
export class AdultoJovenComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

