import React from "react";
import "../App.scss";

const DocumentsPage = () => {
  const documents = [
    {
      id: 1,
      name: "Project Plan",
      doc: "",
    },
    {
      id: 2,
      name: "Project Plan",
      doc: "",
    },
    {
      id: 3,
      name: "Project Plan",
      doc: "",
    },
    {
      id: 4,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 5,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 6,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 7,
      name: "Project PlanASDASDASD",
      doc: "",
    },
  ];

  return (
    <div className="documents-page">
      <div className="documents-page-header">
        <h1>Documents</h1>
        <p>View all docs with single click 👆 </p>
      </div>

      <div className="chips-container">
        {documents.map((doc) => (
          <div key={doc.id} className="chip">
            <h3>{doc.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
