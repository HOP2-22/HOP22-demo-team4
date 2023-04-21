import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../firebaseConfig";

const useStorage = () => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    if (!file) {
      alert("Please choose a file first!");
    }

    setLoading(true);

    const storageRef = ref(storage, `/files/${file.name}`);

    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);

    setLoading(false);

    return url;
  };

  return { handleUpload, loading, setLoading };
};
export default useStorage;
