import * as React from 'react';
import { useState } from 'react'; // Import useState
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [{
    title: "Yoga",
    imageUrl: "../static/img/yoga.jpg",
    description: "New to Yoga? You are at the right place! Learn easy yoga poses to build strength, flexibility and mental clarity."
},
{
    title: "Swimming",
    imageUrl: "../static/img/yoga.jpg",
    description: "Swimming is an activity that burns lots of calories, is easy on the joints, supports your weight, builds muscular strength and endurance."
},
{
    title: "Abs Smash",
    imageUrl: "../static/img/yoga.jpg",
    description: "Whether your goal is a six-pack or just a little more definition around your midsection, we will help get you there!"
},
{
    title: "Walk Fitness",
    imageUrl: "../static/img/yoga.jpg",
    description: "Join us to get the best of the walk workouts to burn more calories than a stroll around the park."
},
{
    title: "Belly Burner",
    imageUrl: "../static/img/yoga.jpg",
    description: "Join Sasha for a 30-minute no-equipment workout that will work on that stubborn belly fat."
},
{
    title: "HRX Fitness",
    imageUrl: "../static/img/yoga.jpg",
    description: "Shake it off and groove to some fun tracks with Tom and his squad in this dance fitness session!"
},
{
    title: "Dance Fitness",
    imageUrl: "../static/img/yoga.jpg",
    description: "It's time to push yourself to the limit! Join us for some intense workout sessions."
},
{
    title: "Core Conditioning",
    imageUrl: "../static/img/yoga.jpg",
    description: "Develop core muscle strenngth that improves posture and contributes to a trimmer appearance."
},
{
    title: "Gym",
    imageUrl: "../static/img/yoga.jpg",
    description: "A collection of Dumbbells workouts by skilled trainers specific to particular muscle group."
}];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Events() {

    // Step 2: Create state for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Step 3: Function to open and close the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Events
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Start your wellness journey with us today!
                            Discover yoga, swimming, gym, and more. Click "More Information" for event details, or add your own to our vibrant community.
                        </Typography>
                        {/* <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Create your own event</Button>
                        </Stack> */}
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((event) => (
                            <Grid item key={event} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        //image={event.imageUrl}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {event.title}
                                        </Typography>
                                        <Typography>
                                            {event.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={handleOpenModal}>More Info</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Modal open={isModalOpen} onClose={handleCloseModal}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <Typography variant="h6" component="div">
                                Modal Content
                            </Typography>
                            <Typography sx={{ mt: 2 }}>This is your modal content.</Typography>
                            <Button onClick={handleCloseModal}>Close Modal</Button>
                        </Box>
                    </Modal>
                </Container>
                {/* Step 4: Render the modal */}

            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}