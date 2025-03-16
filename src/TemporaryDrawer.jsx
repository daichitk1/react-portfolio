import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link, Outlet } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <img
          className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-2 md:mx-5 opacity-50 hover:opacity-25"
          src="../images/bars_24.png"
        />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <div className="text-3xl mx-5 w-30">メニュー</div>
            <div className="text-2xl w-50 mx-5 my-5 underline hover:opacity-50">
              <Link to="/">ポートフォリオ</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline hover:opacity-50">
              <Link to="/product">ニュース</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline hover:opacity-50">
              <Link to="/profile">自己紹介</Link>
            </div>
            <div className="text-2xl w-50 mx-5 my-5 underline hover:opacity-50">
              <Link to="/skill">スキル</Link>
            </div>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
