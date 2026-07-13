type Props = {
  step: number;
};

const steps = ["Shipping", "Payment", "Review"];

function Stepper({ step }: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((item, index) => {
        const current = index + 1;
        const active = current <= step;

        return (
          <div
            key={item}
            className="relative flex flex-1 flex-col items-center"
          >
            <div
              className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold transition-all duration-300 ${
                active
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-400 dark:border-slate-600 dark:bg-slate-900"
              }`}
            >
              {current}
            </div>

            <span
              className={`mt-3 text-sm font-medium ${
                active
                  ? "text-blue-600 dark:text-sky-400"
                  : "text-slate-400"
              }`}
            >
              {item}
            </span>

            {index < steps.length - 1 && (
              <div
                className={`absolute top-6 left-1/2 h-1 w-full ${
                  current < step
                    ? "bg-blue-600"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;