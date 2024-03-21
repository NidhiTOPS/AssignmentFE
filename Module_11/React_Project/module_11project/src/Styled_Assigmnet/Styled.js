import React from "react";
import styled from "styled-components";
import Img from "../Styled_Assigmnet/ProductImg.avif";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 250px;
`;

const ProductImage = styled.img`
  display: block;
  margin: 0 auto 10px;
  max-width: 100%;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  color: #000000;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #000000;
`;

// Dummy product data
const products = [
  {
    id: 1,
    title: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$29.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Product 3",
    price: "$39.99",
    image: "https://via.placeholder.com/150",
  },
];

const Styled = () => {
  return (
    <Container>
      <Header>
        <Title>My Shopping Site</Title>
      </Header>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={Img} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
};

export default Styled;
