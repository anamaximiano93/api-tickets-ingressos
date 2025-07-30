import { TicketKind } from "@prisma/client";

export class ResevarLugarRequest{
    lugares: string[]; // [A1,A2]
    tipo_ingresso: TicketKind;
    email: string;
}