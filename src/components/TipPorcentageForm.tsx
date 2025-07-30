const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPorcentageFormType = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export default function TipPorcentageForm({
  tip,
  setTip,
}: TipPorcentageFormType) {
  return (
    <div>
      <h3 className="font-black text-2xl">Tips:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div id={`radio-tip-${tipOption.id}`} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tip === tipOption.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
