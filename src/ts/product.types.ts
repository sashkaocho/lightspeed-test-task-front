// interface is defined only of properties which is used in widget
export interface IProduct {
  id: number
  name: string
  price: number
  imageUrl: string
  url: string
  selected: boolean
  updateTimestamp: bigint
  createTimestamp: bigint
}
