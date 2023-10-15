import pymongo

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["test"]  # Replace with your database name
collection = db["events"]  # Replace with your collection name

# Data to be inserted
cards = [
{
    "title": "Yoga",
    "imageUrl": "../static/img/yoga.jpg",
    "description": "New to Yoga? You are at the right place! Learn easy yoga poses to build strength, flexibility and mental clarity.",
    "eventInfo": "Join Anvita & Tejashree for this 30 minute Gentle Yoga session, which has an emphasis on asana alignments, breathing techniques and mindfulness. This class will focus on the Core and abdominal region to help build strength in the midsection of the body and the lower back. Through the asanas in this class, you will build endurance, stamina, and overall agility. Main Practice: 1. Vayunishkasana 2. Surya Namaskar - 3 Rounds 3. Ardha Uttanasana + Ardha Utkatasana 4. Anjaneyasana Lateral Stretch 5. Eka Pada Adho Mukha - Knee to Elbow 6. Parivrtta Janu Shrishasana 7. Supta Dandasana + Pada Sanchalanasana",
    "eventLocation": "Yoga Studio",
    "eventTime": "10:00 AM - 11:30 AM",
    "eventDate": "October 15, 2023"
},
{
    "title": "Swimming",
    "imageUrl": "../static/img/swim.jpeg",
    "description": "Swimming is an activity that burns lots of calories, is easy on the joints, supports your weight, builds muscular strength and endurance.",
    "eventInfo": "There are plenty of reasons to swim! Here's a list that should get you motivated. There's no ground impact when you swim, and so you protect the joints from stress and strain. Water aerobics classes are also desirable for this reason because even if you do jump and hit the bottom of the pool, you do so with less force because you're buoyant in the water. Can be continued for a lifetime. Builds muscle mass. In a study of men who completed an eight-week swimming program, there was a 23.8% increase in the triceps muscle. Builds cardiorespiratory fitness. Swimming improves endurance. In one study of sedentary middle-aged men and women who did swim training for 12 weeks, maximal oxygen consumption improved 10% and stroke volume (the amount of blood pumped with each beat which indicates heart strength) improved as much as 18%.",
    "eventLocation": "Carmichael Pool",
    "eventTime": "11:30 AM - 12:30 PM",
    "eventDate": "November 20, 2023"
},
{
    "title": "Abs Smash",
    "imageUrl": "../static/img/R31.jpg",
    "description": "Whether your goal is a six-pack or just a little more definition around your midsection, we will help get you there!",
    "eventInfo": "Bolt on these targeted abs workouts to your main session to sculpt a rock-hard six-pack. If you’re looking to train your abs, the good news is that there are a huge variety of exercises that will help you achieve that goal. Main Practice: 1. Plank 2. Single-leg Romanian deadlift 3. Squats 4. Overhead presses 5. Deadlifts 6. Push ups 7. Pull ups ",
    "eventLocation": "Carmichael Gym Studio 1",
    "eventTime": "7:00 PM - 8:00 PM",
    "eventDate": "Decemver 2, 2023"
},
{
    "title": "Walk Fitness",
    "imageUrl": "../static/img/walk.jpg",
    "description": "Join us to get the best of the walk workouts to burn more calories than a stroll around the park.",
    "eventInfo": "Walking can be as good as a workout, if not better, than running walking is a really good form of exercise and can help you reach your fitness and weight-loss goals. Explore your environment on foot. Notice what is going on around you and you'll find you never really walk the same way twice. There are always new things to see. Find pleasant places to walk. Look for walking paths, greenways, and pedestrian streets to enjoy. Bring along your family and friends. Walking together is a great way to connect with others. Walk instead of drive for a few trips each week. Walk part of your commute to work or school. Leave the car behind or get off a stop early on public transit. Walk to the store for small items. You'll save money and have a purpose for getting in your daily steps. Try a charity walk to raise money for a cause. Put your steps to good use.",
    "eventLocation": "Pullen Park",
    "eventTime": "5:30 AM - 6:30 AM",
    "eventDate": "Octover 30, 2023"
},
{
    "title": "Belly Burner",
    "imageUrl": "../static/img/R21.jpg",
    "description": "Join Sasha for a 30-minute no-equipment workout that will work on that stubborn belly fat.",
    "eventInfo": "Who doesn't want to be able to slip into a pair of jeans without having to deal with a muffin top? Losing belly fat is a surefire way to improve your health. Join us for some great core-focused exercises that will torch fat all over the body, resulting in a strong and more chiseled core. Main Practice: 1. Mountain Climbers 2. Burpees 3. Turkish Get-up 4. Medicine Ball Burpees 5. Sprawls 6. Side to Side Slams 7. Russian Twists ",
    "eventLocation": "Carmichael Gym Studio 2",
    "eventTime": "2:00 PM - 3:00 PM",
    "eventDate": "November 3, 2023"
},
{
    "title": "HRX Fitness",
    "imageUrl": "../static/img/R23.jpg",
    "description": "Shake it off and groove to some fun tracks with Tom and his squad in this dance fitness session!",
    "eventInfo": "Inspired by Hrithik Roshan’s fitness journey, the HRX Workout is based on a strength training module.  The HRX Workout primarily focuses on your shoulders, quads, core, traps and deltoid muscles. It is designed keeping in mind all age groups and involves working on specific muscles using weights and various movements. These include Primal Movements, Zero Momentum Reps and Compound Movements. It also involves core activation and helps build body strength. At HRX, it’s our mission to motivate and enable you to work on your mind and body, making sure you can be the best version of you. Not just a brand, HRX is a mission that helps us enable and support people to be the fittest, happiest and most confident version of themselves.",
    "eventLocation": "Carmichael Gym",
    "eventTime": "8:00 AM - 9:00 AM",
    "eventDate": "November 12, 2023"
},
{
    "title": "Dance Fitness",
    "imageUrl": "../static/img/R22.jpg",
    "description": "It's time to push yourself to the limit! Join us for some intense workout sessions.",
    "eventInfo": "Simply put, dance cardio is utilizing different types of dance to exercise your body. Build new muscle mass and strip away belly fat fast to reveal a lean, hard physique in 28 days. There are many types of dance cardio programs to choose from, so you can change your routine as often as you want to. 1. Zumba Dancing 2. Bollywood dancing 3. Hula Hoop Dancing 4. Salsa",
    "eventLocation": "Carmichael Gym",
    "eventTime": "10:00 AM - 11:30 AM",
    "eventDate": "December 17, 2023"
},
{
    "title": "Core Conditioning",
    "imageUrl": "../static/img/R32.jpg",
    "description": "Develop core muscle strenngth that improves posture and contributes to a trimmer appearance.",
    "eventInfo": "Develop a strong core for more than the six-pack abs that will hopefully peak through. Use core conditioning to improve your overall athletic performance and life—the flat abs are just a bonus. Main Practice: 1. Plank 2. Reverse Crunch 3. Bird Dog Crunch 4. Glute Bridge 5. Russian Twist 6. Towel Plank knee-inn 7. Bicycle crunch ",
    "eventLocation": "Carmichael Gym",
    "eventTime": "5:00 PM - 6:15 PM",
    "eventDate": "December 19, 2023"
},
{
    "title": "Gym",
    "imageUrl": "../static/img/R11.jpg",
    "description": "A collection of Dumbbells workouts by skilled trainers specific to particular muscle group.",
    "eventInfo": "A Four-Week Gym Workout Routine To Get Big And Lean Build new muscle mass and strip away belly fat fast to reveal a lean, hard physique in 28 days. All four weekly workouts are made up of five moves, which you’ll perform as straight sets, so you’ll simply work through moves 1 to 5 in order. That’s it! 1. Chest And Triceps 2. Back And Biceps 3. Legs And Abs 4. Back And Shoulders",
    "eventLocation": "Carmichael Gym",
    "eventTime": "11:00 AM - 1:00 PM",
    "eventDate": "October 23, 2023"
}
]

# Insert data into MongoDB
collection.insert_many(cards)

print("Data inserted successfully!")
