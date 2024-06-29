import { API_URL } from "@/lib/consts";
import { type FetchPostsResponse, PostsEntries } from "./types";

export class API {
  static parsePost(data: FetchPostsResponse): PostsEntries {
    const parsedResults = data.results.map((post) => ({
      ...post,
      createdAt: post.created_at,
    }));

    return { ...data, results: parsedResults };
  }

  static async getPostsEntries(page: string | null): Promise<PostsEntries> {
    const resp = await fetch(
      `${API_URL}${page ? `?page=${page}` : ''}`
    );

    if (!resp.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = this.parsePost(await resp.json());
    return data;
  }
}
