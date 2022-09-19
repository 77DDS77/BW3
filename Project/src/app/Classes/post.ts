export class Post {
  id!: number;
  ownerId: number;
  title: string;
  content: string;
  date: Date;
  upvotes: number;
  edited:boolean;

  constructor(
    ownerId: number,
    title: string,
    content: string,
  ){
    this.ownerId = ownerId;
    this.title = title;
    this.content = content;
    this.date = new Date();
    this.upvotes = 0;
    this.edited = false;
  }
}
