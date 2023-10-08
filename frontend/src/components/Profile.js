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
  CardActions
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from "@mui/material/Box";
import SaveIcon from '@mui/icons-material/Save';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const weightCardStyles = {
  card: {
    maxWidth: 500,
    margin: '16px', // 
  },
  weightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  weightText: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  inputField: {
    margin: '8px', // Add margin to the bottom of the input field
    padding: '8px', // Add padding to the input field
  },
  saveButton: {
    padding: '8px 16px', // Add padding to the Save button (vertical padding 8px, horizontal padding 16px)
  },
  mainCard: {
    gridArea: 'input',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    elevation: 5,
  },
};

function Profile(initialName, initialAge, initialWeight, initialHeight, props) {



  const [currentWeight, setCurrentWeight] = useState('150 lbs'); 
  const [currentHeight, setCurrentHeight] = useState('180'); 
  const [currentGoal, setCurrentGoal] = useState('Bulk'); 
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
      <Header {...props} />
      <Container maxWidth>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"profile  input input input"`,
            paddingTop: "2rem"
          }}
        >
          <Card sx={{ gridArea: "profile" }} elevation={5}>
            <CardContent>
              {/* TODO : make profile pictures updatable */}
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Avatar sx={{ width: 100, height: 100 }}>
                  <AccountCircleIcon sx={{ width: 70, height: 70 }} />
                </Avatar>
                <Typography variant="h5" mt={2}>Profile</Typography>
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
                Save
              </Button>
            </CardContent>
          </Card>
          <Card style={weightCardStyles.mainCard} sx={{ gridArea: "input" }} elevation={5}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                gridTemplateRows: "auto",
                gridTemplateAreas: `"weight height goal"
                                    "save save save"`,
                paddingTop: "2rem"
              }}
            >
              <Card sx={{ gridArea: "weight" }} elevation={2} style={weightCardStyles.card}>
                <CardContent>
                  <div style={weightCardStyles.weightContainer}>
                    <IconButton color="primary" aria-label="weighing scale icon">
                      <FitnessCenterIcon fontSize="large" />
                    </IconButton>
                    <Typography style={weightCardStyles.weightText}>
                      {currentWeight}
                    </Typography>
                  </div>
                </CardContent>
                <TextField
                  label="Edit Weight"
                  variant="outlined"
                  fullWidth
                  value={editableWeight}
                  onChange={(e) => setEditableWeight(e.target.value)}
                />
              </Card>
              <Card sx={{ gridArea: "height" }} elevation={2} style={weightCardStyles.card}>
                <CardContent>
                  <div style={weightCardStyles.weightContainer}>
                    <IconButton color="primary" aria-label="weighing scale icon">
                      <FitnessCenterIcon fontSize="large" />
                    </IconButton>
                    <Typography style={weightCardStyles.weightText}>
                      {currentHeight}
                    </Typography>
                  </div>
                </CardContent>
                <TextField
                  label="Edit Weight"
                  variant="outlined"
                  fullWidth
                  value={editableHeight}
                  onChange={(e) => setEditableHeight(e.target.value)}
                />
              </Card>
              <Card sx={{ gridArea: "goal" }} elevation={2} style={weightCardStyles.Card}>
                <CardContent>
                  <div style={weightCardStyles.weightContainer}>
                    <IconButton color="primary" aria-label="weighing scale icon">
                      <FitnessCenterIcon fontSize="large" />
                    </IconButton>
                    <Typography style={weightCardStyles.weightText}>
                      {currentGoal}
                    </Typography>
                  </div>
                </CardContent>
                <TextField
                  label="Edit Weight"
                  variant="outlined"
                  fullWidth
                  value={editableGoal}
                  onChange={(e) => setEditableGoal(e.target.value)}
                />
              </Card>
              <CardActions>
              <card sx={{ gridArea: "save" }} elevation={2}>       
               <Button
                // style={weightCardStyles.saveButton}
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleSaveInput}
              >
                Save
              </Button></card>

            </CardActions>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
