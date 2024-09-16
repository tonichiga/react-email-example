import * as React from "react";
import { render } from "@react-email/render";
import NotionMagicLinkEmail from "./notion-magic-link";

const html = await render(<NotionMagicLinkEmail />, {
  pretty: true,
});

console.log(html);
