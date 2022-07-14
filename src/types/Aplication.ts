
export interface IUser {
    id: string;
    username: string;
    password: string;
    privilegeLevel: number;
}

export interface IState {
    command: string,
    arguments: string[],
    currentFolder: string;
    user?: IUser | null
}
