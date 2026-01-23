import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import { addItem } from "../features/shopping/shoppingSlice";
import { colors } from "../theme/colors";

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name.trim()) {
      Alert.alert("Missing item", "Please enter an item name.");
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
    <View style={styles.container}>
      <TextInput
        placeholder="Item name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity (optional)"
        value={quantity}
        onChangeText={setQuantity}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
