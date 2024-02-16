import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <div>
        <h1>Welp ! Seems you are lost.</h1>
        <Link to={"/"}>Go Back To Home</Link>
      </div>
    </main>
  );
}
