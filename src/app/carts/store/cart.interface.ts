
export interface Cart{
  id: number,
  date: string,
  userId: number,
  products: {
    productId:number,
    quantity:number
  }[]
}
