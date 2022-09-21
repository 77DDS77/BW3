export class Post {
  id!: number;
  ownerId: number;
  ownerName: string;
  title: string;
  content: string;
  date: Date;
  upvotes: number;
  edited:boolean;
  showComments:boolean;

  constructor(
    ownerId: number,
    ownerName: string,
    title: string,
    content: string,
  ){
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.title = title;
    this.content = content;
    this.date = new Date();
    this.upvotes = 0;
    this.edited = false;
    this.showComments = false;
  }
}
