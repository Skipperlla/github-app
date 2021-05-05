import ImageZoom from "react-medium-image-zoom";
const cardBodyPreview = () => {
  return (
    <div className="uk-width-expand">
      <h3 className="uk-text-center">Preview</h3>
      <ImageZoom
            image={{
              src: "/images/preview.png",
              alt: `""`,
              className: "img",
            }}
            zoomImage={{
              src: "/images/preview.png",
              alt: `""`,
            }}
            className="bg"
          />
    </div>
  );
};
export default cardBodyPreview;
