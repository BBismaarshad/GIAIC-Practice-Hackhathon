// Importing the custom fetch utility from Sanity
import { sanityFetch } from "../sanity/lib/fetch"
// Importing the query to fetch all products
import { allProducts } from "../sanity/lib/queries";
import Image from "next/image"; // Importing the Next.js Image component for optimized images

// Defining the structure of a Product object
type Product = {
  _id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Description of the product
  price: number; // Price of the product
  imageUrl: string; // URL of the product's image
};

// The main Home component which fetches and displays the products
export default async function Home() {
  // Fetching the products using the sanityFetch utility and the allProducts query
  const products: Product[] = await sanityFetch({ query: allProducts });

  return (
    <div className="p-8 bg-gray-50">
      {" "}
      {/* Container for the entire page content */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {" "}
        {/* Page title */}
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {/* Responsive grid for product cards */}
        {products.map((product) => (
          <div
            key={product._id} // Using product ID as the unique key
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300" // Card styling with hover effect
          >
            <Image
              src={product.imageUrl} // Product image URL
              alt={product.name} // Accessible alt text with product name
              width={150}
              height={150}
              className="w-full h-auto rounded-lg mb-4" // Image styling
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {" "}
              {/* Product name */}
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {" "}
              {/* Product description */}
              {product.description}
            </p>
            <p className="text-lg font-bold text-gray-800">
              {" "}
              {/* Product price */}${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
