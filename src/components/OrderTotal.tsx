import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Total + Tips:</h2>
        <p>
          Subtotal to pay:
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Tips:
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total o pay:
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        type="button"
        className="w-full p-3 uppercase text-white bg-black font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        save the order
      </button>
    </>
  );
}
