export interface IproductList {
  listId: number;
  showDetail: boolean;
  detail: Iproduct;
}

export interface Iproduct {
  id: number;
  productName: string;
  unitPrice: number;
  unit: string;
  remarks: string;
}