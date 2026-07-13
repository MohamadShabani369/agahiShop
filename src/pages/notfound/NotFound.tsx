import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">

        <TriangleAlert
          size={90}
          className="text-red-500"
        />

        <h1 className="mt-6 text-6xl font-black">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-md text-slate-500 dark:text-slate-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <Button className="mt-8">
            Back to Home
          </Button>
        </Link>

      </div>
    </Container>
  );
}

export default NotFound;