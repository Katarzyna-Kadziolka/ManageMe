import { Permishion } from "./permishion"

export type User = {
    login: string,
    password: string,
    name: string,
    lastName: string,
    permishion: Permishion
}