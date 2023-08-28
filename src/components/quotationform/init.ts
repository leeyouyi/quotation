import { FieldPath } from "react-hook-form";
import { IproductDetails } from "../productDetails/init";

export enum Emaster {
  idcCode = "idcCode",
  applicantUnit = "applicantUnit",
  applicantName = "applicantName",
  projectName = "projectName",
  extensionNumber = "extensionNumber",
  remarks = "remarks",
  serviceStartYear = "serviceStartYear",
  serviceEndYear = "serviceEndYear",
  serviceStartMonth = "serviceStartMonth",
  serviceEndMonth = "serviceEndMonth",
  quotationProviderName = "quotationProviderName",
  quotationProviderPhone = "quotationProviderPhone",
  quotationProviderEmail = "quotationProviderEmail",
  productDetails = "productDetails",
}

export interface Imaster {
  idcCode: string;
  applicantUnit: string;
  applicantName: string;
  projectName: string;
  extensionNumber: string;
  remarks: string;
  serviceStartYear: string;
  serviceEndYear: string;
  serviceStartMonth: string;
  serviceEndMonth: string;
  quotationProviderName: string;
  quotationProviderPhone: string;
  quotationProviderEmail: string;
  productDetails: IPostproductDetails[];
}
export interface IPostproductDetails {
  periodInMonth: number;
  productId: number;
  quantity: number;
}

export const useInitMaster = () => ({
  idcCode: "",
  applicantUnit: "",
  applicantName: "",
  projectName: "",
  extensionNumber: "",
  remarks: "",
  serviceStartYear: "",
  serviceEndYear: "",
  serviceStartMonth: "",
  serviceEndMonth: "",
  quotationProviderName: "",
  quotationProviderPhone: "",
  quotationProviderEmail: "",
  productDetails: [],
});

export const nameMaster = (field: Emaster): FieldPath<quotationform> =>
  `master.${field}`;

export interface quotationform {
  master: Imaster;
}

export interface QuotationFormProps {
  onShowNext: () => void;
  productDetailsList: IproductDetails[];
}
