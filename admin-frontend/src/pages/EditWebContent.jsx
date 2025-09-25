import React, { useEffect, useState } from "react";
import './EditWebContent.css';
import { toast } from "react-toastify";


const EditWebsiteContent = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080/";
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}WebsiteContentEditRoutes/webSiteGetContent`)
      .then(res => res.json())
      .then(data => setContent(data?.result?.[0]))
      .catch(err => console.error("Fetch error:", err));
  }, [BASE_URL]);

  const updateField = (field, value) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...(content.projects || [])];
    updatedProjects[index][field] = value;
    setContent(prev => ({ ...prev, projects: updatedProjects }));
  };

  const saveChanges = () => {
    setLoading(true);
    fetch(`${BASE_URL}WebsiteContentEditRoutes/WebsiteSetContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    })
      .then(() =>  toast.success("Changes Saved"))
      .catch(err => console.error("Save error:", err)).finally(() => setLoading(false));
  };

  if (!content) return <div>Loading...</div>;

  return (
    <div className="edit-container">
      <h2>Edit Website Content</h2>

      <label>Hero Title</label>
      <input
        type="text"
        value={content.heroTitle || ""}
        onChange={(e) => updateField("heroTitle", e.target.value)}
      />

      <label>Hero Subtitle</label>
      <input
        type="text"
        value={content.heroSubtitle || ""}
        onChange={(e) => updateField("heroSubtitle", e.target.value)}
      />

      <label>About Me</label>
      <textarea
        rows="4"
        value={content.aboutMe || ""}
        onChange={(e) => updateField("aboutMe", e.target.value)}
      />

      <h3>Projects</h3>
      {content.projects?.map((proj, index) => (
        <div className="project-item" key={index}>
          <input
            placeholder="Title"
            value={proj.title}
            onChange={(e) => handleProjectChange(index, "title", e.target.value)}
          />
          <input
            placeholder="Description"
            value={proj.description}
            onChange={(e) => handleProjectChange(index, "description", e.target.value)}
          />
          <input
            placeholder="Link"
            value={proj.link}
            onChange={(e) => handleProjectChange(index, "link", e.target.value)}
          />
        </div>
      ))}

      <h3>Skills (comma separated)</h3>
      <input
        type="text"
        value={content.skills?.join(", ") || ""}
        onChange={(e) =>
          updateField("skills", e.target.value.split(",").map((s) => s.trim()))
        }
      />

      <h3>Contact</h3>
      <input
        placeholder="Email"
        value={content.contact?.email || ""}
        onChange={(e) =>
          updateField("contact", { ...content.contact, email: e.target.value })
        }
      />
      <input
        placeholder="Phone"
        value={content.contact?.phone || ""}
        onChange={(e) =>
          updateField("contact", { ...content.contact, phone: e.target.value })
        }
      />
      <input
        placeholder="Location"
        value={content.contact?.location || ""}
        onChange={(e) =>
          updateField("contact", { ...content.contact, location: e.target.value })
        }
      />

      <label>Footer Text</label>
      <input
        type="text"
        value={content.footerText || ""}
        onChange={(e) => updateField("footerText", e.target.value)}
      />

      <br />
      <button onClick={saveChanges}
       disabled={loading}
      >{loading ? "Saving..." : "Save All Changes"} </button>
      {/* Add this preview section */}
      <div className="preview-container">
        <h2>Live Website Preview</h2>
        <iframe
          src="https://portfolio-website-topaz-xi-43.vercel.app/"
          title="Website Preview"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "2rem" }}
        ></iframe>
      </div>
    </div>
  );
};

export default EditWebsiteContent;
