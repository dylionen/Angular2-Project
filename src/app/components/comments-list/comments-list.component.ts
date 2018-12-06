import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icomments} from '../../interfaces/icomments';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';









@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],

})

export class CommentsListComponent implements OnInit {
  @Input() comments: any;
  @Output() deleteComment: EventEmitter<any> = new EventEmitter<any>();



  constructor() {
  }

  delComment(event){
    this.deleteComment.emit(event);
  }

  ngOnInit() {

  }



}
