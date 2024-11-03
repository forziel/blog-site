import { Link } from "react-router-dom";
// mateiral ui
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Menu = ({ setModal,toggleMenu }) => {
  const {menuItems} = useSelector((store) => store.menuItems)

  return (
    <>
    <div className=" bg-light-secondary dark:bg-dark-secondary w-full flex justify-end px-12 py-6">
              <button className="text-3xl" onClick={toggleMenu}>
                <IoMdClose/>
              </button>
            </div>
    <Box className="bg-light-secondary dark:bg-dark-secondary" sx={{ width: "20rem", height:"100vh" }} role="presentation" onClick={setModal}>
      <List >
        {menuItems.map((menuItem) => (
          <Link
            to={menuItem.link}
            key={Math.random()}
          >
            <ListItem disablePadding>
              <ListItemButton onClick={menuItem.onclick} className="h-16 hover:bg-opacity-10 hover:dark:bg-opacity-10">
                <ListItemText primary={menuItem.name} />
                <ListItemIcon className="text-2xl">
                  {menuItem.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
    </>
  );
};

export default Menu;
