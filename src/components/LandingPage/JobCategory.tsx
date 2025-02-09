import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../Data/Data";
import { ArrowRight, ArrowLeft } from "tabler-icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold text-center text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job </span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center">
        Explore diverse job opportunities tailored to your skills.Start your
        career journey today!
      </div>
      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        nextControlIcon={<ArrowRight className="h-8 w-8" />}
        previousControlIcon={<ArrowLeft className="h-8 w-8" />}
        className="[&_button]:!bg-bright-sun-400 [&_button]:hover:opacity-75 [&_button]:opacity-0"
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img className="h-8 w-8" src="" alt={category} />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                Digital Marketing
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="text-bright-sun-300 text-lg">
                1k+ new job posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
export default JobCategory;
