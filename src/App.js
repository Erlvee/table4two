import React, {useState}from 'react';
import './App.css';
import Header from './Components/Header'
import LoginScreen from './Components/LoginScreen.js'
import MainContent from './Components/MainContent.js'
import RenderRestaurant from './Components/RenderRestaurant.js'
import restaurantData from './Components/RestaurantData.js'
import Footer from './Components/Footer.js'
import Calendar from './Components/Calendar.js'
import Tables from './Components/Tables.js'


function App() {
  const [initLogin, setLogin] = useState(true);
  const [initMain, renderMain] = useState(false);
  const [initRestaurant, renderRestComponent] = useState(false);
  const [initCalendar, renderCalendar] = useState(false);
  const [initTables, setTableState] = useState(false);

  const restData = restaurantData.map(item => <RenderRestaurant key={item.id} restaurant={item} 
    initCalendar={initCalendar}
    renderCalendar={renderCalendar}
    initRestaurant={initRestaurant}
    renderRestComponent={renderRestComponent}/>);

  return(
    <div className="App">
      <header>
      <Header />
      </header>
      <main>
      <div id="container">
        
        {/*<Calendar />*/initLogin && <LoginScreen 
        initLogin={initLogin}
        setLogin={setLogin} 
        initMain={initMain} 
        renderMain={renderMain}/>}

        {!initLogin && initMain && <MainContent 
        initMain={initMain} 
        renderMain={renderMain} 
        renderRestComponent={renderRestComponent}/>}

        <div className="renderRest">
        {!initMain && initRestaurant && <h3 style={{display:"flex", marginBottom: "25px", marginLeft: "15px"}}>Sort by: </h3>} 
        {!initMain && initRestaurant && restData }
        {!initMain && initRestaurant && <Footer/> }
        </div>
        
        <div className="calendarAppDiv">
        {!initRestaurant && initCalendar && <Calendar 
        initTables={initTables}
        setTableState={setTableState}
        initCalendar={initCalendar}
        renderCalendar={renderCalendar}
        initRestaurant={initRestaurant}
        renderRestComponent={renderRestComponent}/>}
        </div>

        {!initCalendar && initTables && <Tables/>}    
    </div>
      </main>
      <footer>
        {!initLogin && <Footer />}
      </footer>
    </div>
  )
}

export default App;
