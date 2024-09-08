import restaurantImage from "./images/restaurant-crystal-ball.png"
import australia from "./images/australia.jpg"
import database_cli from "./images/database-cli.jpg"
import earthquakes from "./images/earthquakes.jpg"
import tomatoes from "./images/tomatoes.jpg"
import robot from "./images/robot.jpg"

export const projects = [
    {
      title: "Restaurant Crystal Ball",
      subtitle: "Full Stack Web Development",
      description:
        `I developed this project using the Yelp Fusion API, JavaScript, Express, HTML, CSS, and Netlify. I taught myself the technologies above to build a responsive and engaging website. 
        This includes making API requests via the backend using Express and dynamically displaying the response on the frontend. 
        I accomplished this by learning about CORS and taught myself the setup and initialization phases when hosting my project on Netlify.`,
      image: restaurantImage,
      link: "https://dapper-blini-07f642.netlify.app/.netlify/functions/server/",
    },
    {
      title: "MUGIC",
      subtitle: "Robotics Programming",
      description:
        `I developed this capstone project in an agile team during my Masters program at UC Irvine. The goal of the project was to use a motion sensor device called MUGIC to communicate and move a Toyota Human Support Robot when a user is playing a musical instrument. 
        This was a unique concept that became a reality. I utilized the ROS framework, Python, Ubuntu, MAX 8, and network protocols (UDP) to build this project. The motion sensor communicates to the MAX 8 software where I built specific modules to send
        movement data from the sensor to a Python script that communicates to the robot via ROS. The project followed weekly sprints where there were a lot of moving parts and iterative cycles. In the end, the project was successful and was used in an actual
        concert provided by UC Irvine's Music Department.`,
      image: robot,
      link: "https://github.com/michaelnguyen26/MUGIC",
    },
    {
      title: "Predicting the Climate in Australia",
      subtitle: "Data Science with Python and MATLAB",
      description:
        `This was my quarter-long final research assignment for an environmental programming course at UC Irvine (ESS). 
        I chose to research the impact of the recent wildfires that erupted in Australia this past winter and late fall of 2019. 
        I used the online data provided from NASA’s FIRMS that uses the MODIS and VIIRS satellite to detect fire hotspot locations. 
        This data was organized into an excel spreadsheet. Using various data science techniques, I acquired the specific latitude and longitude of each fire and stored this information into a 2D array. 
        
        Next, I created projections of the earth by combining a handful of visualization libraries in Python. Together, I plotted the coordinates to see where most of these fires are localized. 
        Additionally, I used the CMIP6 database to retrieve the SSP370 projections for the average precipitation and temperature and focused over Australia to view these changes over time. 
        The results allowed me to make an accurate prediction of where fires in Australia are likely to become frequent in the future.`,
      image: australia,
    },
    {
      title: "Course Registration System",
      subtitle: "Java and MySQL Programming",
      description:
        `I developed this project independently in my Master of Software Engineering program at UC Irvine. 
        I utilized the Java Connector provided by MySQL, and I designed a client command interface with multiple menu items that a user may choose. 
        The commands will execute based on the number chosen. I used various API's in Java to develop this project. 
        This includes Statement and PreparedStatement objects. The PreparedStatement is particularly useful to prevent SQL injections in my database. 
        The queries are also dynamic and are designed around the user input. I also incorporated a HashMap to prevent duplicate registrations. 
        This was achieved by mapping the ID of a student to the courses. The result of this project is a fully functional database using NoSQL design and techniques.`,
      image: database_cli,
    },
    {
      title: "California Earthquakes",
      subtitle: "Data Science with Python and MATLAB",
      description:
        `I developed this program in a data analysis course for ESS at UC Irvine. Here, I demonstrate my ability to process data structures and visualize the results efficiently. 
        This program required live imported data regarding the earthquake in Northridge. 
        The data structures in the program consisted of 2-D arrays and complex control flows that allowed me to pinpoint where potential aftershocks and foreshocks were occurring. 
        Together, the final result is displayed on the right with visualizations and a coastline layout of California.`,
      image: earthquakes,
    },
    {
      title: "Image Processing",
      subtitle: "C Programming",
      description:
        `This program was my final assignment in EECS and the objective was to alter every pixel (RGB) in an image to achieve a desired manipulation. 
        The program tested myself with data structures, algorithms, logic, and analytical skills. 
        The combination of these different skill sets allowed me to achieve a completely different image, where each pixel in the image was modified based on its position in the 2-D array. `,
      image: tomatoes,
    }
  ];