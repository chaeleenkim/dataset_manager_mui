import "./FilterArea.css";
import { useState, useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

//mui-icons
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CircleIcon from "@mui/icons-material/Circle";

function FilterArea() {
  //Pop-Over
  const [popover, setPopover] = useState(null);

  const handlePopoverClick = (e) => {
    setPopover(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopover(null);
  };

  const open = Boolean(popover);
  const id = open ? "simple-popover" : undefined;

  //Chips
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [chipArr, setChipArr] = useState([]);

  const handleDeleteChip = (chipToDelete) => () => {
    setChipArr((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleChips = (event) => {
    const isChecked = event.currentTarget.checked;
    const name = event.target.name;

    if (isChecked) {
      setChipArr([...chipArr, name]);
    } else {
      setChipArr(chipArr.filter((e) => e !== name));
    }
  };

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
              <Typography className="popOver_content_header">상태</Typography>
              <div className="popOver_content_list">
                <Checkbox name="성공" onChange={handleChips} />
                <CircleIcon sx={{ color: "#74B9FF" }} />
                <Typography>성공</Typography>
              </div>
              <div className="popOver_content_list">
                <Checkbox name="실패" onChange={handleChips} />
                <CircleIcon sx={{ color: "#FF7675" }} />
                <Typography>실패</Typography>
              </div>
            </div>
            <Divider />
            <div className="popOver_content_wrapper">
              <Typography className="popOver_content_header">
                검색 범위
              </Typography>
              <div className="popOver_content_list">
                <Checkbox name="PROGRAM NAME" onChange={handleChips} />
                <Typography>PROGRAM NAME</Typography>
              </div>
              <div className="popOver_content_list">
                <Checkbox name="FD" onChange={handleChips} />
                <Typography>FD</Typography>
              </div>
            </div>
          </div>
        </Popover>
      </div>
      <div className="chipArea">
        {chipArr.map((data) => {
          return (
            <ListItem key={data}>
              <Chip label={data} onDelete={handleDeleteChip(data)} />
            </ListItem>
          );
        })}
      </div>
    </div>
  );
}

export default FilterArea;
