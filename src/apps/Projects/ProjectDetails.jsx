import React, { useEffect, useState } from "react";

import ProjectDetailsHeader from "./details/ProjectDetailsHeader";
import ProjectDetailsGallery from "./details/ProjectDetailsGallery";
import ProjectDetailsContent from "./details/ProjectDetailsContent";
import ProjectDetailsActions from "./details/ProjectDetailsActions";

const ProjectDetails = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(
    project?.screenshots?.[0] || project?.thumbnail || null
  );

  useEffect(() => {
    setSelectedImage(
      project?.screenshots?.[0] || project?.thumbnail || null
    );
  }, [project]);

  if (!project) {
    return (
      <div className="p-6 text-center text-sm text-gray-500">
        Project details are not available.
      </div>
    );
  }

  return (
    <div className="space-y-6 text-gray-900">
      <ProjectDetailsHeader project={project} />

      <ProjectDetailsGallery
        project={project}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <ProjectDetailsContent project={project} />

      <ProjectDetailsActions project={project} />
    </div>
  );
};

export default ProjectDetails;