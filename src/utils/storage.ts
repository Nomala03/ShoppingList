import AsyncStorage from "@react-native-async-storage/async-storage";
import { ShoppingItem } from "../features/shopping/types";

const STORAGE_KEY = "SHOPPING_LIST";

export const saveItems = async (items: ShoppingItem[]) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const loadItems = async (): Promise<ShoppingItem[]> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
