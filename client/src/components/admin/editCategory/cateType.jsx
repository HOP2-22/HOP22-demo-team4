import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
function generate(element = React.ReactElement) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
export default function CateType({ type }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className=" ">
      <List >
        {generate(
          <ListItem 
            sx={{backgroundColor : "red" , width : "135px"}}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              sx={{color : "white"}}
              primary={type}
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        )}
      </List>
    </div>
  );
}
