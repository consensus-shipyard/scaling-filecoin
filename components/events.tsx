import { Section } from "./section";
import { Content } from "./content";


export const Events = ({ data, children, parentField }) => {
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`max-w-desktop-full mx-auto ${data.style?.padding} ${data.style?.textAlignment} ${data.style?.minHeight}`}>
        <Content
          label = {data.label}
          headline = {data.headline}
          subhead = {data.subhead}
          body = {data.body}
          buttons = {data.buttons}
          labelStyles = {data.style?.labelStyles}
          headlineStyles = {data.style?.headlineStyles}
          subheadStyles = {data.style?.subheadStyles}
          textStyles = {data.style?.textStyles}
          alignment = {data.style?.alignment}
          order = {data.style?.contentOrder}
          width = {data.style?.contentWidth}
          parentField={parentField}
        />
        <ul className="events-list max-w-2/3 m-auto md:max-w-none">
        {children}
        </ul>
        <style>{`
          .h-event:last-child time {
            border: none !important;
          }
        `}</style>
      </div>
    </Section>
  );
};
