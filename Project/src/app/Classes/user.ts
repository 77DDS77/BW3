export class User {
  id!:number;
  name:string;
  lastname:string;
  username:string;
  slug:string;
  avatar:string;
  email:string;
  password:string;

  constructor(
    name:string,
    lastname:string,
    username:string,
    avatar:string,
    email:string,
    password:string
    ) {

      this.name = name;
      this.lastname = lastname;
      this.username = username;
      this.slug = User.slugify(username);
      this.avatar = avatar;
      this.email = email;
      this.password = password;
  }

  static slugify(userName:string):string{
    return userName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

}
