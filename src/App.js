
import './App.css';
import Videos from './Components/videos';
import vidData from './Data/vidData';

function App() {
  return (
    <div className="App">
      {/* <Videos {...vidData}></Videos> */}
      {vidData.map(vidData=><Videos
      title={vidData.title} thumnail={vidData.thumnail} logo={vidData.logo} channel={vidData.channel} views={vidData.views} time={vidData.time} discription={vidData.discription}></Videos>)}
    </div>
  );
}

export default App;

