import { useState } from "react";
import Button from "../../../components/button/Button";
import toast from "react-hot-toast";

type Props = {
  next: () => void;
};

function ShippingForm({ next }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    const isValid = Object.values(form).every((value) => value.trim() !== "");

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    next();
  };

  return (
    <>
      <h2 className="mb-8 text-2xl font-bold">Shipping Information</h2>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
        />

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
        />

        <input
          name="postalCode"
          placeholder="Postal Code"
          value={form.postalCode}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 md:col-span-2"
        />

        <textarea
          name="address"
          placeholder="Address"
          rows={4}
          value={form.address}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 md:col-span-2"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </>
  );
}

export default ShippingForm;
