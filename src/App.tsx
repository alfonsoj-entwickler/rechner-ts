import MenuItem from "./components/MenuItem";
import OrdenContents from "./components/OrdenContents";
import OrderTotal from "./components/OrderTotal";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="py-10 bg-indigo-700">
        <h1 className="text-center text-5xl font-black text-white">
          Kneipe-TS
        </h1>
      </header>
      <main className="grid md:grid-cols-2 max-w-7xl mx-auto py-20">
        <div className="p-5">
          <h2 className="text-4xl font-black">The menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-5 space-y-10 border border-dashed border-slate-300 rounded-lg">
          {order.length > 0 ? (
            <>
              <OrdenContents order={order} removeItem={removeItem} />
              <TipPorcentageForm tip={tip} setTip={setTip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">The order is empty</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
