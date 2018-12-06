import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INews} from "../../interfaces/inews";

@Component({
  selector: 'add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.scss']
})
export class AddEditNewsComponent implements OnInit {


  @Input() news?: any;
  @Output() saveChanges: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  setEmptyNews() {
    return {
      title: '',
      shortText: '',
      longText: '',
      dateCreated: new Date(),
      category: ''
    };
  }


  onSubmit() {

    this.saveChanges.emit(this.news);
  }

  ngOnInit() {
    this.news = (this.news && this.news.newsId) ? this.news
      : this.setEmptyNews();
  }


}
