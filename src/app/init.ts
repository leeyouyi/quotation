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

export const initProduct = {
  id: 0,
  productName: "",
  unitPrice: 0,
  unit: "",
  remarks: "",
};

export const initProductList = [
  {
    listId: 1,
    showDetail: false,
    detail: initProduct,
  },
];

export const initTotalList = [
  {
    listId: 1,
    total: 0,
  },
];
