import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { cadastroController } from "../controllers/cadastro.controller";
import { Cadastro } from "../estities/cadastro.entity";
import { cadastroService } from "../service/cadastro.service";


@Module({
    imports: [TypeOrmModule.forFeature([Cadastro])],
    providers: [cadastroService],
    controllers: [cadastroController],
    exports: [TypeOrmModule]
})
export class cadastroModule {}