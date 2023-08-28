"use client";
import {
  Select,
  Card,
  MenuItem,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
  SelectChangeEvent,
  TextField,
  styled,
} from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";
import { listItmes, menuItems } from "./consts";
import { ProductProps } from "./init";
import { Iproduct } from "@/app/init";

const Style = styled(Box)(() => ({
  ".textInput": {
    label: {
      lineHeight: "1rem",
    },
    ".MuiInputBase-input": {
      lineHeight: "1rem",
      padding: "5px",
      height: "35px",
      width: "190px",
    },
  },
  ".listItem": {
    span: {
      cursor: "pointer",
      "&:hover": {
        color: "#428bca",
        textDecoration: "underline",
      },
    },
  },
}));

const Product = (props: ProductProps) => {
  const { id, onProduct } = props;
  const [selectValue, setSelectValue] = useState(0);
  const [listData, setlistData] = useState(listItmes);

  const productName = useMemo(() => {
    return menuItems.find((item) => item.value === selectValue)?.label;
  }, [selectValue]);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setSelectValue(event.target.value as number);
  };

  const handleClick = (data: Iproduct) => () => {
    onProduct(id, data);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const data = listItmes.filter((item) => item.productName.includes(value));
    setlistData(data);
  };

  return (
    <Style>
      <Card
        variant="outlined"
        sx={{ minWidth: 550, borderRadius: "10px", overflow: "hidden" }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "28px" }}>{productName || "商品"} </h1>
            <Select
              sx={{ height: "40px", minWidth: "200px" }}
              value={selectValue}
              onChange={handleChange}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </CardContent>
        {selectValue !== 0 && (
          <>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TextField
                  className="textInput"
                  label="關鍵字搜尋"
                  variant="outlined"
                  onChange={handleInputChange}
                />
              </Box>
            </CardContent>
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                {listData.map((item) => (
                  <ListItem className="listItem" divider key={item.value}>
                    <ListItemText
                      primary={item.productName}
                      onClick={handleClick(item)}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </>
        )}
      </Card>
    </Style>
  );
};

export default Product;
