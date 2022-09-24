import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    
    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    importance:string;

    @Column()
    done: boolean

    constructor(_title:string, _description:string, _importance:string, _done:boolean) {
        this.title = _title;
        this.description = _description;
        this.importance = _importance;
        this.done = _done
    }

}