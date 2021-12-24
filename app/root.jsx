import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "remix";
import tailwindUrl from "./styles/tailwind.css";
import globalCssUrl from "./styles/global.css";

export function meta() {
  return {title: "xBook"};
}

export function links() {
  return [
    {rel: "stylesheet", href: globalCssUrl},
    {rel: "stylesheet", href: tailwindUrl},
  ];
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
