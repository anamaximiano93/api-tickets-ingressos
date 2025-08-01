import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from '@app/core/events/events.service';
import { CriarEventoRequest } from './request/criar-evento.request';
import { AtualizarEventoRequest } from './request/atualizar-evento.request';
import { ResevarLugarRequest } from './request/reservar-lugar-request'; //Request request
import { AuthGuard } from '@app/core/auth/auth.guard';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() criarEventoRequest: CriarEventoRequest) {
    return this.eventsService.create({
      name: criarEventoRequest.nome,
      description: criarEventoRequest.descricao,
      date: criarEventoRequest.data,
      price: criarEventoRequest.preco,
    });
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() atualiazrEventoRequest: AtualizarEventoRequest,
  ) {
    return this.eventsService.update(id, {
      name: atualiazrEventoRequest.nome,
      description: atualiazrEventoRequest.descricao,
      date: atualiazrEventoRequest.data,
      price: atualiazrEventoRequest.preco,
    });
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Post(':id/reservar')
  reserveSpots(
    @Body() resevarLugaresRequest: ResevarLugarRequest,
    @Param('id') eventId: string,
  ) {
    return this.eventsService.reserveSpot({ 
      eventId,
      spots: resevarLugaresRequest.lugares,
      ticket_kind:resevarLugaresRequest.tipo_ingresso,
      email: resevarLugaresRequest.email
     });
  }
}
