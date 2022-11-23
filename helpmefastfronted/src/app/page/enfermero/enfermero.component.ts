import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enfermero',
  templateUrl: './enfermero.component.html',
  styleUrls: ['./enfermero.component.css']
})
export class EnfermeroComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

