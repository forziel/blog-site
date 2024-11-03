import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AvatarImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);  // Base64 formatında resmi alır
        };
        reader.readAsDataURL(file);  // Dosya okuma işlemi
      }
    };

  return (
    <label
      htmlFor="image"
      className=" bg-gray-100 rounded-full cursor-pointer w-44 h-44 relative"
    >
      <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        onChange={handleImageChange}
        className="hidden"
      />
      {
        selectedImage == null ? 
        <FaPlus className="text-4xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "/>
        : <img src={selectedImage} alt="" className="object-cover w-44 h-44 rounded-full" />
      }
    </label>
  );
};

export default AvatarImage;
