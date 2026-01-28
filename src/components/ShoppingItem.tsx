import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem, togglePurchased } from "../features/shopping/shoppingSlice";
import { ShoppingItem } from "../features/shopping/types";
import { colors } from "../theme/colors";

export default function ShoppingItemComponent({
  item,
}: {
  item: ShoppingItem;
}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text 
          style={[
            styles.name,
            item.purchased && styles.purchasedText,
          ]}
        >
          {item.name}
        </Text>

        {item.quantity ? (
          <Text style={styles.quantity}>{item.quantity}</Text>
        ) : null}
      </View>

      <View style={styles.actions}>
       <Switch
        value={item.purchased}
        onValueChange={(_value: boolean) => {
          dispatch(togglePurchased(item.id));
          
        }}
        trackColor={{ true: colors.success }}
      />
        <TouchableOpacity
          onPress={() => dispatch(deleteItem(item.id))}
        >
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    elevation: 1,
  },
  left: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  purchasedText: {
    textDecorationLine: "line-through",
    color: colors.muted,
  },
  quantity: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
  },
  actions: {
    alignItems: "center",
    gap: 6,
  },
  delete: {
    color: colors.danger,
    fontSize: 13,
  },
});
