import { useState } from "react";
import Container from "../../components/container/Container";
import ShippingForm from "./components/ShippingForm";
import PaymentForm from "./components/PaymentForm";
import ReviewOrder from "./components/ReviewOrder";
import Stepper from "./components/Stepper";
 
function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <div className="mx-auto mt-10 max-w-4xl">
        <Stepper step={step} />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-900">
          {step === 1 && (
            <ShippingForm next={() => setStep(2)} />
          )}

          {step === 2 && (
            <PaymentForm
              next={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <ReviewOrder
              back={() => setStep(2)}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Checkout;