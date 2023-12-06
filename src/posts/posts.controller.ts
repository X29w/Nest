import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class createPostsDTO {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  other?: string;
}

@Controller('posts')
@ApiTags('文章')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '列表' })
  index() {
    return [];
  }

  @Post()
  @ApiOperation({ summary: '创建' })
  create(@Body() body: createPostsDTO) {
    return {
      data: body,
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '查看详情' })
  detail(@Param('id') id: number) {
    return {
      id,
      title: 'x29',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑' })
  update(@Param('id') id: number, @Body() body: createPostsDTO) {
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除' })
  remove(@Param('id') id: number) {
    return {
      success: true,
    };
  }
}
