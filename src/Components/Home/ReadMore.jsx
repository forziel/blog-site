import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';
const ReadMore = ({setBlogItem}) => {

    


  return (
    <Link to={"/blog"}>
      <span
        onClick={setBlogItem}
        className="flex w-1/3 justify-center rounded bg-light-primary dark:bg-dark-primary dark:text-gray-100 text-lg p-3  hover:shadow-md transition-all"
      >
        Read More
      </span>
    </Link>
  );
};

export default ReadMore;
