import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GALLERY} from '../../constants/galleries';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {and, forEach} from '@angular/router/src/utils/collection';
import {IGallery} from '../../interfaces/igallery';

@Component({
  selector: 'galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class GalleriesComponent implements OnInit {
  title: string;
  description: string;
  searchValue: string;
  galleries: any = [];
  allTags: any = [];
  incrementation:number=0;


  actualnumber: number = 0;
  newGallery: IGallery;
  showGalleryForm: boolean;


  newsPages: number = 0;
  newsPagesArray: Array<number> = [];
  maxNewsPages: number = 3;
  from: number = 0;
  to: number = this.maxNewsPages;
  activePage: number = 0;

  showEditForm: boolean;
  editGallery: IGallery;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '4'
    })
  };


  constructor(private http: HttpClient) {
  }

  getTags() {
    for (let gallery of this.galleries) {
      for (let tag of gallery.tags) {
        if (this.allTags.indexOf(tag) == -1 && tag != '') {
          this.allTags.push(tag);
        }
      }
    }
  }


  addGallery(value) {
    this.newGallery = value;
  }


  setSearchValue($event) {
    console.log($event);
    this.searchValue = $event;
  }

  saveGallery(event) {
    this.http.post('https://api.mlab.com/api/1/databases/angular/collections/gallery?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG', event,
      this.httpOptions).toPromise().then((response) => {
      this.ngOnInit();
    });
  }


  saveEditGallery(gallery) {
    this.http.post('https://api.mlab.com/api/1/databases/angular/collections/gallery?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG&q={"_id":' + gallery._id.$oid + '}',
      gallery, this.httpOptions).toPromise().then((response) => {
      this.ngOnInit();
    });
  }


  editGalleryData(gallery: any) {
    this.showEditForm = true;
    this.editGallery = gallery;
  }


  slicepage(from: number) {
    this.activePage = from;
    this.from = from * this.maxNewsPages;
    this.to = this.from + this.maxNewsPages;
  }


  resetValues() {
    this.showEditForm = false;
    this.newsPages = 0;
    this.newsPagesArray = [];
  }


  ngOnInit() {
    this.resetValues();
    this.showGalleryForm = false;
    this.http.get('https://api.mlab.com/api/1/databases/angular/collections/gallery?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      this.galleries = response;
      this.getTags();
      for (let gallery of this.galleries) {
        this.newsPages = this.newsPages + 1;
        if (gallery.galleryId>=this.incrementation) {
          this.incrementation = parseInt(gallery.galleryId);

        }
      }
      for (let i = 0; i < this.newsPages / this.maxNewsPages; i++) {
        this.newsPagesArray[i] = i;
      }
    });
  }

}
