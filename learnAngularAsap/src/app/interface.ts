export interface User{
    email: string;
    name: string;
    image: string;
}


export interface UserContact{
    address:string;
    userList: User[]
  }
  
  export class UserContactDefin implements UserContact {
    address: string;
    userList: User[];
  }