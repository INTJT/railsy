import { Body, Controller, Post } from '@nestjs/common';
import { apiPath } from '../../common/constants';
import { RegisterEmployeeDto } from './dtos/register-employee.dto';

@Controller(apiPath.AUTH)
export class AuthController {
  @Post()
  register(@Body() body: RegisterEmployeeDto) {
    return body;
  }
}
