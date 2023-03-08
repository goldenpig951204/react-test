export interface ICartItem {
  id: string;
  itemId: number;
  tokenId: number;
  nftType: string;
  name: string;
  rarity: string;
  payType: number;
  price: number;
  image: string;
  sold: boolean;
}