import { Iproduct } from "@/app/init";

export interface ProductProps {
  id: number;
  onProduct: (id: number, data: Iproduct) => void;
}
