import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'galleries-search',
  templateUrl: './galleries-search.component.html',
  styleUrls: ['./galleries-search.component.scss']
})
export class GalleriesSearchComponent implements OnInit {

  @Input() gallery:any;

  @Output()
  searchValue: EventEmitter<String> = new EventEmitter<String>();
  public value: string;

  constructor() { }

  onChange() {
    this.searchValue.emit(this.value);

  }
  onClick(value)
  {
    this.searchValue.emit(value);

  }




    ngOnInit() {
      this.value = "";
    }



}
