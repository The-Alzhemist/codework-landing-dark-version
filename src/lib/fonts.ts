import localFont from "next/font/local";

export const poppinsFont = localFont({
  src: [
    {
      path: "../assets/fonts/poppins/Poppins-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/poppins/Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/poppins/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const promptFont = localFont({
  src: [{ path: "../assets/fonts/poppins/Prompt-Regular.ttf", weight: "400", style: "normal" }],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
