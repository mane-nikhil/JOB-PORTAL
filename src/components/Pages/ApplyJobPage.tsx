import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] text-left p-2">
      <Link className="inline-block" to={"/apply-job"}>
        <Button
          leftSection={<ArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <ApplyJobComp />
    </div>
  );
};
export default ApplyJobPage;
