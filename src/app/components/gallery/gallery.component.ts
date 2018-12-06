import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Icomments} from '../../interfaces/icomments';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';
import {IGallery} from '../../interfaces/igallery';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Output() editgallery: EventEmitter<any> = new EventEmitter<any>();
  @Input() gallery: any;
  @Output() nginit: EventEmitter<any> = new EventEmitter<any>();


  constructor(private http: HttpClient,private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  value:number;



  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '4'
    })
  };

  editThisGallery() {
    this.editgallery.emit(this.gallery);
  }


  delGallery() {
    this.http.delete('https://api.mlab.com/api/1/databases/angular/collections/gallery/'+
      this.gallery._id.$oid +'?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG&q').toPromise().then((response) => {
      this.nginit.emit();
    }, (errResponse) => {
      console.log(errResponse);
    });
  }
}
