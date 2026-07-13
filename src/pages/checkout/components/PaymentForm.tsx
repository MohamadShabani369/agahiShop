import { useState } from "react";
import Button from "../../../components/button/Button";
import { CreditCard, Banknote, Wallet } from "lucide-react";
import CreditCardPreview from "./CreditCard";

type Props = {
  next: () => void;
  back: () => void;
};

function PaymentForm({ next, back }: Props) {
  const [payment, setPayment] = useState("card");

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [isFlipped, setIsFlipped] = useState(false);
  const methods = [
    {
      id: "card",
      title: "Credit Card",
      icon: <CreditCard size={24} />,
    },
    {
      id: "cash",
      title: "Cash on Delivery",
      icon: <Banknote size={24} />,
    },
    {
      id: "paypal",
      title: "PayPal",
      icon: <Wallet size={24} />,
    },
  ];

  return (
    <>
      <h2 className="mb-8 text-2xl font-bold">Payment Method</h2>

      <div className="space-y-4">
        {methods.map((item) => (
          <div
            key={item.id}
            onClick={() => setPayment(item.id)}
            className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
              payment === item.id
                ? "border-blue-600 bg-blue-50 dark:border-sky-500 dark:bg-sky-950"
                : "border-slate-300 hover:border-blue-400 dark:border-slate-700"
            }`}
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {payment === "card" && (
        <>
          <CreditCardPreview
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            expiry={expiry}
            cvv={cvv}
            isFlipped={isFlipped}
          />

          <div className="space-y-5">
            <div>
              <label className="mb-2 block font-medium">Card Number</label>

              <input
                value={cardNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");

                  value = value.substring(0, 16);

                  value = value.replace(/(.{4})/g, "$1 ").trim();

                  setCardNumber(value);
                }}
                placeholder="1234 5678 9012 3456"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Card Holder</label>

              <input
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block font-medium">Expiry</label>

                <input
                  value={expiry}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");

                    if (value.length > 2) {
                      value = value.slice(0, 2) + "/" + value.slice(2, 4);
                    }

                    setExpiry(value);
                  }}
                  placeholder="MM/YY"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">CVV</label>

                <input
                  value={cvv}
                  onFocus={() => setIsFlipped(true)}
                  onBlur={() => setIsFlipped(false)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    setCvv(value.substring(0, 3));
                  }}
                  placeholder="123"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {payment === "paypal" && (
        <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-blue-700 dark:bg-slate-800 dark:text-blue-300">
          You will be redirected to PayPal after placing your order.
        </div>
      )}

      {payment === "cash" && (
        <div className="mt-8 rounded-2xl bg-green-50 p-5 text-green-700 dark:bg-slate-800 dark:text-green-400">
          Pay when your order is delivered to your address.
        </div>
      )}

      <div className="mt-10 flex justify-between">
        <Button variant="secondary" onClick={back}>
          Back
        </Button>

        <Button onClick={next}>Continue</Button>
      </div>
    </>
  );
}

export default PaymentForm;
