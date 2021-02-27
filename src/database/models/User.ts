import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column()
    level: number

    @Column()
    completedChallanges: number

    @Column()
    experience: number
}

export default User