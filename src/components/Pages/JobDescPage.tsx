import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="text-left p-2">
        <Link className="inline-block" to={"/find-jobs"}>
          <Button
            leftSection={<ArrowLeft size={20} />}
            color="brightSun.4"
            variant="light"
          >
            Back
          </Button>
        </Link>
      </div>
      <div className="flex gap-5 justify-around">
        <JobDesc />
        <RecommendedJobs />
      </div>
    </div>
  );
};
export default JobDescPage;
