import { Provider } from "react-redux";
import { store } from "./src/app/store";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingListScreen />
    </Provider>
  );
}
