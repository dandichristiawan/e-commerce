export interface Products {
    limit : number | 0
    skip : number | 0
    total : number | 0
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


