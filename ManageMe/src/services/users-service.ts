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
                name: "Aubrey",
                lastName: "Taylor",
                login: "dev",
                password: "dev",
                permishion: Permishion.Developer
            },
            {
                name: "Lauryn",
                lastName: "Davies",
                login: "devops",
                password: "devops",
                permishion: Permishion.Devops
            },
            {
                name: "Maren",
                lastName: "Evans",
                login: "admin",
                password: "admin",
                permishion: Permishion.Admin
            },
        ]
    }

    GetUserByName(name: string): User {
        let user = this.users.find((a) => a.name === name);
        if(user === undefined) {
            const newUser: User = {
                name: name,
                lastName: "",
                login: "",
                password: "",
                permishion: Permishion.Developer
            }
            user = newUser;
        };
        return user;
    }
}