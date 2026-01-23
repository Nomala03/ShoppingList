import React from "react";
import { View, Text, Button, Switch } from "react-native";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  togglePurchased,
} from "../features/shopping/shoppingSlice";
import { ShoppingItem } from "../features/shopping/types";

export default function ShoppingItemComponent({
  item,
}: {
  item: ShoppingItem;
}) {
  const dispatch = useDispatch();

  return (
    <View>
      <Text
        style={{
          textDecorationLine: item.purchased ? "line-through" : "none",
        }}>
        {item.name} ({item.quantity})
      </Text>
      <Switch
        value={item.purchased}
        onValueChange={(_value: boolean) => {
          dispatch(togglePurchased(item.id));
        }}
      />

      <Button title="Delete" onPress={() => dispatch(deleteItem(item.id))} />
    </View>
  );
}
