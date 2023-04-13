export type User = {
    login: string,
    password: string,
}

export type Product = {
    src: string,
    name: string,
    description: string,
    price: number,
}

export type Order = {
    location: string,
    time: string, 
    note: string,
    cost: number,
}