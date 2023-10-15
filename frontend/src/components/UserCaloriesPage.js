import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  ListItem,
  List,
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
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import TodayIcon from "@mui/icons-material/Today";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import axios from "axios";

function UserCaloriesPage(props) {
  const [todayCaloriesConsumed, setTodayCaloriesConsumed] = useState(500);
  const [todayCaloriesBurned, setTodayCaloriesBurned] = useState(200);
  const [todayGoal, setTodayGoal] = useState(300);
  const [events, setEvents] = useState([]);
  const COLORS = ["#8b0e0e", "#97a3a2"];
  const [foodItems, setFoodItems] = useState({});
  const [dietHistory, setDietHistory] = useState([]);
  const [weekHistory, setWeekHistory] = useState([]);

  useEffect(() => {
    // Make API call to backend to get food items and their calories from DB.
    // Either ensure API sends in the below format, or format in theis method on receiving it, to ensure it is in the below format
    let data = { Potato: 50, Acai: 20, Cheeseburger: 80 };
    // set the foodItems variable with the key-value data
    setFoodItems(data);
    // TO DO: UPDATE THIS API CALL TO PERFORM THE ABOVE FUNCTIONALITY AND REMOVE THE ABOVE LINES
    // axios({
    //   method: "GET",
    //   url: "/GET_FOOD_ITEMS",
    //   headers: {
    //     Authorization: "Bearer " + props.token,
    //   },
    // })
    //   .then((response) => {
    //     const res = response.data;
    //     setFoodItems(res);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });

    // Make API call to backend to get last 7 days history from DB.
    // Either ensure API sends in the below format, or format in theis method on receiving it, to ensure it is in the below format
    let dietHistoryAPIResp = [
      {
        dayIndex: 0,
        date: "10/13/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: false,
        burntCalories: 1200,
      },
      {
        dayIndex: 1,
        date: "10/12/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: true,
        burntCalories: 1000,
      },
      {
        dayIndex: 2,
        date: "10/11/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: false,
        burntCalories: 900,
      },
      {
        dayIndex: 3,
        date: "10/10/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: true,
        burntCalories: 400,
      },
      {
        dayIndex: 4,
        date: "10/9/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: false,
        burntCalories: 500,
      },
      {
        dayIndex: 5,
        date: "10/8/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: false,
        burntCalories: 500,
      },
      {
        dayIndex: 6,
        date: "10/7/2023",
        foodConsumed: [
          {
            item: "Chicken Salad",
            calories: 500,
          },
          {
            item: "Onion Soup",
            calories: 300,
          },
          {
            item: "Potato Salad",
            calories: 500,
          },
          {
            item: "Cheese Burger",
            calories: 500,
          },
        ],
        caloriesConsumed: 1800,
        exceededDailyLimit: true,
        burntCalories: 700,
      },
    ];
    // set the dietHistory variable with the key-value data
    setDietHistory(dietHistoryAPIResp);
    // Generate weekHistoryData from the received dietHistoryAPIResp using the below code
    let weekHistoryData = dietHistoryAPIResp.map((dayObj) => {
      return {
        date: dayObj.date,
        consumedCalories: dayObj.caloriesConsumed,
        burntCalories: dayObj.burntCalories,
      };
    });
    // set the weekHistory variable with the generated data
    setWeekHistory(weekHistoryData);

    // TO DO: UPDATE THIS API CALL TO PERFORM THE ABOVE FUNCTIONALITY AND REMOVE THE ABOVE LINES
    // axios({
    //   method: "GET",
    //   url: "/GET_DIET_HISTORY",
    //   headers: {
    //     Authorization: "Bearer " + props.token,
    //   },
    // })
    //   .then((response) => {
    //     const res = response.data;
    //     setDietHistory(res);
    //     let weekHistoryData = dietHistoryAPIResp.map((dayObj) => {
    //       return {
    //         date: dayObj.date,
    //         consumedCalories: dayObj.caloriesConsumed,
    //         burntCalories: dayObj.burntCalories,
    //       };
    //     });
    //     setWeekHistory(weekHistoryData);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });
    // Make API call to backend to get food items and their calories from DB.
    // Either ensure API sends in the below format, or format in theis method on receiving it, to ensure it is in the below format

    let eventsData = [
      {
        eventName: "Yoga",
        date: "10/19/2023",
      },
      {
        eventName: "Swimming",
        date: "10/20/2023",
      },
    ];
    // set the foodItems variable with the key-value data
    setEvents(eventsData);
    // TO DO: UPDATE THIS API CALL TO PERFORM THE ABOVE FUNCTIONALITY AND REMOVE THE ABOVE LINES
    // axios({
    //   method: "GET",
    //   url: "/GET_USERS_EVENTS",
    //   headers: {
    //     Authorization: "Bearer " + props.token,
    //   },
    // })
    //   .then((response) => {
    //     const res = response.data;
    //     setEvents(res);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });
  }, []);

  const [intakeItem, setIntakeItem] = useState("");
  const [intakeCalories, setIntakeCalories] = useState("");
  const handleIntakeItemChange = (event) => {
    setIntakeItem(event.target.value);
    setIntakeCalories(foodItems[event.target.value]);
  };
  const [intakeDate, setIntakeDate] = useState(dayjs());
  const handleAddCalorieIntake = (e) => {
    console.log("Intake", intakeItem, intakeCalories, intakeDate);
    e.preventDefault()
    console.log(props.state.token)
    // TO DO: UPDATE THE API CALL
    axios({
      method: "POST",
      url: "/caloriesConsumed",
      headers: {
        Authorization: "Bearer " + props.state.token,
      },
      data: {
        intakeFoodItem: intakeItem,
        intakeCalories: intakeCalories,
        intakeDate: intakeDate,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const [burntoutCalories, setBurntoutCalories] = useState("");
  const [burnoutDate, setBurnoutDate] = useState(dayjs());
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
                              "week week week week burntout burntout burntout"
                              "week week week week events events events"
                              "hist hist hist hist hist hist hist"`,
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
              {/* <ResponsiveContainer width="100%" height="100%"> */}
              <PieChart width={375} height={160}>
                <Pie
                  data={[
                    { name: "Calories Burned", value: todayCaloriesBurned },
                    {
                      name: "Calories to goal",
                      value: todayGoal - todayCaloriesBurned,
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={60}
                  fill="#8b0e0e"
                >
                  {COLORS.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Pie
                  data={[
                    { name: "Calories Consumed", value: todayCaloriesConsumed },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  fill="#19229e"
                />
                <Tooltip />
                <Legend layout="vertical" verticalAlign="top" align="right" />
              </PieChart>
              {/* </ResponsiveContainer> */}
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "exercise" }} elevation={5}>
            <CardHeader
              title={"Exercise of the Day"}
              subheader={"Today's pick to help you get you fit"}
              avatar={<FitnessCenterIcon />}
            />
          </Card>
          <Card sx={{ gridArea: "intake" }} elevation={5}>
            <CardHeader
              title={"Calorie Intake"}
              subheader={"Enter the food and calories consumed to track it"}
              avatar={<FastfoodIcon />}
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
          <Card sx={{ gridArea: "events" }} elevation={5}>
            <CardHeader
              title={"Upcoming Events"}
              subheader={"These are the upcoming events you are enrolled in"}
              avatar={
                <>
                  <SportsMartialArtsIcon />
                  <DirectionsRunIcon />
                </>
              }
            />
            <CardContent>
              <List>
                {events.map((eventObj, ind) => {
                  return (
                    <ListItem
                      key={`item-${ind}`}
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div>{eventObj.eventName}</div>
                      <div>{eventObj.date}</div>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
          <Card sx={{ gridArea: "week" }} elevation={5}>
            <CardHeader
              title={"Weekly Stats"}
              subheader={"Track your performance over the last week"}
              avatar={<TimelineIcon />}
            />
            <CardContent>
              <LineChart
                width={800}
                height={300}
                data={weekHistory}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="consumedCalories"
                  stroke="#19229e"
                />
                <Line
                  type="monotone"
                  dataKey="burntCalories"
                  stroke="#8b0e0e"
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </CardContent>
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
          <Card sx={{ gridArea: "hist" }} elevation={5}>
            <CardHeader
              title={"Diet Tracker"}
              subheader={"This Week's Calories Consumed"}
              avatar={
                <>
                  <LunchDiningIcon />
                  <LocalCafeIcon />
                </>
              }
            />
            <CardContent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 2,
                gridTemplateRows: "auto",
                gridTemplateAreas: `"day-0 day-1 day-2 day-3 day-4 day-5 day-6"`,
                paddingTop: "2rem",
              }}
            >
              {dietHistory.map((day, index) => {
                return (
                  <Card sx={{ gridArea: `day-${day.dayIndex}` }} elevation={5}>
                    <CardHeader title={day.date} avatar={<TodayIcon />} />
                    <CardContent>
                      <div
                        style={{
                          color: day.exceededDailyLimit ? "red" : "green",
                          textAlign: "center",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                        }}
                      >{`Total Calories : ${day.caloriesConsumed}`}</div>
                      <div style={{ textAlign: "center", fontWeight: "bold" }}>
                        Food Consumed
                      </div>
                      <div>
                        <List>
                          {day.foodConsumed.map((itemObj, ind) => {
                            return (
                              <ListItem
                                key={`item-${ind}`}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div>{itemObj.item}</div>
                                <div>{itemObj.calories}</div>
                              </ListItem>
                            );
                          })}
                        </List>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default UserCaloriesPage;
