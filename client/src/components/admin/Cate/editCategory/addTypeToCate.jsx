import { Button, Chip } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import { DeleteIcon } from "lucide-react";

export default function AddTypeToCate({ type }) {
  const [add, setAdd] = useState(Boolean);
  const [selected , setSelected] = useState(Boolean)

  const types = [
    { name: "Sandbox", tp: "sandBox" },
    { name: "Battle Royal", tp: "BR" },
    { name: "Multiplayer online battle arena", tp: "MOBA" },
    { name: "Sports", tp: "sports" },
    { name: "Card game", tp: "CG" },
    { name: "Action adventure", tp: "AA" },
    { name: "Strategy game", tp: "strategy" },
    { name: "Royal playing game", tp: "rpg" },
  ];

  return (
    <Box>
      <Button
        className="hover:text-blue-600"
        sx={{
          backgroundColor: "blue",
          color: "white",
        }}
        variant="outlined"
        onClick={() => {
          if (add == true) {
            setAdd(false);
          } else {
            setAdd(true);
          }
        }}
      >
        Add category
      </Button>
      <div>
        {add ? (
          <div className="flex flex-col w-[180px]">
            {types?.map((item, index) => {
              if (item != type) {
                return (
                  <Chip
                    label={item.name}
                    key={index}
                    onClick={() => {
                      if(selected == true){
                        setSelected(false)
                      } 
                      setSelected(true)
                    }}
                    className={if (selected) {
                      "bg-black"
                    } else {
                      
                    }}
                  />
                );
              } else {
                return 0;
              }
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Box>
  );
}
