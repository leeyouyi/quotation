"use client";

import { Box, Card, CardContent, Icon, TextField, styled } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ChangeEvent, useEffect, useState } from "react";
import { Iproduct } from "@/app/init";
import { ProductDetailsProps } from "./init";

const Style = styled(Box)(() => ({
  flex: 1,
  marginLeft: "10px",
  background: "#fff",
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
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
      width: "40px",
      textAlign: "right",
    },
  },
}));

const ProductDetails = (props: ProductDetailsProps) => {
  const { listId, detail, showDetail, onAdd, onTotal } = props;
  const [num, setNum] = useState(0);
  const [momth, setMomth] = useState(0);
  const [total, setTotal] = useState(0);

  const handleNumChanhe = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    if (value < 0) {
      return false;
    }
    setNum(value);
  };

  const handleMonthChanhe = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(event.target.value);
    if (value < 0) {
      return false;
    }
    setMomth(value);
  };

  useEffect(() => {
    setNum(0);
    setMomth(0);
  }, [detail]);

  useEffect(() => {
    const totalNum = num * momth * detail.unitPrice;

    setTotal(totalNum);
    const productDetails = {
      listId: listId,
      productId: detail.id,
      quantity: num,
      periodInMonth: momth,
    };
    onTotal(listId, totalNum, productDetails);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, momth, detail.unitPrice, listId, detail.productName]);

  return (
    showDetail && (
      <Style>
        <Card variant="outlined" sx={{ minWidth: 600, border: 0 }}>
          <CardContent className="details">
            <form>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <div style={{ width: "40%" }}>
                  <h3>規格說明 : {detail.productName} </h3>
                </div>
                <div
                  className="inputWrap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "60%",
                    paddingRight: "10px",
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
                  <span style={{ paddingLeft: "20px" }}>單價:</span>
                  <span
                    style={{
                      minWidth: "70px",
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
              <div style={{ padding: "20px 5px 10px" }}>{detail.remarks}</div>
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
