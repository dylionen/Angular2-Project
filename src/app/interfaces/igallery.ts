import {IPhoto} from './iphoto';
import {Icomments} from './icomments';

export interface IGallery {
  galleryId?: string;
  title: string;
  dateCreated: string;
  thumbUrl: string;
  description: string;
  tags?:Array<any>;
  photos?: IPhoto[];
  comment?: Icomments[];

}
