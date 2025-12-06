import { ResourceItem } from "./types";

const ICON_MONITOR =
  "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z";
const ICON_MAP =
  "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7";

export const resources: ResourceItem[] = [
  // 1. DLOC Introduction
  {
    title: "DLOC Introduction Presentation",
    description:
      "Interactive presentation introducing the Digital Learning Coordinator role, vision, and collaborative approach",
    link: "presentations/dloc-presentation_02.html",
    theme: "blue",
    tags: ["11 Slides", "Interactive", "Overview"],
    iconPath: ICON_MONITOR,
  },
  // 2. Strategic Roadmap
  {
    title: "Strategic Roadmap 2025-2026",
    description:
      "Comprehensive 12-month implementation roadmap with 6 phases, success factors, and quick wins strategy",
    link: "presentations/dloc-roadmap-html.html",
    theme: "green",
    tags: ["6 Phases", "Detailed", "Strategic"],
    iconPath: ICON_MAP,
  },
  // 3. Google Certified Educator
  {
    title: "Google Certified Educator Slides",
    description:
      "A Google Educator's Journey: The Quest for the Champion's Badge",
    link: "presentations/google_educator_slides.html",
    theme: "green",
    tags: ["A Digital Dawn", "Magic Happens", "Mystical Action Plan"],
    iconPath: ICON_MAP,
  },
  // 4. DT Interim Report
  {
    title:
      "Digital Transformation - Readiness Assessment Survey-Interim Report",
    description:
      "This report is an Interim Report on the Digital Transformation Staff Readiness Assessment for Cosmopolitan University, covering the period from November 3 to November 25, 2025.",
    link: "presentations/CU_digital_readiness_report.html",
    theme: "blue",
    tags: ["70=Target", "47=Registered", "Overview"],
    iconPath: ICON_MONITOR,
  },
  // 5. IDEAS Farm GPS
  {
    title: "Farmland GPS Survey Training",
    description:
      "This is a training simulation for interns capturing farmland GPS coordinates through a mobile app.",
    link: "presentations/ccsa_training_netlify-deployment.html",
    theme: "blue",
    tags: ["GPS", "Simulation", "Translations"],
    iconPath: ICON_MONITOR,
  },

  // =========================================================================
  // DUMMY LOCATIONS FOR NEW PRESENTATIONS
  // Uncomment a block below to add a new resource to the grid.
  // =========================================================================

  /*
  // Dummy Location 1
  {
    title: "New Presentation Title 1",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_1.html",
    theme: "blue", // or "green"
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    iconPath: ICON_MONITOR // or ICON_MAP
  },
  */

  /*
  // Dummy Location 2
  {
    title: "New Presentation Title 2",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_2.html",
    theme: "green",
    tags: ["Tag A", "Tag B"],
    iconPath: ICON_MAP
  },
  */

  /*
  // Dummy Location 3
  {
    title: "New Presentation Title 3",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_3.html",
    theme: "blue",
    tags: ["New", "Update"],
    iconPath: ICON_MONITOR
  },
  */

  /*
  // Dummy Location 4
  {
    title: "New Presentation Title 4",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_4.html",
    theme: "green",
    tags: ["Strategic", "Planning"],
    iconPath: ICON_MAP
  },
  */

  /*
  // Dummy Location 5
  {
    title: "New Presentation Title 5",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_5.html",
    theme: "blue",
    tags: ["Report", "Data"],
    iconPath: ICON_MONITOR
  },
  */

  /*
  // Dummy Location 6
  {
    title: "New Presentation Title 6",
    description: "Description of the new presentation goes here.",
    link: "presentations/filename_6.html",
    theme: "green",
    tags: ["Workshop", "Training"],
    iconPath: ICON_MAP
  },
  */
];
