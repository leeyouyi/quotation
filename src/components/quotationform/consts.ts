// /** 下載 api blob */
// const blobDownload = (
//   response: Promise<Response>,
//   // enqueueSnackbar: ProviderContext['enqueueSnackbar'],
//   _fileName?: string
// ): void => {
//   // { responseType: "blob" }
//   // Access-Control-Expose-Headers : Content-Disposition, msg
//   let fileName = _fileName ?? "";
//   if (!fileName) {
//     const contentDisposition = response.headers["content-disposition"];

//     if (contentDisposition === "") {
//       void blobText(response);
//       return;
//     }
//     fileName = contentDisposition.split("=")[1].split(";")[0].replace(/"/g, "");
//   }

//   const link = document.createElement("a");
//   link.href = window.URL.createObjectURL(new Blob([response.data]));
//   link.setAttribute("download", decodeURIComponent(fileName)); // or any other extension
//   document.body.appendChild(link);
//   link.click();
//   window.URL.revokeObjectURL(link.href);
//   // remove <a />
//   link.remove();
// };
export const menuItems = [
  { value: "0", label: "" },
  { value: "1", label: "經營室" },
  { value: "2", label: "雲架構服務部" },
  { value: "10", label: "營運服務部" },
  { value: "16", label: "客戶服務部" },
  { value: "40", label: "關港貿服務部" },
  { value: "48", label: "高雄營業部" },
  { value: "53", label: "通關服務部" },
  { value: "68", label: "資訊服務部" },
  { value: "74", label: "電商服務部" },
  { value: "80", label: "資安整合服務部" },
  { value: "90", label: "企劃及市場部" },
  { value: "92", label: "財務及會計部" },
  { value: "96", label: "數位發展部" },
  { value: "136", label: "人才育成中心" },
  { value: "141", label: "創新保險服務部" },
  { value: "142", label: "戰略事業群" },
  { value: "147", label: "海外事業中心" },
  { value: "149", label: "行政及管理部" },
  { value: "164", label: "軟體工程部" },
  { value: "218", label: "公衛服務部" },
  { value: "258", label: "資安長辦公室" },
  { value: "264", label: "左營專案辦公室(部)" },
];
