"use client";

import Product from "@/components/product/page";
import ProductDetails from "@/components/productDetails/page";
import { Box, Button, Container } from "@mui/material";
import Total from "@/components/total/page";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

interface IproductList {
  id: number;
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

const Home = () => {
  const router = useRouter();
  const initProduct = {
    id: 0,
    productName: "",
    unitPrice: 0,
    unit: "",
    remarks: "",
  };

  const [productList, setProductList] = useState<IproductList[]>([
    {
      id: 1,
      showDetail: false,
      detail: initProduct,
    },
  ]);
  const [totalList, setTotalList] = useState([
    {
      id: 1,
      total: 0,
    },
  ]);
  const [productTotal, setProductTotal] = useState(0);

  const handleClick = () => {
    router.push("/quotationform");
  };

  const handleAdd = () => {
    const length = productList.length;
    const newId = length + 1;
    const arr = [{ id: newId, showDetail: false, detail: initProduct }];
    const nweList = [...productList, ...arr];
    setProductList(nweList);
    const arr2 = [{ id: newId, total: 0 }];
    const nweTotalList = [...totalList, ...arr2];
    setTotalList(nweTotalList);
  };

  const handleProduct = (id: number, data: Iproduct) => {
    const mapList = productList.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          showDetail: true,
          detail: data,
        };
      } else {
        return { ...item };
      }
    });
    setProductList(mapList);
  };

  const handleTotal = (id: number, totalNum: number) => {
    const mapList = totalList.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          total: totalNum,
        };
      } else {
        return { ...item };
      }
    });

    setTotalList(mapList);
    const totalData = mapList.map((item) => item.total);
    const value = totalData.reduce((a, b) => a + b);
    setProductTotal(value);
  };

  return (
    <Container maxWidth={false} sx={{ padding: "15px" }}>
      {productList.map((item) => (
        <Box sx={{ display: "flex", marginTop: "10px" }} key={item.id}>
          <Product onProduct={handleProduct} id={item.id} />
          <ProductDetails
            onAdd={handleAdd}
            id={item.id}
            showDetail={item.showDetail}
            detail={item.detail}
            onTotal={handleTotal}
          />
        </Box>
      ))}

      <Total productTotal={productTotal} />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <Button
          sx={{ width: "100px", fontSize: "16px" }}
          variant="contained"
          onClick={handleClick}
        >
          下一步
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
