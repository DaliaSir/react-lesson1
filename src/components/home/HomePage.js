
import Heading from "../layout/Heading";

export default function HomePage() {
  return (
    <>
      <Heading content="Home" />
      <div className="container">Environment: {process.env.NODE_ENV}</div>
    </>
  );
}