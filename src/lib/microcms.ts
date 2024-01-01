// Preparation for SDK use
import { createClient  } from "microcms-js-sdk";
import { type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Image Type Definition
export type Image = {
  url: string;
  height: number;
  width: number;
};

// Type Definition
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  image: Image;
};


export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

// API Calls
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

export const getBlogImage = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.get<Image>({
    endpoint: "blogs",
    contentId,
    queries,
  });
}