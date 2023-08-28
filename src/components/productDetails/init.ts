import { Iproduct } from "@/app/init";

export interface IproductDetails {
  listId: number;
  productId: number;
  quantity: number;
  periodInMonth: number;
}

export interface ProductDetailsProps {
  listId: number;
  detail: Iproduct;
  showDetail: boolean;
  onAdd: () => void;
  onTotal: (
    id: number,
    totalNum: number,
    productDetails: IproductDetails
  ) => void;
}
