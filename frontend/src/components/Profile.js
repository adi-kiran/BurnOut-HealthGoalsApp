import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  TextField,
  Avatar,
  IconButton,
  CardActions,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const weightCardStyles = {
  weightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  weightText: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
};

function Profile(initialName, initialAge, initialWeight, initialHeight, props) {
  const [currentWeight, setCurrentWeight] = useState("150");
  const [currentHeight, setCurrentHeight] = useState("180");
  const [currentGoal, setCurrentGoal] = useState("Bulk");
  const [editableWeight, setEditableWeight] = useState(currentWeight);
  const [editableHeight, setEditableHeight] = useState(currentHeight);
  const [editableGoal, setEditableGoal] = useState(currentGoal);

  const handleSaveInput = () => {
    setCurrentWeight(editableWeight);
    setCurrentHeight(editableHeight);
    setCurrentGoal(editableGoal);
  };

  initialName = "John Doe";
  initialAge = 30;
  initialWeight = 160;
  initialHeight = 6.0;

  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [weight, setWeight] = useState(initialWeight);
  const [height, setHeight] = useState(initialHeight);

  const [profileData, setProfileData] = useState(null);

  const handleSave = () => {
    // You can implement the logic here to save the values
    console.log("Saving values:", name, age, weight, height);
  };
  function getData() {
    console.log(props.token);
    axios({
      method: "GET",
      url: "/profile",
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((response) => {
        const res = response.data;
        res.access_token && props.setToken(res.access_token);
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <>
      <Container maxWidth>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"profile  input input input"
                                "profile  . . ."`,
            paddingTop: "2rem",
          }}
        >
          <Card sx={{ gridArea: "profile" }} elevation={5}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* TODO : make profile pictures updatable */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingBottom: "5px",
                }}
              >
                <Avatar sx={{ width: 100, height: 100 }}>
                  <AccountCircleIcon sx={{ width: 70, height: 70 }} />
                </Avatar>
                <Typography variant="h5" mt={2}>
                  Profile
                </Typography>
              </Box>
              <Box mb={2}>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Weight (lbs)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Height (ft)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  fullWidth
                />
              </Box>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Update  
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "input" }} elevation={5}>
            <CardHeader
            title={"Your Goals"}
            subheader={"Update your goals here"}
            />
            {/* <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            > */}
            <CardContent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                gridTemplateRows: "auto",
                gridTemplateAreas: `"targetWeight targetCalories targetGoal"
                                    ". saveButton ."`,
                paddingTop: "2rem",
              }}
            >
                <Card
                  sx={{ gridArea: "targetWeight" }}
                  elevation={2}
                >
                  <CardContent>
                    <div style={weightCardStyles.weightContainer}>
                      <IconButton
                        color="primary"
                        aria-label="weighing scale icon"
                      >
                        <FitnessCenterIcon fontSize="large" />
                      </IconButton>
                      <Typography style={weightCardStyles.weightText}>
                        {currentWeight}
                      </Typography>
                    </div>
                  </CardContent>
                  <TextField
                    label="Target Weight"
                    variant="outlined"
                    fullWidth
                    value={editableWeight}
                    onChange={(e) => setEditableWeight(e.target.value)}
                  />
                </Card>
                <Card
                  sx={{ gridArea: "targetCalories" }}
                  elevation={2}
                >
                  <CardContent>
                    <div style={weightCardStyles.weightContainer}>
                      <IconButton
                        color="primary"
                        aria-label="weighing scale icon"
                      >
                        <WhatshotIcon fontSize="large" />
                      </IconButton>
                      <Typography style={weightCardStyles.weightText}>
                        {currentHeight}
                      </Typography>
                    </div>
                  </CardContent>
                  <TextField
                    label="Daily Calories Burn Goal"
                    variant="outlined"
                    fullWidth
                    value={editableHeight}
                    onChange={(e) => setEditableHeight(e.target.value)}
                  />
                </Card>
                <Card
                  sx={{ gridArea: "targetGoal" }}
                  elevation={2}
                >
                  <CardContent>
                    <div style={weightCardStyles.weightContainer}>
                      <IconButton
                        color="primary"
                        aria-label="weighing scale icon"
                      >
                        <FitnessCenterIcon fontSize="large" />
                      </IconButton>
                      <Typography style={weightCardStyles.weightText}>
                        {currentGoal}
                      </Typography>
                    </div>
                  </CardContent>
                  <TextField
                    label="Goal"
                    variant="outlined"
                    fullWidth
                    value={editableGoal}
                    onChange={(e) => setEditableGoal(e.target.value)}
                  />
                </Card>
              <Button
                sx={{ gridArea: "saveButton" }}
                variant="contained"
                color="primary"
                // startIcon={<SaveIcon />}
                onClick={handleSaveInput}
                maxWidth
              >
                Update
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
