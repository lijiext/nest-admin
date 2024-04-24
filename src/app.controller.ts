import { Controller, Get, Post, Delete, Put, Param, Body, Query} from '@nestjs/common';
// param - restful param
// query - url param
// body - post
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'get test';
  }

  // using param to get data
  @Get('/test/:id')
  getTestWithId(@Param('id') id: string): string {
    console.log(id);
    return `get test with id: ${id}`;
  }

  @Post('/test')
  postTest(): string {
    return 'post test';
  }

  // post data to server
  @Post('/test/:id')
  postTestWithBody(@Body() body, @Query() query): string {
    console.log(body);
    console.log(query);
    return `post test with body: ${JSON.stringify(body)}\nquery: ${JSON.stringify(query)}`;
  }

  // delete data

  @Delete('/test')
  deleteTest(): string {
    return 'delete test';
  }

  @Put('/test')
  putTest(): string {
    return 'put test';
  }
}
