import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {INews} from '../../interfaces/inews';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewslistComponent implements OnInit {

  @Input() private new:INews;
  @Output() deleteNews:EventEmitter<INews> = new EventEmitter<INews>();
  @Output() editNews:EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }



  askmodal(content) {
    this.modalService.open(content, { size: 'lg' });
  }


  delete(){
    this.deleteNews.emit(this.new);
  }

  editNew(){
    this.editNews.emit(this.new);
  }
  ngOnInit() {

  }

}
