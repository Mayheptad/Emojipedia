import Heading from './Components/Heading';
import Entry from './Components/Entry';
import emojipedia from './Components/emojipedia';

function App() {
  return (
    <div>
  <Heading />
  <dl className="dictionary">
 {emojipedia.map((eachEmoji, index) => <Entry emoji={eachEmoji.emoji} name={eachEmoji.name} meaning={eachEmoji.meaning}/> )} 
  </dl>
    </div>
  );
}

export default App;
