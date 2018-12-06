import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'newscommentview',
  templateUrl: './newscommentview.component.html',
  styleUrls: ['./newscommentview.component.scss']
})
export class NewscommentviewComponent implements OnInit {

  @Input() comments:any;
  @Output() delComment: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(event){
    this.delComment.emit(event);
  }

}
