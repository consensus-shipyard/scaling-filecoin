import { Events } from "../events";

const Event = ({ data, index, parentField = ""  }) => {

  return (
    <li className="h-event flex text-left" data-tinafield={`${parentField}.${index}`}>
      {data.eventDate && (
        <time className="pt-1 pr-24 sm:pr-12 uppercase text-xs whitespace-nowrap relative border-r border-gray w-1/4 sm:w-1/3" data-tinafield={`${parentField}.${index}.eventDate`}>
          {data.eventDate}
          <span className="absolute -top-3.5 -right-7 sm:-right-5.5">
            <svg width="58" height="58" viewBox="0 0 58 58" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <circle cx="29" cy="29" r="27.5" stroke="#006FEC" stroke-width="2"/>
              <circle cx="29" cy="29" r="20" fill="#0090FF"/>
            </svg>
          </span>
        </time>
      )}
      <div className="pl-24 sm:pl-12 text-xl w-3/4 sm:w-2/3">
        {data.eventName && (
          <h3 className="p-name font-bold mb-5" data-tinafield={`${parentField}.${index}.eventName`}>{data.eventName}</h3>
        )}
        {data.summary && (
          <p className="p-summary sm:pb-12 pb-20" data-tinafield={`${parentField}.${index}.summary`}>{data.summary}</p>
        )}
      </div>
    </li>
  );
};

export const EventList = ({ data, parentField = "" }) => {
  return (
    <Events data={data} parentField={parentField} children={(
      data.items &&
        data.items.map(function (block, index) {
          return <Event key={index} index={index} data={block} parentField={`${parentField}.items`} />;
        })
    )}/>
  );
};
