import { Role } from '../../../common/enums/role';

export class RegisterEmployeeDto {
  email!: string;

  password!: string;

  role!: Role;

  name!: string;

  surname!: string;

  patronymic!: string;

  birthday!: Date;

  address!: string;

  phones?: string[];

  avatar?: string;
}
