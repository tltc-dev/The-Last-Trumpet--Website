import image1 from "../../public/assets/1.png";
import image2 from "../../public/assets/2.jpg";
import image3 from "../../public/assets/3.jpg";
import image4 from "../../public/assets/4.jpg";
import image5 from "../../public/assets/5.jpg";

export default image1;

export const images = [
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image5,
  image1,
  image2,
];

export const event = [
  {
    id: 1,
    title: "Sunday Service",
    image: image3,
    date: "Every Sunday",
    time: "10:00 AM - 11:30 AM",
    location: "123 Church St, Tacoma, WA",
    description:
      "Join us for our weekly Sunday service where we come together to worship, pray, and hear an inspiring message.",
  },
  {
    id: 2,
    title: "Bible Study",
    image: image4,
    date: "Wednesdays",
    time: "7:00 PM - 8:30 PM",
    location: "Online & In-Person",
    description:
      "Dive deeper into the Word of God with our midweek Bible study sessions. All are welcome!",
  },
  {
    id: 3,
    title: "Community Outreach",
    image: image3,
    date: "First Saturday of the Month",
    time: "9:00 AM - 12:00 PM",
    location: "Various Locations",
    description:
      "Make a difference in our community by participating in our monthly outreach programs.",
  },
  {
    id: 4,
    title: "Youth Group",
    image: image4,
    date: "Fridays",
    time: "6:00 PM - 8:00 PM",
    location: "Youth Center",
    description:
      "A fun and engaging group for teens to connect, learn, and grow in their faith.",
  },
  {
    id: 5,
    title: "Worship Night",
    image: image5,
    date: "Last Friday of the Month",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description:
      "An evening of powerful worship and praise. Come and experience the presence of God with us.",
    host: [
      {
        profile: image4,
        name: "Jone",
      },
      {
        profile: image5,
        name: "Ramesh Devidiga",
      },
    ],
  },
  {
    id: 6,
    title: "Prayer Meeting",
    image: image3,
    date: "Tuesdays",
    time: "6:30 PM - 7:30 PM",
    location: "Prayer Room",
    description:
      "Join us for a time of focused prayer and intercession for our church, community, and world.",
  },
  {
    id: 7,
    title: "Men's Fellowship",
    image: image4,
    date: "Second Saturday of the Month",
    time: "8:00 AM - 10:00 AM",
    location: "Fellowship Hall",
    description: "A time for",
  },
];

export const faqs = [
  {
    question: "What are the service times?",
    answer:
      "Our Sunday services are held at 10:00 AM and 6:00 PM. We also have a midweek service on Wednesdays at 7:00 PM.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 123 Church St, Tacoma, WA. You can find us easily with ample parking available.",
  },
  {
    question: "Do you have programs for children and youth?",
    answer:
      "Yes, we have a vibrant children's ministry during our Sunday services and a youth group that meets on Fridays at 6:00 PM.",
  },
  {
    question: "How can I get involved?",
    answer:
      "We encourage you to join one of our small groups, volunteer in our ministries, or participate in our community outreach programs.",
  },
  {
    question: "Do you offer online services?",
    answer:
      "Yes, we stream our Sunday services live on our website and social media platforms for those who cannot attend in person.",
  },
];
