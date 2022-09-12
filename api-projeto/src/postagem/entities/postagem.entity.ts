import { IsNotEmpty, MaxLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'tb_postagem'})
export class Postagem{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    descricao: string

    @Column()
    imagem: string
}