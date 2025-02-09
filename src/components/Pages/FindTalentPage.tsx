import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talent";

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Talents />
    </div>
  );
};
export default FindTalentPage;
