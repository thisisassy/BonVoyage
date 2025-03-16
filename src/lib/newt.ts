import { createClient } from "newt-client-js";

export interface Article {
  coverImage: any;
  _sys: any;
  title: string;
  slug: string;
  date: string;
  leadText: string;
  body: string;
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
