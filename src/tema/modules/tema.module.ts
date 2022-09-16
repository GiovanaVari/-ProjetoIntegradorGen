import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { temaController } from "../controllers/tema.controller";
import { Tema } from "../entities/tema.entity";
import { temaService } from "../service/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [temaService],
    controllers: [temaController],
    exports: [TypeOrmModule]
})
export class temaModule{}