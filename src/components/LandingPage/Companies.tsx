import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold text-center text-mine-shaft-100">
        Trusted By <span className="text-bright-sun-400">1000+</span> companies
      </div>
      <Marquee className="mt-10" pauseOnHover>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-8 px-2 py-1 hover:bg-bright-sun-400 rounded-xl cursor-pointer"
          >
            <img
              className="h-14"
              src={`/Companies/${company}.jpg`}
              alt={company}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default Companies;
