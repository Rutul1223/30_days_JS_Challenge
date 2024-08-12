import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    profileImage: "",
    posts: user.posts || [],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load user data from sessionStorage (or fetch from an API)
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {
      name: "John Doe",
      email: "johndoe@example.com",
    };
    setUserData(storedUser);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserData((prevData) => ({
        ...prevData,
        profileImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
    setIsEditing(false);
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Your Profile
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "auto",
          marginBottom: "20px",
        }}
      >
        <Avatar
          src={userData.profileImage || "/static/images/avatar/1.jpg"}
          alt={userData.name}
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        {isEditing && (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
            <PhotoCamera />
          </IconButton>
        )}
      </Box>
      <Box sx={{ maxWidth: "500px", margin: "auto" }}>
        <TextField
          id="outlined-helperText"
          name="name"
          value={userData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: !isEditing,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: !isEditing,
          }}
        />
        {isEditing ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ marginTop: "20px" }}
          >
            Save
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleEditToggle}
            sx={{ marginTop: "20px" }}
          >
            Edit
          </Button>
        )}
      </Box>
      <Box
        sx={{
          marginY: "50px",
          borderTop: "1px solid lightgrey",
          boxShadow: "0px 5px 5px rgb(0,0,0,0.2) inset",
          width: "100%",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem" }}>Your Posts</Typography>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {userData.posts.map((post, index) => (
            <img
              key={index}
              src={post.image}
              alt={`post-${index}`}
              style={{ maxWidth: "40%", height: "auto", marginTop: "20px" }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
