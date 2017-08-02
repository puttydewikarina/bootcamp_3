import { Component, OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  roomList : Object[] = [
    {"id":"1", "type":"King", "description":"Monarch", "photos":"/assets/img/product.jpg"},
    {"id":"2", "type":"Queen", "description":"Wizard", "photos":"/assets/img/product.jpg"},
    {"id":"3", "type":"Twin", "description":"Knight", "photos":"/assets/img/product.jpg"},
    {"id":"4", "type":"Standard", "description":"Blacksmith", "photos":"/assets/img/product.jpg"}
  ];

}
