import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setItems } from "../features/shopping/shoppingSlice";
import { loadItems, saveItems } from "../utils/storage";
import AddItem from "../components/AddItem";
import ShoppingItem from "../components/ShoppingItem";

export default function ShoppingListScreen() {
  const items = useSelector((state: RootState) => state.shopping.items);
  const dispatch = useDispatch();

  useEffect(() => {
    loadItems().then(data => dispatch(setItems(data)));
  }, []);

  useEffect(() => {
    saveItems(items);
  }, [items]);

  return (
    <View>
      <AddItem />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ShoppingItem item={item} />}
      />
    </View>
  );
}
