import { Permishion } from "./permishion"

export type User = {
    id: string,
    login: string,
    password: string,
    name: string,
    lastName: string,
    permishion: Permishion
}