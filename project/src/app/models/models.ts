export type User = {
    username: string,
    password: string,
    cart: Product[]
}

export type Product = {
    src: string,
    name: string,
    description: string,
    price: number,
}

export type Order = {
    user: User,
    location: string,
    time: string, 
    note: string,
    cost: number,
}