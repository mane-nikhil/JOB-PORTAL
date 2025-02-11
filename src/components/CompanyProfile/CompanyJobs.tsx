import { jobList } from "../../Data/Jobsdata";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-1 justify-between p-0">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
export default CompanyJobs;
