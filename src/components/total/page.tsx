"use client";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import { useMemo } from "react";

const Style = styled(Box)(() => ({
  background: "#fff",
  margin: "10px 0",
  ".listItem": {
    span: {
      width: "150px",
    },
  },
  ".MuiListItemText-root": {
    span: {
      width: "120px",
      borderBottom: " 1px solid #aaa",
      textAlign: "right",
      padding: " 0 10px",
    },
  },
}));

interface TotalProps {
  productTotal: number;
}
const Total = (props: TotalProps) => {
  const { productTotal } = props;
  const tax = useMemo(() => {
    const num = productTotal !== 0 ? productTotal * 0.05 : 0;
    return num;
  }, [productTotal]);

  return (
    <Style>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "95%" }}>
        <List component="nav" aria-label="mailbox folders">
          <ListItem className="listItem">
            <span style={{ padding: "0 5px" }}>未稅總價合計 :</span>
            <ListItemText primary={productTotal || 0} />
          </ListItem>

          <ListItem className="listItem">
            <span style={{ padding: "0 5px" }}>營業稅(5%) : </span>
            <ListItemText primary={tax} />
          </ListItem>
          <ListItem className="listItem">
            <span style={{ padding: "0 5px" }}>含稅總價合計 : </span>
            <ListItemText primary={productTotal + tax} />
          </ListItem>
        </List>
      </Box>
    </Style>
  );
};

export default Total;
