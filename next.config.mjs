import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
// import { routing } from "./i18n/routing";
// console.log({ routing }, "withNextIntl");
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
