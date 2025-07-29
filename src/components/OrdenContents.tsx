import type { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrdenContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consume</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={`order-list-${item.id}`}
            className="flex justify-between items-center py-5 border-t border-t-gray-400 last-of-type:border-b last-of-type:border-b-gray-400"
          >
            <div className="">
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <span className="font-black">
                Quantity: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
            <button
              type="button"
              className="flex justify-center items-center size-8 rounded-full font-black text-white bg-red-600"
              onClick={() => removeItem(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
