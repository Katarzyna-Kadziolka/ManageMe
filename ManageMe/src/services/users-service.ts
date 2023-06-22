import { Permishion } from 'src/models/permishion';
import { User } from './../models/user';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: Array<User> = [];

    constructor() {
        this.users = [
            {
                id: "79877259-2198-4a10-9cfa-5445a200e9e1",
                name: "Aubrey",
                lastName: "Taylor",
                login: "dev",
                password: "dev",
                permishion: Permishion.Developer
            },
            {
                id: "79877259-2198-4a10-9cfa-5445a200e9e1",
                name: "Lauryn",
                lastName: "Davies",
                login: "devops",
                password: "devops",
                permishion: Permishion.Devops
            },
            {
                id: "79877259-2198-4a10-9cfa-5445a200e9e1",
                name: "Maren",
                lastName: "Evans",
                login: "admin",
                password: "admin",
                permishion: Permishion.Admin
            },
        ]
    }

    GetUserById(id: string): User {
        const user = this.users.find((a) => a.id === id);
        if(user === undefined) throw Error;
        return user;
    }
}