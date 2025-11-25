import { query } from "./_generated/server";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    // Return static project data for now
    return [
      {
        _id: "1",
        title: "GramaSuraksha",
        description: "A PWA combining Smart Village Assistant, KrishiAI and MediGO to serve rural communities",
        url: "https://grama-suraksha-rural-super-app-rz4oast4.sites.blink.new",
        tags: ["PWA", "React", "Rural Tech"],
        featured: false,
        award: null,
      },
      {
        _id: "2", 
        title: "AgriHub",
        description: "Agritech PWA for farmers and stakeholders to connect, plan and access market information",
        url: "https://agri-hub.vercel.app",
        tags: ["PWA", "Agritech", "Award Winner"],
        featured: true,
        award: "🏆 SAP Hackfest Winner",
      },
      {
        _id: "3",
        title: "SkillGrid",
        description: "Mapping and visualizing skill gaps for learners — currently in development for BIT Hackfest",
        url: "https://skillgrid-pwa-indian-skill-ai-6x6yxzyw.sites.blink.new/",
        tags: ["PWA", "EdTech", "Data Visualization"],
        featured: false,
        award: null,
      },
    ];
  },
});
