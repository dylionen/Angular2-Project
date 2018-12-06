import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as uuid from 'uuid/v4';
import {IGallery} from "../../interfaces/igallery";


@Component({
  selector: 'add-edit-gallery',
  templateUrl: './add-edit-gallery.component.html',
  styleUrls: ['./add-edit-gallery.component.scss']
})
export class AddEditGalleryComponent implements OnInit {
  @Input() gallery?: any;
  @Input() galleryLen?: string;
  @Input() allTags:any;
  @Output() saveNewGallery: EventEmitter<any> = new EventEmitter();

  wartosc: string;
  keypress: string;
  tagelements:any=[];
  tagRepeat: boolean = false;





  setEmptyPhoto() {
    return {
      photoId: uuid(),
      thumbUrl: '',
      imgUrl: '',
      city: '',
      desc: ''
    };
  }



  setEmptyGallery(){
    return {
      galleryId:this.galleryLen,
      title: '',
      thumbUrl: '',
      dateCreated: '',
      description: '',
      tags: [],
      photos: [{
        ...this.setEmptyPhoto()
      }]
    };
  }



  setEmptyTag(){
    return{
      tag:''
    }
  }


  setValueTag(str: string) {
    return {
      tag: str
    };
  }



  kp(event) {
    this.keypress = event.key;
  }

  checkIf(){
    let is:boolean=false;
    for (let element of this.tagelements){
      if (element.tag==this.wartosc){
        is=true;
        this.wartosc = '';
      }
    }
    return is;
  }

  newTag() {

    if (this.checkIf()==false) {
      this.tagelements.push(this.setValueTag(this.wartosc));
      this.wartosc = '';
      this.tagRepeat = false;
    } else {
      this.tagRepeat=true;
    }

  }


  saveTagsInGallery() {
    this.gallery.tags = [];
    for (let element of this.tagelements) {
      this.gallery.tags.push(element.tag);
    }
    this.tagelements = [];
  }


  addTag() {
    this.tagelements.push(this.setEmptyTag());
  }

  removeTag(index) {
    if (this.tagelements.length > 0) {
      this.tagelements.splice(index, 1);
    }
  }

  addPhoto() {
    this.gallery.photos.push(this.setEmptyPhoto());
    console.log(this.gallery.photos)

  }

  removePhoto(index) {
    if (this.gallery.photos.length > 0) {
      this.gallery.photos.splice(index, 1);
    }
  }




  onSubmit() {
    console.log('wysyla');
    this.saveTagsInGallery();
    this.saveNewGallery.emit(this.gallery);
  }



  ngOnInit() {
    this.gallery = (this.gallery && this.gallery.galleryId) ? this.gallery
      : this.setEmptyGallery();

    for (let i = 0; i < this.gallery.tags.length; i++) {
      this.tagelements.push(this.setValueTag(this.gallery.tags[i]));
    }
    console.log(this.galleryLen)

  }


}




