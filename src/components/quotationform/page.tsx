"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Emaster,
  QuotationFormProps,
  nameMaster,
  quotationform,
  useInitMaster,
} from "./init";
import { menuItems } from "./consts";

const Style = styled(Box)(() => ({
  margin: "10px 0",
  display: "flex",
  justifyContent: "center",

  ".wrap": {
    minWidth: "800px",
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 10px 0px inset",
    border: "1px solid rgb(255, 255, 255)",
  },
  ".flex": {
    display: "flex",
    alignItems: "center",
    // borderBottom: "1px solid #ccc",
    label: {
      width: "30%",
      textAlign: "right",
      padding: "5px 15px",
      fontSize: "18px",
      background: "rgb(238, 241, 246)",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "65px",
      ".star": {
        color: "red",
      },
    },
    ".input": {
      width: "400px",
      padding: "5px 15px",
      input: {
        padding: "10px",
        height: "20px",
      },
    },
    ".inputDate": {
      width: "100px",
      padding: "5px 15px",
      input: {
        padding: "10px",
        height: "20px",
      },
    },
    ".error": {
      color: "red",
      paddingLeft: "15px",
      fontSize: "12px",
      paddingBottom: "5px",
    },
  },
}));

const QuotationForm = (props: QuotationFormProps) => {
  const { onShowNext, productDetailsList } = props;

  const initMaster = useInitMaster();
  const formReturn = useForm<quotationform>({
    defaultValues: {
      master: initMaster,
    },
  });

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = formReturn;
  const errorsRoot = errors.master;
  const master = watch("master");

  const [open, setOpen] = useState(false);

  const handleExport = () => async (input: quotationform) => {
    console.log(input);
    const { master: InputMaster } = input;

    // const url = "";
    // fetch(url, {
    //   method: "POST",
    //   body: encodeURI(JSON.stringify(InputMaster)),
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    //   },
    // })
    //   .then((res) => {
    //     return res.json(); // 使用 json() 可以得到 json 物件
    //   })
    //   .then((result) => {
    //     console.log(result); // 得到 {name: "oxxo", age: 18, text: "你的名字是 oxxo，年紀 18 歲～"}
    //   });
  };

  const handleCancel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleClose();
    onShowNext();
  };

  useEffect(() => {
    if (productDetailsList.length !== 0) {
      const productList = productDetailsList.map((item) => ({
        periodInMonth: item.periodInMonth,
        productId: item.productId,
        quantity: item.quantity,
      }));

      setValue("master.productDetails", productList);
    }
  }, [productDetailsList, setValue]);

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

      <form onSubmit={handleSubmit(handleExport())}>
        <Box>
          <div className="wrap">
            <div className="flex">
              <label>
                <span className="star">*</span>機房代碼
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.idcCode), { required: true })}
                />
                {errorsRoot?.idcCode?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>

            <div className="flex">
              <label>
                <span className="star">*</span>申請人單位
              </label>
              <div>
                <Select
                  sx={{ height: "40px", minWidth: "300px", marginLeft: "15px" }}
                  defaultValue={0}
                  {...register(nameMaster(Emaster.applicantUnit), {
                    required: master.applicantUnit === "",
                  })}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                {errorsRoot?.applicantUnit?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>申請人姓名
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.applicantName), {
                    required: true,
                  })}
                />
                {errorsRoot?.applicantName?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>專案名稱
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.projectName), {
                    required: true,
                  })}
                />
                {errorsRoot?.projectName?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>申請人分機
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.extensionNumber), {
                    required: true,
                  })}
                />
                {errorsRoot?.extensionNumber?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>服務期間
              </label>
              <div>
                <TextField
                  type="number"
                  className="inputDate"
                  variant="outlined"
                  {...register(nameMaster(Emaster.serviceStartYear), {
                    required: true,
                  })}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (Number(value) < 0) {
                      setValue("master.serviceStartYear", "0");
                    }
                  }}
                />
                {errorsRoot?.serviceStartYear?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
              年
              <div>
                <TextField
                  type="number"
                  className="inputDate"
                  variant="outlined"
                  {...register(nameMaster(Emaster.serviceStartMonth), {
                    required: true,
                  })}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (Number(value) < 0) {
                      setValue("master.serviceStartMonth", "0");
                    }
                  }}
                />
                {errorsRoot?.serviceStartMonth?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
              月<span style={{ padding: "0 10px" }}>{" ~ "}</span>
              <div>
                <TextField
                  type="number"
                  className="inputDate"
                  variant="outlined"
                  {...register(nameMaster(Emaster.serviceEndYear), {
                    required: true,
                  })}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (Number(value) < 0) {
                      setValue("master.serviceEndYear", "0");
                    }
                  }}
                />
                {errorsRoot?.serviceEndYear?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
              年
              <div>
                <TextField
                  type="number"
                  className="inputDate"
                  variant="outlined"
                  {...register(nameMaster(Emaster.serviceEndMonth), {
                    required: true,
                  })}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (Number(value) < 0) {
                      setValue("master.serviceEndMonth", "0");
                    }
                  }}
                />
                {errorsRoot?.serviceEndMonth?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
              月
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>報價者姓名
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.quotationProviderName), {
                    required: true,
                  })}
                />
                {errorsRoot?.quotationProviderName?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>報價者電話
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.quotationProviderPhone), {
                    required: true,
                  })}
                />
                {errorsRoot?.quotationProviderPhone?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>
                <span className="star">*</span>報價者e-mail
              </label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.quotationProviderEmail), {
                    required: true,
                  })}
                />
                {errorsRoot?.quotationProviderEmail?.type === "required" && (
                  <p className="error">請填寫這個欄位</p>
                )}
              </div>
            </div>
            <div className="flex">
              <label>備註</label>
              <div>
                <TextField
                  className="input"
                  variant="outlined"
                  {...register(nameMaster(Emaster.remarks))}
                />
              </div>
            </div>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              fontSize: "16px",
            }}
          >
            <Button
              sx={{ width: "120px", marginRight: "10px" }}
              variant="outlined"
              onClick={handleCancel}
            >
              取消
            </Button>

            <Button
              sx={{ width: "120px", marginLeft: "10px", fontSize: "16px" }}
              variant="contained"
              type="submit"
            >
              產生報價單
            </Button>
          </Box>
        </Box>
      </form>
    </Style>
  );
};
export default QuotationForm;
