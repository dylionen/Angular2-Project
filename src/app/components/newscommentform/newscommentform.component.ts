import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INews} from "../../interfaces/inews";

@Component({
  selector: 'newscommentform',
  templateUrl: './newscommentform.component.html',
  styleUrls: ['./newscommentform.component.scss']
})
export class NewscommentformComponent implements OnInit {
  @Input() emptyComment:any;
  @Output() createComment: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createComment.emit(this.emptyComment);

  }


}
