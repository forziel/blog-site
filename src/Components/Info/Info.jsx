import { useState } from "react";
//photos
import photo1 from "../../Assets/images/1.jpg";
import photo2 from "../../Assets/images/2.jpg";
import photo3 from "../../Assets/images/3.jpg";
import photo4 from "../../Assets/images/4.jpg";
import photo5 from "../../Assets/images/5.jpg";
import avatar from "../../Assets/images/avatar.jpg";


import { Box, Modal } from "@mui/material";
const Info = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "55vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState();

  const handleClose = () => setOpen(false);

  //photo array
  const photoArray = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div
      className="flex flex-col px-20 py-6 gap-10 w-full h-full bg-light-primary dark:bg-dark-primary transition-all"
      style={{paddingTop:"14.8vh"}}
    >
      <div className="flex items-center">
        <div className="left-side w-1/2 p-14 flex flex-col gap-14">
          <h1 className="text-5xl font-bold dark:text-gray-100">About Me</h1>
          <h2 className="text-3xl font-semibold opacity-60 dark:text-gray-100 dark:opacity-75">
            I'm UI designer and front end developer from Gaziantep, Türkiye.
          </h2>
          <p className="text-lg font-medium opacity-75 dark:text-gray-100 dark:opacity-95">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            officia quo beatae consequatur dolorem laboriosam necessitatibus
            cum, totam deserunt doloremque, veniam voluptas porro nostrum
            aspernatur voluptatum eius cumque mollitia molestias provident. Eum
            inventore nulla ratione ipsa aspernatur eveniet, deserunt
            voluptates, enim, ipsum maxime ab rerum architecto quod sit? Illum
            quae dolores placeat expedita minima. Debitis vitae cum eveniet
            doloribus. Rerum!
          </p>
        </div>

        <div className="w-1/2 bg-red-400">
          <img src={avatar} alt="" />
        </div>
      </div>
      {/* Little pictures for modal */}
      <div className="pictures pl-8 flex justify-around gap-10 flex-wrap">
        {photoArray.map((photo) => {
          return (
            <button
              key={photo}
              onClick={() => {
                setOpen(true);
                setHero(photo);
              }}
              className=" w-1/6 bg-blue-600"
              style={{height:"25vh"}}
            >
              <img
                src={photo}
                className="object-cover"
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </button>
          );
        })}
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img className="object-cover"
                style={{ height: "100%", width: "100%" }} src={hero} alt="" />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Info;
