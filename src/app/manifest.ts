import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammed Alshaheri — Full-Stack Developer",
    short_name: "MA Portfolio",
    description: "Portfolio of Mohammed Alshaheri, Full-Stack Developer in Germany.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0f",
    theme_color: "#0b0d0f",
  };
}
