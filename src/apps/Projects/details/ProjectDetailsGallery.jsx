import React from "react";

const ProjectDetailsGallery = ({
  project,
  selectedImage,
  setSelectedImage,
}) => {
  const screenshots = project.screenshots || [];
  const preview = selectedImage || project.thumbnail;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-2">
      <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
        {preview ? (
          <img
            src={preview}
            alt={project.title}
            className="w-full h-52 sm:h-72 object-contain"
          />
        ) : (
          <div className="h-52 sm:h-72 flex items-center justify-center text-sm text-gray-400">
            No project preview available.
          </div>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pt-3 pb-1">
          {screenshots.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              aria-label={`View screenshot ${index + 1}`}
              className={`
                shrink-0 rounded-lg overflow-hidden border-2
                transition-all
                ${
                  selectedImage === image
                    ? "border-blue-500 shadow-sm"
                    : "border-gray-200"
                }
              `}
            >
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsGallery;