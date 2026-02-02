import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [day,setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }))
  const [time,setTime] = useState()
  const messmenu = {
  Monday: {
    breakfast: [
      "Idli (3)",
      "Vada (2)",
      "Chutney",
      "Sambar",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee",
      "Cornflakes",
      "Milk with Bournvita",
      "Sprouts - Moong"
    ],
    lunch: [
      "Wheat Chapati",
      "Cabbage Dry",
      "Mixed Pulses Gravy",
      "Rice (White & Boiled)",
      "Dal Tadka",
      "Sambar",
      "Curd",
      "Salad",
      "Ice Cream (Butterscotch)"
    ],
    snacks: [
      "Dabeli (2)",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Paneer Do Pyaza",
      "Veg Dry",
      "Lemon Rice",
      "Rice (White & Boiled)",
      "Dal Makhni",
      "Rasam",
      "Curd",
      "Banana",
      "Salad"
    ]
  },

  Tuesday: {
    breakfast: [
      "Poori",
      "Bhaji",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee",
      "Milk with Bournvita",
      "Sprouts - Peanut"
    ],
    lunch: [
      "Wheat Chapati",
      "Beetroot Palya",
      "Rajma Masala",
      "Veg Pulao",
      "Rice (White & Boiled)",
      "Yellow Dal",
      "Sambar",
      "Curd",
      "Salad",
      "Gulab Jamun",
      "Papad"
    ],
    snacks: [
      "Bhel Puri",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Bhindi Fry",
      "Parwal Gravy",
      "Rice (White & Boiled)",
      "Dal Fry",
      "Rasam",
      "Curd",
      "Muskmelon",
      "Salad"
    ]
  },

  Wednesday: {
    breakfast: [
      "Upma",
      "Shira",
      "Chutney",
      "Bread",
      "Butter",
      "Jam",
      "Cornflakes",
      "Tea/Coffee",
      "Milk with Bournvita",
      "Sprouts - Chana (Black/Kabuli)"
    ],
    lunch: [
      "Methi Poori",
      "Aloo Shimla",
      "Kabuli Chana Masala",
      "Rice (White & Boiled)",
      "Sambar",
      "Dal Fry",
      "Chaas",
      "Salad",
      "Ice Cream (Chocolate)"
    ],
    snacks: [
      "Dhokla",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Chilly Paneer",
      "Aloo Matar Masala",
      "Tomato Rice",
      "Rice (White & Boiled)",
      "Rasam",
      "Curd",
      "Dal",
      "Banana",
      "Salad"
    ]
  },

  Thursday: {
    breakfast: [
      "Onion Uthappam (2)",
      "Set Dosa",
      "Chutney",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee",
      "Milk with Bournvita",
      "Sprouts - Moong"
    ],
    lunch: [
      "Wheat Chapati",
      "Kadhi Pakoda",
      "White Chawali Masala",
      "Khichdi",
      "Rice (White & Boiled)",
      "Sambar",
      "Papad",
      "Curd",
      "Salad"
    ],
    snacks: [
      "White Gravy Pasta / Vegetable Pasta",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Kabuli / Kala Chana Masala",
      "Gobi Dry",
      "Rice (White & Boiled)",
      "Dal Tadka",
      "Rasam",
      "Curd",
      "Papad",
      "Boondi Laddoo",
      "Papaya",
      "Salad"
    ]
  },

  Friday: {
    breakfast: [
      "Besan Chilla (2)",
      "Chutney",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee",
      "Cornflakes",
      "Milk with Bournvita",
      "Sprouts - Peanut"
    ],
    lunch: [
      "Poori",
      "Dum Aloo Gravy",
      "Green Peas Dry",
      "Jeera Rice",
      "Rice (White & Boiled)",
      "Sambar",
      "Dal Tadka",
      "Chaas",
      "Pickle",
      "Salad",
      "Ice Cream (Special)"
    ],
    snacks: [
      "Aloo Tikki Chat",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Kadhai Paneer",
      "Soyabean Dry",
      "Rice (White & Boiled)",
      "Dal",
      "Rasam",
      "Curd",
      "Banana",
      "Salad"
    ]
  },

  Saturday: {
    breakfast: [
      "Aloo Paratha (2)",
      "Paneer Bhurji",
      "Pickle",
      "Curd",
      "Tea/Coffee",
      "Milk with Bournvita"
    ],
    lunch: [
      "Wheat Chapati",
      "Aloo Jeera",
      "Corn Palak Gravy",
      "Rice (White & Boiled)",
      "Sambar",
      "Chana Dal Tadka",
      "Curd",
      "Salad",
      "Papad"
    ],
    snacks: [
      "Onion Pakoda",
      "Sauce",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Wheat Chapati",
      "Veg Makhanwala",
      "Baigan Bhartha",
      "Jeera Rice",
      "Rice (White & Boiled)",
      "Dal Fry",
      "Rasam",
      "Curd",
      "Papad",
      "Watermelon",
      "Salad"
    ]
  },

  Sunday: {
    breakfast: [
      "Masala Dosa (1)",
      "Set Dosa",
      "Chutney",
      "Sambar",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee",
      "Milk with Bournvita"
    ],
    lunch: [
      "Wheat Chapati",
      "Aloo Bhindi",
      "Soyabean Masala",
      "Rice (White & Boiled)",
      "Dal Fry",
      "Sambar",
      "Curd",
      "Papad",
      "Salad",
      "Seviyan Kheer"
    ],
    snacks: [
      "Samosa",
      "Green Chutney",
      "Bread",
      "Butter",
      "Jam",
      "Tea/Coffee"
    ],
    dinner: [
      "Paneer Veg Biryani",
      "Raitha",
      "Rice (White & Boiled)",
      "Dal",
      "Rasam",
      "Fruit Custard"
    ]
  }
};

  useEffect(()=>{
    const date = new Date()
    setDay(date.toLocaleDateString('en-US', { weekday: 'long' }));
    setTime(date.toLocaleTimeString([], { 
  hour: '2-digit', 
  minute: '2-digit',
  hour12: false
  }))
  },[])
  
  return (
    <>
      <h1 className='main-title'>MessMenu</h1>
      <div className='Week'>
        <span className={day == 'Monday'?'activeday':'day'} onClick={() => setDay('Monday')}>Monday</span>
        <span className={day == 'Tuesday'?'activeday':'day'} onClick={() => setDay('Tuesday')}>Tuesday</span>
        <span className={day == 'Wednesday'?'activeday':'day'} onClick={() => setDay('Wednesday')}>Wednesday</span>
        <span className={day == 'Thursday'?'activeday':'day'}onClick={() => setDay('Thursday')}>Thursday</span>
        <span className={day == 'Friday'?'activeday':'day'} onClick={() => setDay('Friday')}>Friday</span>
        <span className={day == 'Saturday'?'activeday':'day'} onClick={() => setDay('Saturday')}>Saturday</span>
        <span className={day == 'Sunday'?'activeday':'day'} onClick={() => setDay('Sunday')}>Sunday</span>
      </div>
      <div className = "menu-container">
        <div className="meal-card breakfast">
        <h1>Breakfast</h1>
        <ul>
          {messmenu[day]["breakfast"].map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
        <div className="meal-card lunch">
          <h1>Lunch</h1>
          <ul>
            {messmenu[day]["lunch"].map((item)=>{
              return <li>{item}</li>
            })}
          </ul>
        </div>
        <div className="meal-card snacks">
          <h1>Snacks</h1>
          <ul>
            {messmenu[day]["snacks"].map((item)=>{
              return <li>{item}</li>
            })}
          </ul>
        </div>
        <div className="meal-card dinner">
          <h1>Dinner</h1>
          <ul>
            {messmenu[day]["dinner"].map((item)=>{
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
