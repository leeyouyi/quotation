"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  styled,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Style = styled(Box)(() => ({
  margin: "10px 0",
  display: "flex",
  justifyContent: "center",

  ".wrap": {
    minWidth: "800px",
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
  },
  ".flex": {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    label: {
      width: "30%",
      textAlign: "right",
      padding: "5px 10px",
      fontSize: "18px",
      ".star": {
        color: "red",
      },
    },
    ".input": {
      width: "400px",
      padding: "5px",
      input: {
        padding: "10px",
        height: "20px",
      },
    },
    ".inputDate": {
      width: "60px",
      padding: "5px",
      input: {
        padding: "10px",
        height: "20px",
      },
    },
  },
}));

const menuItems = [
  { value: 1, label: "經營室" },
  { value: 2, label: "雲架構服務部" },
  { value: 10, label: "營運服務部" },
  { value: 16, label: "客戶服務部" },
  { value: 40, label: "關港貿服務部" },
  { value: 48, label: "高雄營業部" },
  { value: 53, label: "通關服務部" },
  { value: 68, label: "資訊服務部" },
  { value: 74, label: "電商服務部" },
  { value: 80, label: "資安整合服務部" },
  { value: 90, label: "企劃及市場部" },
  { value: 92, label: "財務及會計部" },
  { value: 96, label: "數位發展部" },
  { value: 136, label: "人才育成中心" },
  { value: 141, label: "創新保險服務部" },
  { value: 142, label: "戰略事業群" },
  { value: 147, label: "海外事業中心" },
  { value: 149, label: "行政及管理部" },
  { value: 164, label: "軟體工程部" },
  { value: 218, label: "公衛服務部" },
  { value: 258, label: "資安長辦公室" },
  { value: 264, label: "左營專案辦公室(部)" },
];

const QuotationForm = () => {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState(10);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setSelectValue(event.target.value as number);
  };

  const handleExport = () => {
    console.log("handleExport");
  };
  const handleCancel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleClose();
    router.push("/");
  };

  return (
    <Style>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">確定取消嗎?</DialogTitle>
        <DialogContent sx={{ width: "500px" }}>
          <DialogContentText id="alert-dialog-description">
            將放棄此次編輯返回上一頁
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm} autoFocus>
            確定
          </Button>
        </DialogActions>
      </Dialog>
      <Box>
        <form>
          <div className="wrap">
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>機房代碼
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>申請人單位
              </label>
              <Select
                sx={{ height: "40px", minWidth: "300px", marginLeft: "5px" }}
                value={selectValue}
                onChange={handleChange}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>申請人姓名
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>專案名稱
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>申請人分機
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>服務期間
              </label>
              <TextField className="inputDate" label="" variant="outlined" />年
              <TextField className="inputDate" label="" variant="outlined" />月
              <span style={{ padding: "0 10px" }}>{" ~ "}</span>
              <TextField className="inputDate" label="" variant="outlined" />年
              <TextField className="inputDate" label="" variant="outlined" />月
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>報價者姓名
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>報價者電話
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
            <div className="flex">
              <label htmlFor="">
                <span className="star">*</span>報價者e-mail
              </label>
              <TextField className="input" label="" variant="outlined" />
            </div>
          </div>
        </form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            fontSize: "16px",
          }}
        >
          <Button
            sx={{ width: "120px", marginRight: "10px", fontSize: "16px" }}
            variant="contained"
            onClick={handleExport}
          >
            產生報價單
          </Button>
          <Button
            sx={{ width: "120px", marginLeft: "10px" }}
            variant="outlined"
            onClick={handleCancel}
          >
            取消
          </Button>
        </Box>
      </Box>
    </Style>
  );
};
export default QuotationForm;
