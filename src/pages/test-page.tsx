import { PhotoGallery } from "../components/PhotoGallery";
import { createGlobalStyle } from "styled-components";

const TestPage = () => {
  const menuPhotos = [
    {
      name: "dune",
      src: "images/dune.jpg",
      title: "africa",
      alt: "Photo of a dune",
    },
    {
      name: "oryx",
      src: "images/oryx.jpg",
      title: "asia",
      alt: "Photo of an oryx",
    },
    {
      name: "zebra",
      src: "images/zebra.jpg",
      title: "europe",
      alt: "Photo of a zebra",
    },
    {
      name: "dune",
      src: "images/dune.jpg",
      title: "africa",
      alt: "Photo of a dune",
    },
    {
      name: "oryx",
      src: "images/oryx.jpg",
      title: "asia",
      alt: "Photo of an oryx",
    },
    {
      name: "zebra",
      src: "images/zebra.jpg",
      title: "europe",
      alt: "Photo of a zebra",
    },
    {
      name: "dune",
      src: "images/dune.jpg",
      title: "africa",
      alt: "Photo of a dune",
    },
    {
      name: "oryx",
      src: "images/oryx.jpg",
      title: "asia",
      alt: "Photo of an oryx",
    },
    {
      name: "zebra",
      src: "images/zebra.jpg",
      title: "europe",
      alt: "Photo of a zebra",
    },
  ];

  return (
    <>
      <PageStyle />
      <PhotoGallery
        photos={menuPhotos}
        title={"Africa"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, cum cumque debitis dolorem ducimus fuga harum hic nisi optio pariatur perferendis perspiciatis placeat, possimus provident repellendus sapiente temporibus vero vitae."
        }
      />
    </>
  );
};

export default TestPage;

const PageStyle = createGlobalStyle`
  body {
    margin: 1rem;
    background: #1f1f1f;
  }
`;
