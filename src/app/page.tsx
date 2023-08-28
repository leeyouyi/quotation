"use client";

import Product from "@/components/product/page";
import ProductDetails from "@/components/productDetails/page";
import { Box, Button, Container } from "@mui/material";
import Total from "@/components/total/page";
import { useEffect, useState } from "react";
import QuotationForm from "@/components/quotationform/page";
import { Iproduct, IproductList } from "./init";
import { IproductDetails } from "@/components/productDetails/init";

const Home = () => {
  const initProduct = {
    id: 0,
    productName: "",
    unitPrice: 0,
    unit: "",
    remarks: "",
  };

  const [productList, setProductList] = useState<IproductList[]>([
    {
      listId: 1,
      showDetail: false,
      detail: initProduct,
    },
  ]);
  const [totalList, setTotalList] = useState([
    {
      listId: 1,
      total: 0,
    },
  ]);
  const [productTotal, setProductTotal] = useState(0);
  const [productDetailsList, seyProductDetailsList] = useState<
    IproductDetails[]
  >([]);
  const [showNext, setShowNext] = useState(false);

  const getProductsAll = async (url: string) => {
    const response = await fetch(url);
    const JSON = await response.json();
  };

  // useEffect(() => {
  //   getProductsAll("");
  // }, []);

  const handleClick = () => {
    setShowNext(true);
  };

  const onShowNext = () => {
    setShowNext(false);
  };

  const handleAdd = () => {
    const length = productList.length;
    const newId = length + 1;
    const arr = [{ listId: newId, showDetail: false, detail: initProduct }];
    const nweList = [...productList, ...arr];
    setProductList(nweList);
    const arr2 = [{ listId: newId, total: 0 }];
    const nweTotalList = [...totalList, ...arr2];
    setTotalList(nweTotalList);
  };

  const handleProduct = (id: number, data: Iproduct) => {
    const mapList = productList.map((item) => {
      if (id === item.listId) {
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

  const handleTotal = (
    listId: number,
    totalNum: number,
    productDetails: IproductDetails
  ) => {
    const mapList = totalList.map((item) => {
      if (listId === item.listId) {
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

    const listAry = [...productDetailsList];
    const find = listAry.find((item) => item.listId === listId);
    const index = listAry.findIndex((item) => item.listId === listId);
    if (!find && totalNum !== 0) {
      listAry.push(productDetails);
    } else if (!find && totalNum === 0) {
      return;
    } else if (find && totalNum === 0) {
      listAry.splice(index, 1);
    } else {
      listAry.splice(index, 1, productDetails);
    }

    seyProductDetailsList(listAry);
  };

  return (
    <Container maxWidth={false} sx={{ padding: "15px" }}>
      <h1 style={{ textAlign: "center" }}>報價單系統</h1>
      {!showNext && (
        <>
          {productList.map((item) => (
            <Box sx={{ display: "flex", marginTop: "10px" }} key={item.listId}>
              <Product onProduct={handleProduct} id={item.listId} />
              <ProductDetails
                onAdd={handleAdd}
                listId={item.listId}
                showDetail={item.showDetail}
                detail={item.detail}
                onTotal={handleTotal}
              />
            </Box>
          ))}
          <Total productTotal={productTotal} />
          {productTotal !== 0 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Button
                  sx={{ width: "100px", fontSize: "16px" }}
                  variant="contained"
                  onClick={handleClick}
                >
                  下一步
                </Button>
              </Box>
            </>
          )}
        </>
      )}

      {showNext && (
        <QuotationForm
          onShowNext={onShowNext}
          productDetailsList={productDetailsList}
        />
      )}
    </Container>
  );
};

export default Home;
