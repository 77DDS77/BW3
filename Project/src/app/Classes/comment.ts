export class PostComment {
  id!:number;
  postId: number;
  ownerId: number;
  title:string;
  content:string;
  date: Date;
  upvotes: number;
  edited: boolean;

  constructor(
    postId: number,
    ownerId: number,
    title: string,
    content: string
  ){
    this.postId = postId;
    this.ownerId = ownerId;
    this.title = title;
    this.content = content;
    this.date = new Date();
    this.upvotes = 0;
    this.edited = false;
  }
}
