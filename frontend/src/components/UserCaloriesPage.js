import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
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
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Header from "./Header";

function UserCaloriesPage() {
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

  return (
    <>
      <Header></Header>
      <Container maxWidth>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 2,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"today today exercise exercise intake intake intake"
                              "week week week week burntout burntout burntout"`,
            paddingTop: "2rem"
          }}
        >
          <Card sx={{ gridArea: "today" }} elevation={5}>
            <CardHeader title={"Todays Stats"} />
          </Card>
          <Card sx={{ gridArea: "exercise" }} elevation={5}>
            <CardHeader title={"Exercise of the Day"} />
          </Card>
          <Card sx={{ gridArea: "intake" }} elevation={5}>
            <CardHeader
              title={"Calorie Intake"}
              subheader={"Enter the food and calories consumed to track it"}
              avatar = {<FastfoodIcon/>}
            />
            <CardContent>
              <Box sx={{ paddingBottom: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="intakeFoodName">Food Item Name</InputLabel>
                  <Select
                    labelId="intakeFoodName"
                    id="demo-simple-select"
                    value={intakeItem}
                    label="Food Item Name"
                    onChange={handleIntakeItemChange}
                  >
                    {Object.keys(foodItems).map((item) => {
                      return <MenuItem value={item}>{item}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <TextField
                    label="Calories"
                    id="intakeCalorieCount"
                    value={intakeCalories}
                    onChange={(event) => {
                      setIntakeCalories(event.target.value);
                    }}
                    type="number"
                  />
                </Box>
                <Box>
                  <DatePicker
                    label="Date"
                    value={intakeDate}
                    onChange={(newValue) => setIntakeDate(newValue)}
                    maxDate={dayjs()}
                  />
                </Box>
                <Box>
                  <Button variant="contained" size="large">
                    Add
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "week" }} elevation={5}>
            <CardHeader title={"Weekly Stats"} />
          </Card>
          <Card sx={{ gridArea: "burntout" }} elevation={5}>
            <CardHeader
              title={"Calorie Burn Out"}
              subheader={"Enter the calories burnt out"}
              avatar = {<WhatshotIcon/>}
            />
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <TextField
                    label="Calories"
                    id="burntoutCalorieCount"
                    value={burntoutCalories}
                    onChange={(event) => {
                      setBurntoutCalories(event.target.value);
                    }}
                    type="number"
                  />
                </Box>
                <Box>
                  <DatePicker
                    label="Date"
                    value={burnoutDate}
                    onChange={(newValue) => setBurnoutDate(newValue)}
                    maxDate={dayjs()}
                  />
                </Box>
                <Box>
                  <Button variant="contained" size="large">
                    Add
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default UserCaloriesPage;
