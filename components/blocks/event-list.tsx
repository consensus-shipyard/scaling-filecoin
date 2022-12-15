import { Events } from "../events";

const Event = ({ data, index, parentField = ""  }) => {

  let dotSVG = <svg width="58" height="58" viewBox="0 0 58 58" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <circle cx="29" cy="29" r="27.5" stroke="#006FEC" stroke-width="2"/>
                <circle cx="29" cy="29" r="20" fill="#0090FF"/>
              </svg>
  if (data.is_done){
    dotSVG = <svg width="58" height="58" viewBox="0 0 58 58" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <circle cx="29" cy="29" r="27.5" stroke="#006FEC" stroke-width="2"/>
                <svg width="40" height="40" x="9" y="9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" fill="#0090FF"/></svg>
              </svg>
  } else {

  }

  return (
    <li className="h-event flex text-left" data-tinafield={`${parentField}.${index}`}>
      {data.eventDate && (
        <time className="pt-1 pr-24 sm:pr-12 uppercase text-xs whitespace-nowrap relative border-r border-gray w-1/4 sm:w-1/3" data-tinafield={`${parentField}.${index}.eventDate`}>
          {data.eventDate}
          <span className="absolute -top-3.5 -right-7 sm:-right-5.5">
            {dotSVG}
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
