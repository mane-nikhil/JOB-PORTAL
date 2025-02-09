/* eslint-disable @typescript-eslint/no-explicit-any */
const CertiCard = (props: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-7" src="/Companies/Dell.jpg" alt="" />
        </div>
        <div>
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-mine-shaft-300 text-left">
            {props.issuer}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
        <div className="text-sm text-mine-shaft-300">
          Id:{props.certificateId}
        </div>
      </div>
    </div>
  );
};
export default CertiCard;
