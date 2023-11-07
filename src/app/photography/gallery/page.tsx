"use client";

import { PhotoGallery } from "../../../components/PhotoGallery";
import { createGlobalStyle } from "styled-components";
import { getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { photoCollection, storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { Photo } from "../../../types/Photo";
import { useSearchParams } from "next/navigation";
import { BackButton } from "../../../components/buttons/BackButton";

async function mapPhotoDocumentToPhoto(
  document: QueryDocumentSnapshot,
): Promise<Photo> {
  const { description, name, location } = document.data();
  let { src } = document.data();
  let imageUrl: string;
  const imageReference = ref(storage, src);

  try {
    imageUrl = await getDownloadURL(imageReference);
  } catch (error) {
    console.log(`Skipped photo ${name}: ${src} not found.`);
    imageUrl = "skipped";
    return { name, description, location, src: imageUrl };
  }

  return { name, description, location, src: imageUrl };
}

async function getFirestoreData(collection: string) {
  const documents = await getDocs(photoCollection(collection));
  const fetchImages = documents.docs.map(mapPhotoDocumentToPhoto);
  const retrievedImages = await Promise.all(fetchImages);

  return retrievedImages.filter((photo) => photo.src !== "skipped") as Photo[];
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [collection, setCollection] = useState("");
  const name = useSearchParams().get("name");

  if (!name) {
    throw new Error("Oops, something went wrong!");
  }

  useEffect(() => {
    setCollection(name);
    getFirestoreData(name).then((data) => setPhotos(data));
  }, [name, collection]);

  return (
    <>
      <PageStyle />
      <BackButton />
      <PhotoGallery
        photos={photos}
        title={name}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, cum cumque debitis dolorem ducimus fuga harum hic nisi optio pariatur perferendis perspiciatis placeat, possimus provident repellendus sapiente temporibus vero vitae."
        }
      />
    </>
  );
}

const PageStyle = createGlobalStyle`
  body {
    margin: 1rem;
    background: #1f1f1f;
  }
`;

