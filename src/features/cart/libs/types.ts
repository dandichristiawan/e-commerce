export interface CartProducts {
    id : number
    title : string
    price:number
    quantity:number
    total:number
    thumbnail:string
}

export interface Carts {
    id:number
    products : CartProducts[]
    total : number
    userId : number
    totalProducts:number
    totalQuantity:number
}