// /** @type {import('tailwindcss').Config} */
// export default {
//   // This part is correct and stays the same.
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   // We no longer need the 'theme' object here because daisyUI will handle it.

//   // This is the crucial new part.
//   plugins: [require("daisyui")],

//   // We are now configuring daisyUI directly.
//   daisyui: {
//     themes: [
//       {
//         // Define our custom theme here
//         mytheme: {
//           // Map our colors to daisyUI's semantic color names
//           primary: "#09153D", // Deep Navy for primary text and backgrounds
//           secondary: "#676C7B", // Cool Gray for secondary text
//           accent: "#EE1C47", // Vibrant Red/Magenta for main buttons and highlights
//           neutral: "#3d4451", // A standard neutral color
//           "base-100": "#ffffff", // Base page background (white)

//           // You can also map your highlight color or other variations if needed
//           info: "#3ABFF8",
//           success: "#36D399",
//           warning: "#FBBD23",
//           error: "#F87272",
//         },
//       },
//       // You can also include default themes if you want to switch between them
//       // "light",
//       // "dark",
//     ],
//   },
// };
