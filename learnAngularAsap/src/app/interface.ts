export interface User{
    email: string;
    name: string;
    image: string;
}


export interface UserContact{
    address:string;
    userList: User[]
  }
  
export interface Student{
  name: string;
  skills: Skills[];
}

export interface Skills{
  id: number,
  name:string,
  selected: boolean
}

  export class UserContactDefin implements UserContact {
    address: string;
    userList: User[];
  }

