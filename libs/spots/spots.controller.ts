import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotsService } from './spots.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Controller('events/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(@Body() createSpotDto: CreateSpotDto, @Param('eventId') eventId:string) {
    return this.spotsService.create({...createSpotDto, eventId});
  }

  @Get()
  findAll( @Param('eventId') eventId:string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('id') spotId: string,@Param('eventId') eventId:string) {
    return this.spotsService.findOne(spotId,eventId);
  }

  @Patch(':spotId')
  update(@Param('id') spotId: string,@Param('eventId') eventId:string, @Body() updateSpotDto: UpdateSpotDto) {
    return this.spotsService.update(spotId,eventId, updateSpotDto);
  }

  @Delete(':spotId')
  remove(@Param('id') spotId: string , @Param('eventId') eventId:string) {
    return this.spotsService.remove(spotId, eventId);
  }
}
