import { Button, Drawer, Flex, Paper, Text } from "@mantine/core";
import { ItemCard } from "./ItemCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartDrawer({ cartOpened, cartClose }) {
  const { cart } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(0);

  function sumOfAllItems() {
    if (cart?.length > 0) {
      let sum = 0;
      cart?.forEach((item) => {
        sum = sum + item.product.price;
      });
      setTotalSum(sum);
    } else {
      setTotalSum(0);
    }
  }

  useEffect(() => {
    sumOfAllItems();
  }, [cart]);

  return (
    <>
      <Drawer
        size={"lg"}
        position="right"
        opened={cartOpened}
        onClose={cartClose}
        title={<Text size={"xl"}>Cart Items</Text>}
      >
        <Flex direction={"column"}>
          {cart?.map((item, index) => {
            return (
              <ItemCard
                image={item?.product.imageURL}
                title={item?.product.title}
                price={item?.product.price}
                key={index}
                id={index}
              />
            );
          })}

          <Paper withBorder py={5}>
            <Flex justify={"space-between"} align={"center"} px={20}>
              <Text size={"xl"}>
                Total: <b>${totalSum}</b>
              </Text>
              <Button>Checkout</Button>
            </Flex>
          </Paper>
        </Flex>
      </Drawer>
    </>
  );
}
