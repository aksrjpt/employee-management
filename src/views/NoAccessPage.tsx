import { Paper } from "@mui/material";
import { useNavigate } from "react-router";
import "../App.css";

function NoAccessPage() {
  const usenavigate = useNavigate();
  const clickHandler = () => {
    usenavigate("/");
  };
  const imgUrl =
    "https://cdn.dribbble.com/users/2950423/screenshots/7191173/media/5e53ea26e1458bdb27fe61bea68516cd.png?compress=1&resize=768x576&vertical=top";
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <div className="no-access-image" onClick={clickHandler}>
        <img src={imgUrl} alt="No Access Page" />
      </div>
    </Paper>
  );
}

export default NoAccessPage;
