type Props = {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
  isFlipped: boolean;
};

function CreditCard({ cardNumber, cardHolder, expiry, cvv, isFlipped }: Props) {
  return (
    <div className="my-8 h-56 w-full perspective:1000px">
      <div
        className={`relative h-full w-full transition-transform duration-700 transform-style:preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}

        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-sky-600 via-blue-700 to-indigo-900 p-6 text-white shadow-2xl backface-hidden">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold tracking-wider">Awareness Bank</h3>

            <span className="text-2xl">💳</span>
          </div>

          <div className="mt-10 text-2xl font-semibold tracking-[4px]">
            {cardNumber || "#### #### #### ####"}
          </div>

          <div className="mt-10 flex justify-between">
            <div>
              <p className="text-xs opacity-70">CARD HOLDER</p>

              <p className="mt-1 font-semibold uppercase">
                {cardHolder || "YOUR NAME"}
              </p>
            </div>

            <div>
              <p className="text-xs opacity-70">EXPIRES</p>

              <p className="mt-1 font-semibold">{expiry || "MM/YY"}</p>
            </div>
          </div>
        </div>

        {/* Back */}

        <div className="absolute inset-0 rotate-y-180 rounded-3xl bg-linear-to-br from-slate-800 to-slate-950 text-white shadow-2xl backface-hidden">
          <div className="mt-6 h-10 bg-black"></div>

          <div className="mt-8 px-6">
            <div className="rounded bg-white p-2 text-right text-black">
              {cvv || "***"}
            </div>

            <p className="mt-10 text-center text-sm opacity-70">
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
