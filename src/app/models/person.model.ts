import { Gender } from "../components/enums/gender.enum";
import { User } from "./user.model";

export class Person implements User {
  firstName: string;
  lastName: string;
  gender: Gender;
}
