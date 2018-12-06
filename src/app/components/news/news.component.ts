import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {INews} from '../../interfaces/inews';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGallery} from '../../interfaces/igallery';


@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent implements OnInit {
  newslist: any;
  addNew: boolean;
  editNew: boolean;
  editNewData: any;

  newsPages: number = 0;
  newsPagesArray: Array<number> = [];
  maxNewsPages: number = 3;
  from: number;
  to: number = this.maxNewsPages;
  activePage: number = 0;

  sort: number = 1;

  new(bool: boolean) {
    this.addNew = bool;
  }

  edit(bool: boolean) {
    this.editNew = bool;
  }

  editNews(editnew: INews) {
    this.edit(false);
    this.editNewData = editnew;
  }

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '4'
    })
  };

  saveNews(news: INews) {
    this.http.post('http://project.usagi.pl/news', news,
      this.httpOptions).toPromise().then((response) => {
      this.ngOnInit();
    });
  }

  saveChanges(news: INews) {
    this.http.post('http://project.usagi.pl/news/' + news.newsId, news,
      this.httpOptions).toPromise().then((response) => {
      this.ngOnInit();
    });
  }

  deleteNews(event: INews) {
    let comments: any;
    this.http.get('https://api.mlab.com/api/1/databases/testowa/collections/comments?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      comments = response;
      comments = comments.filter(item => (item.galleryId == ('-' + event.newsId)));
      for (let comment of comments) {
        this.http.delete('https://api.mlab.com/api/1/databases/testowa/collections/comments/' + comment._id.$oid + '?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
        })
      }
    });
    this.http.post('http://project.usagi.pl/news/delete/' + event.newsId, event,
      this.httpOptions).toPromise().then((response) => {
      this.ngOnInit();
    });
  }

  slicepage(from: number) {
    this.activePage = from;
    this.from = from * this.maxNewsPages;
    this.to = this.from + this.maxNewsPages;
  }


  resetValues() {
    this.newsPages = 0;
    this.newsPagesArray = [];
    this.from = 0;
    this.to = this.maxNewsPages;
  }

  changesort(value: number) {
    this.sort = value;
  }

  ngOnInit() {
    this.resetValues();
    this.addNew = true;
    this.editNew = true;
    this.http.get('http://project.usagi.pl/news', this.httpOptions).toPromise().then((response) => {
      this.newslist = response;
      for (let news of this.newslist) {
        this.newsPages = this.newsPages + 1;
      }
      for (let i = 0; i < this.newsPages / this.maxNewsPages; i++) {
        this.newsPagesArray[i] = i;
      }
    });


  }

}
