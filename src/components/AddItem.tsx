import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shopping/shoppingSlice";
import uuid from "react-native-uuid";

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name) {
      Alert.alert("Error", "Item name is required");
      return;
    }

    dispatch(
      addItem({
        id: uuid.v4().toString(),
        name,
        quantity,
        purchased: false,
      })
    );

    setName("");
    setQuantity("");
  };

  return (
    <View>
      <TextInput placeholder="Item name" value={name} onChangeText={setName} />
      <TextInput placeholder="Quantity" value={quantity} onChangeText={setQuantity} />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
}
