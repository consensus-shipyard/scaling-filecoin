import { defineSchema, defineConfig } from "tinacms";
import type { TinaTemplate } from "@tinacms/cli";
import { backgroundSchema } from "./shared/background";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { contentOrderOptions, hAlignOptions, minHeightOptions } from "./shared/options";


const defaultEvent = {
  eventDate: "Aug 2022",
  eventName: "Event Name",
  summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
};

export const eventListBlockSchema: TinaTemplate = {
  name: "eventList",
  label: "Event List",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a rich text component you can add hyperlinks, etc."
              }
            ]
          }
        ]
      },
      style: {
        textAlignment: "text-left",
        minHeight: "min-h-0",
        padding: "pt-20 pr-20 pb-20 pl-20",
        contentWidth: "w-full",
        labelStyles: "text-black font-1 text-sm mb-0",
        headlineStyles: "text-black font-1 text-5xl mb-0",
        subheadStyles: "text-black font-1 text-3xl mb-0",
        textStyles: "text-black font-1 text-md mb-0",
        contentOrder: "labelHeadingsContent",    
      },
      items: [defaultEvent, defaultEvent, defaultEvent],
    },
  },
  fields: [
    backgroundSchema,
    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Text Alignment",
          name: "textAlignment",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: hAlignOptions,
        },
        {
          label: "Minimum Height",
          name: "minHeight",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: minHeightOptions,
        },
        {
          label: "Content Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content Width",
          name: "contentWidth",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "100%", value: "w-full" },
            { label: "75%", value: "w-9/12" },
            { label: "66%", value: "w-8/12" },
            { label: "50%", value: "w-6/12" },
            { label: "33%", value: "w-4/12" },
            { label: "25%", value: "w-3/12" },
          ],
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label Style",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline Style",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead Style",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text Style",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: contentOrderOptions,
        },
      ],
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    buttonsSchema,
    {
      type: "object",
      label: "Events",
      name: "items",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          type: "string",
          label: "Event Date",
          name: "eventDate",
        },
        {
          type: "string",
          label: "Event Name",
          name: "eventName",
        },
        {
          type: "string",
          label: "Summary",
          name: "summary",
        },
      ],
    },
    navigationLabelSchema,
  ],
};
