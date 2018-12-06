import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Icomments} from '../../interfaces/icomments';
import * as uuid from 'uuid/v4';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {IGallery} from '../../interfaces/igallery';


@Component({
  selector: 'comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})
export class CommentsFormComponent implements OnInit {
  comment:any;
  @Input() galleryId:string;
  @Output() addComment: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  private setEmptyComment() {
      return {
        galleryId: parseInt(this.galleryId, 10),
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        dateCreated: new Date()
      }
    }


  ngOnInit() {
    this.comment = this.setEmptyComment();
  }

  onSubmit() {
    this.addComment.emit(this.comment);
    this.comment = this.setEmptyComment();
  }
}

