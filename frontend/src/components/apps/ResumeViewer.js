import React from "react";
import resume from "../../assets/documents/Ichan_Kabir_Resume.pdf";

const ResumeViewer = () => {
  return (
    <iframe
      src={resume}
      frameBorder="0"
      title="Ichan Kabir Resume"
      style={{ width: "100%", height: "100%" }}
    ></iframe>
  );
};

export default ResumeViewer;
