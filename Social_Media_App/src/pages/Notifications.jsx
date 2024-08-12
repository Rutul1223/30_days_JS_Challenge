import { List, ListItem, Typography } from "@mui/material";
import React, { useContext } from "react";
import NotificationContext from "../context/NotificationContext";
import { Comment, FavoriteRounded } from "@mui/icons-material";

const Notifications = () => {
  const { notifications } = useContext(NotificationContext);
  console.log(notifications);

  return (
    <List>
      {notifications.map((notification, index) => (
        <ListItem key={index} sx={{ borderBottom: "1px solid lightgrey" }}>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            {notification.type === "like" ? (
              <FavoriteRounded sx={{ color: "red" }} />
            ) : (
              <Comment sx={{ color: "skyblue" }} />
            )}
            {notification.message}
          </Typography>
          <Typography
            sx={{ fontSize: "0.7rem", color: "gray", marginLeft: "20px" }}
          >
            {new Date(notification.postId).toLocaleString()}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default Notifications;
