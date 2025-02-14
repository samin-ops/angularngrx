import { User } from "../user.interface";
import { ErrorsInterface } from "./errors.interface";

export interface AuthStateInterface{
  isSubmitting:boolean,
  isLoading:boolean,
  currentUser:User[]|undefined,
  errors:ErrorsInterface|null,
}
