import React from "react";
import { createLucideIcon } from "lucide-react";
const HackerRankIcon = createLucideIcon("HackerRank", [
    // Hexagon Shape
    ["path", { d: "M3 8L12 2L21 8V16L12 22L3 16Z", key: "hexagon" }],
    // Letter 'H' (Custom Styling for HackerRank Logo)
    ["path", { d: "M9 8V16M15 8V16M9 12H15", strokeWidth: "2", key: "h-letter" }],
  ]);
  
  export default HackerRankIcon;
  