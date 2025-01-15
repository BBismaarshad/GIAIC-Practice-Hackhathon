// Importing the createClient function from the next-sanity library
import { createClient } from "next-sanity";

// Creating a Sanity client instance with the project-specific configuration
const client = createClient({
  projectId: "fgyasf0y", // The unique project ID for your Sanity project
  dataset: "production", // The dataset you are querying (e.g., production or staging)
  useCdn: true, // Enables the use of Sanity's Content Delivery Network (CDN) for faster queries
  apiVersion: "2023-10-10", // The API version to use for the queries
});

// Function to perform queries on the Sanity database
export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: any;
}) {
  // Executes the query with optional parameters using the Sanity client
  return await client.fetch(query, params);
}
