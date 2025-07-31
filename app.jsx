import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { WebsimSocket, useQuery } from "@websim/use-query";
const room = new WebsimSocket();
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    window.websim.getCurrentUser().then((user) => setCurrentUser(user));
  }, []);
  const { data: projects, loading } = useQuery(
    room.query("SELECT p.id, p.project_id, p.title, p.description, p.creator_username, p.project_url, p.thumbnail_url, p.current_funding, p.funding_goal, p.category, p.tags, p.featured, p.created_at FROM public.funding_projects p ORDER BY p.created_at DESC")
  );
  const categories = ["all", "games", "tools", "art", "education", "social"];
  const filteredProjects = projects?.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = searchQuery === "" || project.title?.toLowerCase().includes(searchQuery.toLowerCase()) || project.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "glass-card mx-4 mt-4 p-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold gradient-text", children: "WebSim Fund Hub" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 mt-1", children: "Discover, share, and fund amazing projects together" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: currentUser ? `Welcome, @${currentUser.username}` : "Loading..." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => window.location.href = "#submit-project",
            className: "btn-primary px-4 py-2 rounded-lg text-white font-medium",
            children: "Submit Project"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 42,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "glass-card p-6 mb-8", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-semibold mb-4", children: "Filter Projects" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 mb-4", children: categories.map((category) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setSelectedCategory(category),
            className: `px-4 py-2 rounded-lg capitalize transition-all ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`,
            children: category
          },
          category,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 57,
            columnNumber: 29
          },
          this
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            placeholder: "Search projects...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 70,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "loading-spinner" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 21
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProjects.map((project) => /* @__PURE__ */ jsxDEV(ProjectCard, { project }, project.id, false, {
        fileName: "<stdin>",
        lineNumber: 86,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { id: "submit-project", className: "glass-card p-6 mt-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-4 gradient-text", children: "Submit a Project" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 92,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(ProjectSubmissionForm, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}
function ProjectCard({ project }) {
  const progress = Math.min(project.current_funding / project.funding_goal * 100, 100);
  return /* @__PURE__ */ jsxDEV("div", { className: "glass-card p-6 project-card", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: project.thumbnail_url || `https://images.websim.com/v1/site/${project.project_id}/400`,
        alt: project.title,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 106,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-2", children: project.title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 text-sm mb-4 line-clamp-2", children: project.description }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 114,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: `https://images.websim.com/avatar/${project.creator_username}`,
          alt: project.creator_username,
          className: "w-6 h-6 rounded-full"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 117,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: [
        "@",
        project.creator_username
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm mb-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-gray-400", children: "Funding Progress" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-indigo-400", children: [
          Math.round(progress),
          "%"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 128,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 126,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "funding-bar", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "h-full bg-indigo-500 rounded-lg transition-all duration-500",
          style: { width: `${progress}%` }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 131,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 130,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm mt-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-gray-400", children: [
          project.current_funding,
          " credits"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 137,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-gray-400", children: [
          "Goal: ",
          project.funding_goal
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 138,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 136,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 125,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-1 mb-4", children: project.tags?.slice(0, 3).map((tag) => /* @__PURE__ */ jsxDEV("span", { className: "tag", children: tag }, tag, false, {
      fileName: "<stdin>",
      lineNumber: 144,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 142,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: `https://websim.com/p/${project.project_id}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex-1 btn-primary text-center py-2 px-4 rounded-lg text-white font-medium",
          children: "View Project"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 149,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => handleSupport(project),
          className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors",
          children: "Quick Support"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 157,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 148,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 104,
    columnNumber: 9
  }, this);
}
function ProjectSubmissionForm() {
  const [formData, setFormData] = useState({
    project_url: "",
    title: "",
    description: "",
    category: "games",
    funding_goal: 100,
    tags: ""
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = new URL(formData.project_url);
      const projectId = url.pathname.split("/").pop();
      const response = await fetch(`/api/v1/projects/${projectId}`);
      const projectData = await response.json();
      const project = projectData.project;
      const site = projectData.site;
      await room.collection("funding_projects").create({
        project_id: project.id,
        title: formData.title || project.title,
        description: formData.description || project.description,
        creator_username: project.created_by.username,
        project_url: formData.project_url,
        thumbnail_url: site ? `https://images.websim.com/v1/site/${site.id}/600` : null,
        current_funding: 0,
        funding_goal: formData.funding_goal,
        category: formData.category,
        tags: formData.tags.split(",").map((t) => t.trim()).filter((t) => t),
        featured: false
      });
      setFormData({
        project_url: "",
        title: "",
        description: "",
        category: "games",
        funding_goal: 100,
        tags: ""
      });
      alert("Project submitted successfully!");
    } catch (error) {
      alert("Error submitting project. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "url",
        placeholder: "WebSim Project URL (e.g., https://websim.com/p/abc123...)",
        value: formData.project_url,
        onChange: (e) => setFormData({ ...formData, project_url: e.target.value }),
        required: true,
        className: "w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 227,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "text",
        placeholder: "Project Title",
        value: formData.title,
        onChange: (e) => setFormData({ ...formData, title: e.target.value }),
        className: "w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 235,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "textarea",
      {
        placeholder: "Project Description",
        value: formData.description,
        onChange: (e) => setFormData({ ...formData, description: e.target.value }),
        rows: 3,
        className: "w-full bg-gray-700 text-white px-4 py-2 rounded-lg resize-none"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 242,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "select",
        {
          value: formData.category,
          onChange: (e) => setFormData({ ...formData, category: e.target.value }),
          className: "bg-gray-700 text-white px-4 py-2 rounded-lg",
          children: [
            /* @__PURE__ */ jsxDEV("option", { value: "games", children: "Games" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 255,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "tools", children: "Tools" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 256,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "art", children: "Art" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 257,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "education", children: "Education" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 258,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "social", children: "Social" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 259,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 250,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "number",
          placeholder: "Funding Goal (credits)",
          value: formData.funding_goal,
          onChange: (e) => setFormData({ ...formData, funding_goal: parseInt(e.target.value) }),
          min: "10",
          className: "bg-gray-700 text-white px-4 py-2 rounded-lg"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 261,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 249,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "text",
        placeholder: "Tags (comma separated)",
        value: formData.tags,
        onChange: (e) => setFormData({ ...formData, tags: e.target.value }),
        className: "w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 270,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "btn-primary w-full py-3 rounded-lg text-white font-medium",
        children: loading ? "Submitting..." : "Submit Project"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 277,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 226,
    columnNumber: 9
  }, this);
}
async function handleSupport(project) {
  const url = `https://websim.com/p/${project.project_id}`;
  window.open(url, "_blank");
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 294,
  columnNumber: 13
}));
