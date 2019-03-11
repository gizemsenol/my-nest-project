import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 25 })
    name:string;

    @Column({ length: 30}) 
    sur_name: string;

    @Column()
    password: string;
    
    @Column()
    token: string;

}
