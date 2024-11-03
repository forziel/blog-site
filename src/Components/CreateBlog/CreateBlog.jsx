import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { setBlogData } from "../Slices/BlogSlice";
import { useState } from "react";

const CreateBlog = () => {
  const dispatch = useDispatch();

    //get image
    const imageHandler = (e) => {
      const file = e.target.files[0];
      if(file){
        const reader = new FileReader;
        reader.onloadend= () => {
          setImage(reader.result)
        };
        reader.readAsDataURL(file);
      }
      
    }

  //datas
  const [allType, setAllType] = useState([]);
  const [title, setTitle] = useState();
  const [sum, setSum] = useState();
    const [image, setImage] = useState(null);
  const [paragraph, setParagraph] = useState();

  const getBlogData = () => {
    dispatch(
      setBlogData({
        id: Math.random(),
        img: image,
        blogType: "sağlıklı yaşam",
        title: title,
        paragraph: paragraph,
        date: "5 eylül 2024",
        sum: sum,
      })
    );
    setAllType([])
    setTitle("")
    setSum("")
    paragraph("")
    setImage(null)
  };

  return (
    <section
      className="flex items-center justify-center"
      style={{ paddingTop: "10%" }}
    >
      <div className="w-2/3 bg-gray-200 flex flex-col items-center p-10 gap-7">
        <input
          type="textarea"
          className="w-1/2 h-10 px-5 py-3 outline-none"
          placeholder="başlık"
          onChange={(e) => {
            setSum(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-1/2 h-10 px-5 py-6 outline-none"
          placeholder="özet"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>
          <input type="file" onChange={imageHandler} />
        </div>
        <textarea
          className="w-1/2  px-5 py-6 outline-none"
          placeholder="paragraph"
          onChange={(e) => {
            setParagraph(e.target.value);
          }}
        ></textarea>
        <div>etiketler</div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="sağlıklı yaşam"
            className=" h-10 px-5 py-3 outline-none"
            onChange={(e) => {
              setAllType(e.target.value, ...allType);
            }}
          />
          <input
            type="text"
            placeholder="meditasyon"
            className=" h-10 px-5 py-3 outline-none"
            onChange={(e) => {
              setAllType(e.target.value, ...allType);
            }}
          />
          <input
            type="text"
            placeholder="yazılım"
            className=" h-10 px-5 py-3 outline-none"
            onChange={(e) => {
              setAllType(e.target.value, ...allType);
            }}
          />
          <input
            type="text"
            placeholder="spor"
            className=" h-10 px-5 py-3 outline-none"
            onChange={(e) => {
              setAllType(e.target.value, ...allType);
            }}
          />
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: grey[700] }}
          className="flex w-1/3 justify-center rounded  text-gray-200 dark:bg-gray-300 dark:text-gray-900 text-lg p-3"
          onClick={getBlogData}
        >
          Bloğu Ekle
        </Button>
      </div>
    </section>
  );
};

export default CreateBlog;
