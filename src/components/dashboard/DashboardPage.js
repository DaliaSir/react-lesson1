import Heading from "../layout/Heading";
import MediaDropdown from "./media/MediaDropdown";

export default function DashboardPage() {
  return (
    <>
      <Heading content="Dashboard" />
      <MediaDropdown />
    </>
  );
}