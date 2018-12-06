import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {INews} from '../../interfaces/inews';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGallery} from '../../interfaces/igallery';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsId: string;
  news: INews;
  comments: any = [];
  emptyComment: any;



  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '4'
    })
  };

  private setEmptyComment() {
    return {
      galleryId: parseInt(this.newsId, 10) * -1,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      dateCreated: new Date()
    }
  }


  createComment(event) {
    event.galleryId = parseInt(this.newsId, 10) * -1;
    this.http.post('https://api.mlab.com/api/1/databases/testowa/collections/comments?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG', event).toPromise().then((response) => {
      console.log('success', response);
      this.getComments();
      this.emptyComment = this.setEmptyComment();
    }, (errResponse) => {
      console.log('error', errResponse)
    })
  }

  getComments(){
    this.http.get('https://api.mlab.com/api/1/databases/testowa/collections/comments?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      this.comments = response;
      this.comments = this.comments.filter(item=> (item.galleryId== ('-'+this.newsId)));
    });


  }

  delComment(event){
    this.http.delete('https://api.mlab.com/api/1/databases/testowa/collections/comments/'+event._id.$oid+'?apiKey=IxYNYMw-Wm_bbnoVkjd_qZGdry7eczjG').toPromise().then((response) => {
      this.getComments();
    })
  };


  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('newsId');
    this.http.get('http://project.usagi.pl/news/' + this.newsId, this.httpOptions).toPromise().then((response: INews) => {
        this.news = response;
      }
    );
    this.getComments();
    this.emptyComment = this.setEmptyComment();
  }


}
