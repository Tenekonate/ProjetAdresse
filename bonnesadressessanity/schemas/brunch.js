import { MdFreeBreakfast as icon } from "react-icons/md";
export default {
  name: "brunchPost",
  title: "Brunch Post",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your brunch.",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "schedule",
      title: "Schedule",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Drop or past your image here.",
    },
    {
      title: "Image URL",
      name: "imageUrl",
      type: "url",
    },
  ],
};
