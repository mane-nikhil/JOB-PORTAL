import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="text-left p-2">
        <Button
          my="md"
          onClick={() => navigate(-1)}
          leftSection={<ArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </div>
      <div className="flex gap-5 justify-between">
        <Company />
        <SimilarCompanies />
      </div>
    </div>
  );
};
export default CompanyPage;
