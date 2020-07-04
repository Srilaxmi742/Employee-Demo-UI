
export class ResponseWithError<T> {
  response: T;
  error:boolean;
  errorMsg:string;
}

export class LoginDto{
  userNameOrEmailId: string;
  password:string;
}
