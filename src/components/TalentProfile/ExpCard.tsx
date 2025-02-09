interface ExpProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}
const ExpCard: React.FC<ExpProps> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src="/Companies/Dell.jpg" alt="" />
          </div>
          <div className="text-left">
            <div className="font-semibold">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022;{props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          j{props.startDate} - {props.endDate}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
    </div>
  );
};
export default ExpCard;
