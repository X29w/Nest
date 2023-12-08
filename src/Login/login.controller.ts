import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  read() {
    return {
      success: true,
    };
  }

  @Post()
  create(@Body() body: { userName: string; passWord: string }) {
    console.log(body);
    return {
      data: body,
      success: true,
    };
  }
}
