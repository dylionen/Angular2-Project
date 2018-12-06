import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {INews} from '../../interfaces/inews';

@Component({
  selector: 'sortnews',
  templateUrl: './sortnews.component.html',
  styleUrls: ['./sortnews.component.scss']
})
export class SortnewsComponent implements OnInit {

  @Output() changesort:EventEmitter<number> = new EventEmitter<number>();

  value:number=1;

  newSort(){
    this.changesort.emit(this.value);
  }


  constructor() { }

  ngOnInit() {
  }

}
