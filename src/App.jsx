import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [day,setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }))
  const [time,setTime] = useState()
  const messmenu = {
    Monday:{
      breakfast:["Idli","Vada","Chutney","Sambar","Banana","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita"],
      lunch:["Chapati","Mix Pulses gravy","Cabbage dry","Rice (White & Boiled)","Dal Tadka","Sambar","Curd","Salad","Ice cream"],
      snacks:["Vada Pav","Green Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapati","Paneer Do Pyaza","Veg dry","Lemon Rice","Rice (white & Boiled)","Dal Fry","Rasam","Curd","Salad"]
    },
    Tuesday:{
      breakfast:["Puri","Bhaji","Fruits","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita","Sprout"],
      lunch:["Chapathi","Beetroot Palya","Rajma masala","Veg pulao","Rice (white & Boiled)","Dal","Sambar","Curd","Salad","Gulab Jamun"],
      snacks:["Upma","Kesribath","Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Mix Veg Curry","Akka Masoor Dry","Rice (White & Boiled)","Dal Fry","Rasam","Curd","Salad","Papad"]
    },
    Wednesday:{
      breakfast:["Upma","Shira","Chutney","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita","Banana","Sprout"],      
      lunch:["Methi Poori","Rice (Boiled & White)","Sambar","Aloo Shimla","Kabuli Channa Masala","Dal fry","Salad","Curd","Icecream"],      
      snacks:["Veg Cutlet","Sauce","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Paneer Chilli","Aloo Mutter Masala","Tomato Rice","Rice (White & Boiled)","Dal","Rasam","Curd","Salad"]
    },
    Thursday:{
      breakfast:["Onion Uthappam","Set Dosa","Chutney","Fruits","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita"],
      lunch:["Chapathi","Mix Pulse Gravy","Kadi Pakoda","Dal Khichidi","Rice (White & Boiled)","Pickle","Papad"],
      snacks:["Hakka Noodels","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Black Chana Masala","Gobi dry","Rice (White & Boiled)","Dal Tadka","Rasam","Curd","Papad","Laddu"]
    },
    Friday:{
      breakfast:["Poha-Penuts","Chutney","Fruits","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita"],
      lunch:["Poori","Matar Palak Masala","Lauki Dry","Jeera Rice","Rice (White & Boiled)","Sambar","Dal Tadka","Butter Milk","Pickle","Ice Cream"],
      snacks:["Pav Bhaji","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Veg Makhanwala","Cabbage Manchurian","Veg Fried Rice","Rice","Dal Fry","Curd","Salad"]
    },
    Saturday:{
      breakfast:["Aloo Paratha","Paneer Bhurji","Curd","Pickle","Bread","Butter","Jam","Tea/Coffee","Milk with Bournvita"],
      lunch:["Chapathi","Aloo Tamatar Gravy","Veg Kolahpuri","Rice (White & Boiled)","Dal Tadka","Rasam","Curd","Papad","Salad"],
      snacks:["Bread Pakoda","Sauce","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Chapathi","Baingan","Alsande Kalu","Jeera rice","Rice (White & Boiled)","Dal Palak","Rasam","Curd","Papad","Salad"]
    },
    Sunday:{
      breakfast:["Masala Dosa","Set Dosa","Sambar","Chutney","Fruits","Bread","Butter","Jam","Tea/Coffee","Milk With Bournvita"],
      lunch:["Chapathi","Aloo Bhindi","Soyabean Masala","Rice (White & Boiled)","Sambar","Dal Fry","Curd","Papad","Salad","Seviyan Kheer"],
      snacks:["Samosa","Chutney","Bread","Butter","Jam","Tea/Coffee"],
      dinner:["Paneer Veg Biryani","Raitha","Fruits Custard","Rice","Dal"]
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
