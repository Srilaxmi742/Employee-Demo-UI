
export class ResponseWithError<T> {
  response: T;
  error:boolean;
  errorMsg:string;
}

export class RegisterDto{
 id :string;
 empFullName :string;
 emailId:string;
 password:string;
}

