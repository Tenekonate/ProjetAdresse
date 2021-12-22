import { GrRestaurant as icon } from "react-icons/gr";
export default {
  name: "restaurantPost",
  title: "Restaurant Post",
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
      name: "menu",
      title: "Menu",
      type: "url",
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
      type: "array",
      of: [{ type: "image" }],
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
