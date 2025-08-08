import { Controller, Get, Query, Param, UseGuards, Request } from '@nestjs/common';
import { TorrentsService } from './torrents.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('torrents')
export class TorrentsController {
  constructor(private readonly torrentsService: TorrentsService) {}

  @Get()
  async findAll(
    @Query('query') query?: string,
    @Query('tags') tags?: string,
    @Query('sort') sort?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const tagsArray = tags ? tags.split(',').filter(Boolean) : undefined;
    return this.torrentsService.findAll({
      query,
      tags: tagsArray,
      sort,
      page: page ? parseInt(page) : undefined,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.torrentsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:userId/snatches')
  async getUserSnatches(@Param('userId') userId: string) {
    return this.torrentsService.getUserSnatches(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:userId/stats')
  async getUserStats(@Param('userId') userId: string) {
    return this.torrentsService.getUserStats(userId);
  }
}
