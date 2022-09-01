import { Typography } from "@mui/material";
import RefreshButton from "../../atoms/RefreshButton/RefreshButton";
import "./UpperPageArea.css";

function UpperPageArea() {
  return (
    <div className="UpperPageArea">
      <Typography className="UpperPageAreaText">Layout 분석</Typography>
      <RefreshButton />
    </div>
  );
}

export default UpperPageArea;
