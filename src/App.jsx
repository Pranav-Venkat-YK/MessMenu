import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [day,setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }))
  const [time,setTime] = useState()
  const messmenu = {
    Monday:{
      breakfast:["Idli","Vada","Chutney","Sambar","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita","Banana"],
      lunch:["Chapati","Rice (White & Boiled)","Dal Tadka","Sambar","Cabbage dry","Mix Pulses gravy","Curd","Salad","Ice cream"],
      snacks:["Vada Pav","Green Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapati","Rice (white & Boiled)","Lemon Rice","Veg dry","Dal Fry","Paneer Do Pyaza","Rasam","Curd","Salad"]
    },
    Tuesday:{
      breakfast:["Puri","Bhaji","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita","Sprout","Fruits"],
      lunch:["Chapathi","Veg pulao","Rice (white & Boiled)","Veg Dal","Sambar","Beetroot Palya","Rajma masala","Curd","Salad","Gulab jamun"],
      snacks:["Veg Sevai Upma","Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Rice (White & Boiled)","Akka Masoor Dry","MixVeg Curry","Dal Fry","Curd","Rasam","Salad","Papad"]
    },
    Wednesday:{
      breakfast:["Upma","Shira","Chutney","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita","Banana","Sprout"],      
      lunch:["MethiPuri","Rice (Boiled & White)","Sambar","Aloo Shimla","Kabuli Channa Masala","Dal fry","Salad","Curd","Icecream (Chocolate)"],      
      snacks:["Veg Cutlet","Sauce","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Rice (White & Boiled)","TomatoRice","Aloo Mutter Masala","Rasam","Curd","Salad","Dal","Paneer Chilli"]
    },
    Thursday:{
      breakfast:["Onion Uthappam","Set Dosa","Chutney","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita","Fruits"],
      lunch:["Chapathi","Rice (White & Boiled)","Mix Pulse Gravy","Dal Khichidi","Pakoda Kadi","Pickle","Papad"],
      snacks:["Hakka Noodels","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Rice (White & Boiled)","Gobi dry","Dal Tadka","Kasrn","Black Chana Masala","Curd","Papad","Laddu"]
    },
    Friday:{
      breakfast:["Poha-Penuts","Chutney","Bread","Butter","Jam","Cornflakes","Tea/Coffee","Milk With Bournvita","Fruits"],
      lunch:["Chapathi","Rice (White & Boiled)","Jeera Rice","Sambar","Mutter Palak Masala","Dal Tadka","Lauki Dry","Butter Milk","Pickle","Papad","Ice Cream"],
      snacks:["Pav Bhaji","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Rice","Veg Makhnwala","Cabbage Manchurian","Veg Fried Rice","Dal Fry","Curd","Salad"]
    },
    Saturday:{
      breakfast:["Aloo Paratha","Curd","Pickle","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita","Paneer Bhurji"],
      lunch:["Chapathi","Rice (White & Boiled)","Vatana Gassi","Veg Kolahpuri","Masala","Dal Tadka","Lauki","Chana Dal Tadka"],
      snacks:["Bread Pakoda","Sauce","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Rice (White & Boiled)","Veg Khurma","Jeera rice","Dal Palak","Rasam","Curd","Papad","Salad"]
    },
    Sunday:{
      breakfast:["Masala Dosa","Set Dosa","Sambar","Chutney","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita","Fruits"],
      lunch:["Chapathi","Rice (White & Boiled)","Aloo Bhendi","Sambar","Dal Fry","Soyabin Masala","Curd","Papad","Salad","Sewai Kheer"],
      snacks:["Samosa","Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Rice","Dal","Paneer Veg Biryani","Raitha","Fruits Custard"]
    },
  }
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
