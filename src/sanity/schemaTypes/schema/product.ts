export default {
  name: "product", // Name of the schema
  type: "document", // Schema type: indicates this is a document type
  title: "Product", // Display title for the schema
  fields: [
    // Array of fields that define the structure of the product document
    {
      name: "name", // Field name used in queries
      type: "string", // Data type of the field
      title: "Product Name", // Display title for the field
    },
    {
      name: "description", // Field for storing product description
      type: "string",
      title: "Description",
    },
    {
      name: "price", // Field for the product's price
      type: "number",
      title: "Product Price",
    },
    {
      name: "discountPercentage", // Field for discount percentage
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "priceWithoutDiscount", // Field for original price before discount
      type: "number",
      title: "Price Without Discount",
      description: "Original price before discount", // Additional description for the field
    },
    {
      name: "rating", // Field for product rating
      type: "number",
      title: "Rating",
      description: "Rating of the product",
    },
    {
      name: "ratingCount", // Field for the number of ratings
      type: "number",
      title: "Rating Count",
      description: "Number of ratings",
    },
    {
      name: "tags", // Field for tags associated with the product
      type: "array",
      title: "Tags",
      of: [{ type: "string" }], // Array of strings
      options: {
        layout: "tags", // Layout style for easy tagging
      },
      description: 'Add tags like "new arrival", "bestseller", etc.', // Hint for the user
    },
    {
      name: "sizes", // Field for available sizes of the product
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }], // Array of strings
      options: {
        layout: "tags", // Layout style for easy selection of sizes
      },
      description: "Add sizes like S, M, L, XL, XXL", // Hint for the user
    },
    {
      name: "image", // Field for product image
      type: "image",
      title: "Product Image",
      options: {
        hotspot: true, // Enables cropping and focal point selection in the image
      },
    },
  ],
};
