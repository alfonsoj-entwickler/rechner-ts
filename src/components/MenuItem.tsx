import type { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";
import type { Dispatch } from "react";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      type="button"
      className="flex justify-between p-3 w-full border-2 border-teal-300 rounded-lg bg-transparent transition-colors hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}€</p>
    </button>
  );
}
