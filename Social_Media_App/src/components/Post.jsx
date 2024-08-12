import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { Star } from "@mui/icons-material";
import NotificationContext from "../context/NotificationContext";

export default function Post({ post, loggedInUser }) {
  const { addNotification } = React.useContext(NotificationContext);
  const [likes, setLikes] = React.useState(post.likes);
  const [isLiked, setIsLiked] = React.useState(false);

  const [comments, setComments] = React.useState(post.comments || []);
  const [commentText, setCommentText] = React.useState("");
  const [showComments, setShowComments] = React.useState(false);

  const handleLike = () => {
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setIsLiked(!isLiked);

    if (!isLiked) {
      addNotification({
        type: "like",
        message: `${loggedInUser.username}: liked your post!`,
        postId: post.timestamp,
      });
    }

    // Retrieve all users from local storage
    const allUsers = JSON.parse(sessionStorage.getItem("allUsers"));

    // Find the logged-in user in the users array
    const userIndex = allUsers.findIndex(
      (user) => user.username === loggedInUser.username
    );

    if (userIndex !== -1) {
      const updatedPosts = allUsers[userIndex].posts.map((p) =>
        p.timestamp === post.timestamp ? { ...p, likes: updatedLikes } : p
      );
      allUsers[userIndex].posts = updatedPosts;
      sessionStorage.setItem("allUsers", JSON.stringify(allUsers));

      // Updating logged in user in sessionStorage
      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify(allUsers[userIndex])
      );
    }
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentPost = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      user: loggedInUser.username,
      comment: commentText,
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentText("");

    // Update the comments in sessionStorage
    const allUsers = JSON.parse(sessionStorage.getItem("allUsers"));
    const userIndex = allUsers.findIndex(
      (user) => user.username === loggedInUser.username
    );

    if (userIndex !== -1) {
      const updatedPosts = allUsers[userIndex].posts.map((p) =>
        p.timestamp === post.timestamp ? { ...p, comments: updatedComments } : p
      );
      allUsers[userIndex].posts = updatedPosts;
      sessionStorage.setItem("allUsers", JSON.stringify(allUsers));

      // Updating logged in user in sessionStorage
      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify(allUsers[userIndex])
      );
    }

    // Notify the post owner
    addNotification({
      type: "comment",
      message: `${loggedInUser.username}: commented on your post!`,
      postId: post.timestamp,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        maxWidth: 700,
        "--Card-radius": (theme) => theme.vars.radius.xs,
        marginY: "auto",
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ p: 0.5, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography fontWeight="lg">{post.username}</Typography>
        {loggedInUser.username === post.username && (
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ ml: "auto" }}
          >
            <Star sx={{ color: "orange" }} />
          </IconButton>
        )}
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img src={post.image} alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", mx: -1 }}
      >
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            onClick={handleLike}
          >
            <FavoriteBorder sx={{ fill: `${isLiked ? "red" : ""}` }} />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 0.5, mx: "auto" }}
        ></Box>
        <Box sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          {likes} likes, {comments.length} comments
        </Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            {post.username}
          </Link>{" "}
          {post.text}
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: "text.tertiary" }}
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide comments" : "View comments"}
        </Link>
        {showComments ? (
          <Box sx={{ marginBottom: "8px" }}>
            {comments.map((comment, index) => (
              <Box key={index} sx={{ marginBottom: "4px" }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {comment.user}:
                  <Typography sx={{ fontWeight: "500", marginLeft: "3px" }}>
                    {comment.comment}
                  </Typography>
                </Typography>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  {new Date(comment.timestamp).toLocaleString()}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          ""
        )}

        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        >
          {new Date(post.timestamp).toLocaleString()}
        </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          value={commentText}
          onChange={handleCommentChange}
          sx={{ flex: 1, px: 0, "--Input-focusedThickness": "0px" }}
        />
        <Link underline="none" role="button" onClick={handleCommentPost}>
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
