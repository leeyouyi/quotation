"use client";

import { Box, Card, CardContent, Icon, TextField, styled } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Iproduct } from "@/app/page";
import { ChangeEvent, useEffect, useState } from "react";
const Style = styled(Box)(() => ({
  flex: 1,
  marginLeft: "10px",
  background: "#fff",
  position: "relative",
  ".details": {
    width: "100%",

    ".inputWrap": {
      ">span": {
        padding: "5px",
        fontSize: "18px",
      },
    },

    input: {
      padding: "5px",
      width: "50px",
      textAlign: "right",
    },
    "input:focus": {
      outline: "none",
    },
  },
}));

interface ProductDetailsProps {
  id: number;
  detail: Iproduct;
  showDetail: boolean;
  onAdd: () => void;
  onTotal: (id: number, totalNum: number) => void;
}
const ProductDetails = (props: ProductDetailsProps) => {
  const { id, detail, showDetail, onAdd, onTotal } = props;
  const [num, setNum] = useState(0);
  const [momth, setMomth] = useState(0);
  const [total, setTotal] = useState(0);

  const handleNumChanhe = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    setNum(value);
  };

  const handleMonthChanhe = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    setMomth(value);
  };

  useEffect(() => {
    setNum(0);
    setMomth(0);
  }, [detail]);

  useEffect(() => {
    const totalNum = num * momth * detail.unitPrice;
    if (totalNum !== 0) {
      setTotal(totalNum);
      onTotal(id, totalNum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, momth, detail.unitPrice, id]);

  return (
    showDetail && (
      <Style>
        <Card variant="outlined" sx={{ minWidth: 600, border: 0 }}>
          <CardContent className="details">
            <form>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <div style={{ width: "30%" }}>
                  <h3>規格說明 : {detail.productName} </h3>
                </div>
                <div
                  className="inputWrap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "60%",
                  }}
                >
                  <TextField
                    className="input"
                    type="number"
                    variant="outlined"
                    value={num}
                    onChange={handleNumChanhe}
                  />
                  <span>{detail.unit}</span>
                  <span style={{ paddingLeft: "30px" }}>單價:</span>
                  <span
                    style={{
                      minWidth: "100px",
                      paddingLeft: "0px",
                      paddingRight: "15px",
                    }}
                  >
                    {detail.unitPrice}
                  </span>
                  <TextField
                    className="input"
                    type="number"
                    variant="outlined"
                    value={momth}
                    onChange={handleMonthChanhe}
                  />
                  <span>個月</span>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3>
                      總價: <span>{total}</span>
                    </h3>
                  </div>
                </div>
              </Box>
              <div style={{ padding: "10px 0" }}>{detail.remarks}</div>
            </form>
          </CardContent>
        </Card>
        <Box
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "10px",
            cursor: "pointer",
          }}
          onClick={onAdd}
        >
          <Icon sx={{ fontSize: "2rem" }} color="primary">
            <AddCircleOutlineIcon fontSize="large" />
          </Icon>
        </Box>
      </Style>
    )
  );
};

export default ProductDetails;
