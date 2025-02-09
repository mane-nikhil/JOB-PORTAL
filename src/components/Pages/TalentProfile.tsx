import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import Profile from "../TalentProfile/Profile";
import { profile } from "../../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="text-left p-2">
        <Link className="inline-block" to={"/find-talent"}>
          <Button
            leftSection={<ArrowLeft size={20} />}
            color="brightSun.4"
            variant="light"
          >
            Back
          </Button>
        </Link>
      </div>
      <div className="flex gap-5">
        <Profile {...profile} />
        <RecommendTalent />
      </div>
    </div>
  );
};
export default TalentProfilePage;
