import { Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import "./RefreshButton.css";

function RefreshButton() {
  return (
    <button className="RefreshButton">
      <LoopIcon sx={{ fontSize: 23 }}></LoopIcon>
      <div className="RefreshButtonText">분석</div>
    </button>
  );
}

export default RefreshButton;
