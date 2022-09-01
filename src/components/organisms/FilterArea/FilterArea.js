import "./FilterArea.css";
import { useState, useEffect, useRef } from "react";

import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

//mui-icons
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CircleIcon from "@mui/icons-material/Circle";

function FilterArea() {
  const [popover, setPopover] = useState(null);

  const handlePopoverClick = (e) => {
    setPopover(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopover(null);
  };

  const open = Boolean(popover);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="FilterArea">
      <div className="searchBar">
        <SearchIcon
          className="searchBar_searchIcon"
          sx={{ fontSize: 30, color: "#BEBEBE" }}
        />
        <input className="searchBar_input" placeholder="Search Text"></input>
        <button
          className="searchBar_filterBtn"
          aria-describedby="id"
          onClick={handlePopoverClick}
        >
          <FilterListIcon
            className="searchBar_filterBtn_filterListIcon"
            sx={{ fontSize: 30, color: "#BEBEBE" }}
          />
        </button>
        <Popover
          id="id"
          open={open}
          anchorEl={popover}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <div className="popOver_wrapper">
            <div className="popOver_content_wrapper">
              <Typography>상태</Typography>
              <div className="popOver_content_list">
                <Checkbox />
                <CircleIcon sx={{ color: "#74B9FF" }} />
                <Typography>성공</Typography>
              </div>
              <div className="popOver_content_list">
                <Checkbox />
                <CircleIcon sx={{ color: "#FF7675" }} />

                <Typography>실패</Typography>
              </div>
            </div>
            <Divider />
            <div className="popOver_content_wrapper">
              <Typography>검색 범위</Typography>
              <div className="popOver_content_list">
                <Checkbox />
                <Typography>PROGRAM NAME</Typography>
              </div>
              <div className="popOver_content_list">
                <Checkbox />
                <Typography>FD</Typography>
              </div>
            </div>
          </div>
        </Popover>
      </div>
      <div className="chipsArea"></div>
    </div>
  );
}

export default FilterArea;
