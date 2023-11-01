import {PhotoGallery} from "../components/PhotoGallery";
import {createGlobalStyle} from "styled-components";
import {getDocs, QueryDocumentSnapshot} from "firebase/firestore";
import {photosCollection, storage} from "../config/firebaseConfig";
import {getDownloadURL, ref} from "firebase/storage";
import {useState} from "react";
import {Photo} from "../types/Photo";

async function mapPhotoDocumentToPhoto(document: QueryDocumentSnapshot): Promise<Photo> {
    const {description, title, src, location} = document.data();
    const imageReference = ref(storage, src);
    const imageUrl = await getDownloadURL(imageReference)

    return {title, description, location, src: imageUrl}
}

async function getFirestoreData() {
    const documents = await getDocs(photosCollection);
    const fetchImages = documents.docs.map(mapPhotoDocumentToPhoto);

    return Promise.all(fetchImages);
}

const TestPage = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    getFirestoreData().then(data => setPhotos(data));

    return (
        <>
            <PageStyle/>
            <PhotoGallery
                photos={photos as unknown as any}
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
