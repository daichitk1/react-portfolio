import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="rounded-xl bg-blue-100">
      <Button onClick={toggleDrawer(true)}>
        <img
          className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-2 md:mx-5 opacity-50 hover:opacity-25"
          src="../images/bars_24.png"
        />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="bg-blue-100"
        >
          <List className="h-screen">
            <div className="text-3xl m-3 w-30 font-bold">メニュー</div>

            <div className="text-2xl w-50 mx-5 my-5 underline font-bold hover:opacity-50">
              <Link to="/">自己紹介</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline font-bold hover:opacity-50">
              <Link to="/portfolio">ポートフォリオ</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline font-bold hover:opacity-50">
              <Link to="/skill">スキル</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline font-bold hover:opacity-50">
              <Link to="/blog">ブログ</Link>
            </div>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
