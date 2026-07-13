import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Success() {

  const orderId = Math.floor(
    100000 + Math.random() * 900000
  );

  return (
    <Container>

      <div className="flex min-h-[70vh] items-center justify-center">

        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

          <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-green-500">

            <CheckCircle2
              size={60}
              className="text-white"
            />

          </div>

          <h1 className="mt-8 text-3xl font-bold">

            Order Placed Successfully

          </h1>

          <p className="mt-4 text-slate-500 dark:text-slate-400">

            Thank you for shopping with us.

          </p>

          <div className="mt-8 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

            <p className="font-semibold">

              Order #

              <span className="ml-2 text-blue-600">

                {orderId}

              </span>

            </p>

          </div>

          <Link to="/">

            <Button
              className="mt-8 w-full"
              variant="success"
            >

              Continue Shopping

            </Button>

          </Link>

        </div>

      </div>

    </Container>
  );
}

export default Success;