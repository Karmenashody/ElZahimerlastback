import { User } from "./User";

export interface Ichat
{
    id:string,
    senderId: string,
    content: string,
    createdAt: Date,
    senduser:User,
}