// import logo from './logo.svg';
// import './App.css';
import Journal from "./components/Journal";
import Card from "./components/Card";
import {myData} from "./components/data.js"

function App() {

  const journalData = myData.map(item =>{
    return(
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        imgUrl = {item.imgUrl}

      />
    )
  })

  return (
    <div className="App">
      <Journal/>
      {journalData}
    </div>
  );
}

export default App;
