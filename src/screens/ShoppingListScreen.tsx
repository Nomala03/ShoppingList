import React, { useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setItems } from "../features/shopping/shoppingSlice";
import { loadItems, saveItems } from "../utils/storage";
import AddItem from "../components/AddItem";
import ShoppingItem from "../components/ShoppingItem";
import { colors } from "../theme/colors";

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
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Shopping List</Text>

      <AddItem />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ShoppingItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Your shopping list is empty
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.text,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: colors.muted,
  },
});
