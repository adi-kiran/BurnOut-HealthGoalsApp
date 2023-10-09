import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import StarIcon from "@mui/icons-material/Star";
import TimelineIcon from "@mui/icons-material/Timeline";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function UserCaloriesPage(props) {
  const data01 = [
    {
      name: "Consumed",
      value: 400,
    },
  ];
  const data02 = [
    {
      name: "Burned",
      value: 250,
    },
    {
      name: "Remaining to Goal",
      value: 150,
    },
  ];
  const [foodItems, setFoodItems] = useState({});

  useEffect(() => {
    // Make API call to backend to get food items and their calories from DB.
    // Either ensure API sends in the below format, or format in theis method on receiving it, to ensure it is in the below format
    let data = { Potato: 50, Acai: 20, Cheeseburger: 80 };
    // set the foodItems variable with the key-value data
    setFoodItems(data);
  }, []);

  const [intakeItem, setIntakeItem] = useState("");
  const [intakeCalories, setIntakeCalories] = useState("");
  const handleIntakeItemChange = (event) => {
    setIntakeItem(event.target.value);
    setIntakeCalories(foodItems[event.target.value]);
  };
  const [intakeDate, setIntakeDate] = useState(dayjs());

  const [burntoutCalories, setBurntoutCalories] = useState("");
  const [burnoutDate, setBurnoutDate] = useState(dayjs());

  const handleAddCalorieIntake = (e) => {
    console.log("Intake", intakeItem, intakeCalories, intakeDate);
    // TO DO: UPDATE THE API CALL
    // axios({
    //   method: "POST",
    //   url: "/UPDATE_THIS",
    //   headers: {
    //     Authorization: "Bearer " + props.token,
    //   },
    //   data: {
    //     intakeFoodItem: intakeItem,
    //     intakeCalories: intakeCalories,
    //     intakeDate: intakeDate,
    //   },
    // })
    //   .then((response) => {
    //     const res = response.data;
    //     res.access_token && props.setToken(res.access_token);
    //     // We should be getting the updated total calories consumed for today here as a response, so we can update the graph
    //     // Set the updated value and possibly update the graph
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });
  };

  const handleAddCalorieBurnout = () => {
    console.log("Burnout", burntoutCalories, burnoutDate);
    // TO DO: UPDATE THE API CALL
    // axios({
    //   method: "POST",
    //   url: "/UPDATE_THIS",
    //   headers: {
    //     Authorization: "Bearer " + props.token,
    //   },
    //   data: {
    //     burntouCalories: burntoutCalories,
    //     burnoutDate: burnoutDate,
    //   },
    // })
    //   .then((response) => {
    //     const res = response.data;
    //     res.access_token && props.setToken(res.access_token);
    //     // We should be getting the updated total calories burned out for today here as a response, so we can update the graph
    //     // Set the updated value and possibly update the graph. Or directly update your value, since you know te previous value and submitted value
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });
  };

  return (
    <>
      <Container maxWidth>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 2,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"today today exercise exercise intake intake intake"
                              "week week week week burntout burntout burntout"`,
            paddingTop: "2rem",
          }}
        >
          <Card sx={{ gridArea: "today" }} elevation={5}>
            <CardHeader
              title={"Todays Stats"}
              subheader={"Today's calorie intake and burnout"}
              avatar={<StarIcon />}
            />
            <CardContent>
              <PieChart width={350} height={160}>
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  innerRadius={30}
                  fill="#8884d8"
                />
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "exercise" }} elevation={5}>
            <CardHeader
              title={"Exercise of the Day"}
              subheader={"Today's pick to help you get you fit"}
              avatar={
                <>
                  <SportsMartialArtsIcon />
                  <DirectionsRunIcon />
                  <FitnessCenterIcon />
                </>
              }
            />
          </Card>
          <Card sx={{ gridArea: "intake" }} elevation={5}>
            <CardHeader
              title={"Calorie Intake"}
              subheader={"Enter the food and calories consumed to track it"}
              avatar = {<FastfoodIcon/>}
            />
            <CardContent>
              <form onSubmit={handleAddCalorieIntake}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ paddingBottom: "1rem" }}>
                    <FormControl fullWidth>
                      <InputLabel id="intakeFoodName">
                        Food Item Name
                      </InputLabel>
                      <Select
                        labelId="intakeFoodName"
                        id="demo-simple-select"
                        value={intakeItem}
                        label="Food Item Name"
                        onChange={handleIntakeItemChange}
                        required
                      >
                        {Object.keys(foodItems).map((item) => {
                          return (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextField
                      label="Calories"
                      id="intakeCalorieCount"
                      value={intakeCalories}
                      onChange={(event) => {
                        setIntakeCalories(event.target.value);
                      }}
                      type="number"
                      required
                    />
                    <DatePicker
                      label="Date"
                      value={intakeDate}
                      onChange={(newValue) => setIntakeDate(newValue)}
                      maxDate={dayjs()}
                      required
                    />
                    <Button type="submit" variant="contained" size="large">
                      Add
                    </Button>
                  </Box>
                </Box>
              </form>
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "week" }} elevation={5}>
            <CardHeader
              title={"Weekly Stats"}
              subheader={"Track your performance over the last week"}
              avatar={<TimelineIcon />}
            />
          </Card>
          <Card sx={{ gridArea: "burntout" }} elevation={5}>
            <CardHeader
              title={"Calorie Burn Out"}
              subheader={"Enter the calories burnt out"}
              avatar={<WhatshotIcon />}
            />
            <CardContent>
              <form onSubmit={handleAddCalorieBurnout}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <TextField
                    label="Calories"
                    id="burntoutCalorieCount"
                    value={burntoutCalories}
                    onChange={(event) => {
                      setBurntoutCalories(event.target.value);
                    }}
                    type="number"
                    required
                  />
                  <DatePicker
                    label="Date"
                    value={burnoutDate}
                    onChange={(newValue) => setBurnoutDate(newValue)}
                    maxDate={dayjs()}
                    required
                  />
                  <Button type="submit" variant="contained" size="large">
                    Add
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default UserCaloriesPage;
