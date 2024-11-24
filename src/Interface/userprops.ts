import { ReactNode } from "react";

interface userprops {
    id?: number| string,
    userName: string,
    name?:string,
    lastName?:string,   
    email?: string,
    password?:string,
    avatar?: string |" " | ReactNode
}


export default userprops;

