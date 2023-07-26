import React, { useEffect, useState } from "react";
import "./PhotoCollageStyle.css";
import { storage } from "../../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const PhotoCollage = () => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `photos/`);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="collage">
      <div className="container">
        {imageList.map((url) => {
          return (
            <div
              className="content"
              key={url.id}
              onClick={() => {
                return console.log(<img src={selectedImage} />);
              }}
            >
              <img className="photo" src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoCollage;
