import React from "react";
import { Card, Button } from "@rneui/themed";
import { Text } from "react-native";

const ProductCard = () => {
  return (
    <Card>
      <Text>PRODUCT NAME</Text>
      <Text>PRODUCT DESCRIPTION</Text>
      <Button title="ADD TO CART" />
    </Card>
  );
};

export default ProductCard;
