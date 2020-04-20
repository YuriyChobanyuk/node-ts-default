import { IsEmail, Length } from 'class-validator';

export class PostDefaultDto {
  @Length(5, 10)
  name: string;

  @IsEmail()
  email: string;

  getCombined() {
    return `${this.email}, ${this.name}`;
  }
}
