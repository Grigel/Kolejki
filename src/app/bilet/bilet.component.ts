import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BiletyService } from '../services/bilety.service';
import { Bilet } from '../models/bilet';

@Component({
  selector: 'app-bilet',
  templateUrl: './bilet.component.html',
  styleUrls: ['./bilet.component.scss'],
})
export class BiletComponent implements OnInit {

  bilet: Bilet;

  constructor(private biletyService: BiletyService) { }

  ngOnInit() {
    this.biletyService.getBilet(0).subscribe(bilet => this.bilet = bilet);
  }

}
