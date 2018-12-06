import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IGallery} from "../../interfaces/igallery";
import {GALLERY} from "../../constants/galleries";
import {IPhoto} from '../../interfaces/iphoto';
import {Icomments} from '../../interfaces/icomments';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'gallery-details',
    templateUrl: './gallery-details.component.html',
    styleUrls: ['./gallery-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
  }
)


export class GalleryDetailsComponent implements OnInit {
  galleryId: string;
  gallery: any;
  photo: IPhoto;
  comments: any = [];
  comment: Icomments;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '4'
    })
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  changePhoto(value) {
    this.photo = (value);

  }





  //comments

  getComments() {
    this.comments = [];
    this.http.get('https://api.mlab.com/api/1/databases/angular/collections/comments?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      let commentsTemp:any = response;
      for (let comment of commentsTemp) {
        if (comment.galleryId == this.galleryId)
          this.comments.push(comment);
      }
    })
  }

  delComment(event){
    this.http.delete('https://api.mlab.com/api/1/databases/angular/collections/comments/'+
      event._id.$oid +'?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG&q').toPromise().then((response) => {
      console.log('success', response);
      this.ngOnInit();
    }, (errResponse) => {
      console.log('error', errResponse)
    })
  }

  addComment(event){
    this.http.post('https://api.mlab.com/api/1/databases/angular/collections/comments?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG', event, this.httpOptions).toPromise().then((response) => {
      console.log('success', response);
      this.comments.push(event);
    }, (errResponse) => {
      console.log('error', errResponse)
    })
  }



  ngOnInit() {
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    this.http.get('https://api.mlab.com/api/1/databases/angular/collections/gallery?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      let galleryTemp: any = response;
      for (let item of galleryTemp) {
        if (item.galleryId == this.galleryId)
          this.gallery = item;
      }
      this.photo = this.gallery.photos[0];
      this.getComments();
    })
  }
}





