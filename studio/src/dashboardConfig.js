export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f98a78a23cce0ec414a81a",
                  title: "Sanity Studio",
                  name: "history-makers-studio",
                  apiId: "8f32089b-0550-48cf-8d7e-50bd13bfcfc1",
                },
                {
                  buildHookId: "60f98a78a9796826cc36907a",
                  title: "Blog Website",
                  name: "history-makers",
                  apiId: "39d0c516-a6f8-4234-92cd-e0abe1a54f7c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CarlP847/history-makers",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://history-makers.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
