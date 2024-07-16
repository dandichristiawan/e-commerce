export interface Products {
    limit : number
    skip : number
    total : number
    products : any[] 
}

export interface dataProducts{
    id : number
    title : string
    description: string
    category:string
    price : string
    rating: number
    tags : string[]
    thumbnail:string
}


