export interface UserInterface {
    id?: Number,
    document?: String,
    name?: String,
    surname?: String,
    lastname?: String,
    email?: String,
    password?: String,
    active?: Boolean
}



export interface userSearchInterface {
    page?: string,
    pageSize?: string,
    name?: string,
    email?: string,
}
