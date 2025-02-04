export interface Cart{
  id: number,
  userId: number,
  date: string,
  product: [
    {
      productId: number,
      quantity: number
    }
  ]
}
