import React from "react";
import "../App.scss";
import gripStudentKlachten from "../documents/Grip Student Klachten.pdf";
import gripStudentOverigeKlachten from "../documents/Grip Student Overige Klachten.pdf";
import gripStudentErvaring from "../documents/Grip Student Ervaring Gehoorbescherming.pdf";
import gripFocusGroups from "../documents/Grip Samevatting Focusgroepen.pdf";
const DocumentsPage = () => {
  const documents = [
    {
      id: 1,
      name: "Grip Student Klachten",
      doc: gripStudentKlachten,
    },
    {
      id: 2,
      name: "Grip Student Overige Klachten",
      doc: gripStudentOverigeKlachten,
    },
    {
      id: 3,
      name: "Grip Student Ervaring Gehoorbescherming",
      doc: gripStudentErvaring,
    },
    {
      id: 4,
      name: "Grip Samevatting Focusgroepen",
      doc: gripFocusGroups,
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
    {
      id: 7,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 8,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 9,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 10,
      name: "Project PlanASDASDASD",
      doc: "",
    },
    {
      id: 11,
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
          <div
            key={doc.id}
            className="chip"
            onClick={() => window.open(doc.doc)}
          >
            <h3>{doc.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
