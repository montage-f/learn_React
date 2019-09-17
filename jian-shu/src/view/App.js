import React, {useState} from 'react';
import '../style/App.css';

const Clock = ({date}) =>
    <div>
        <h1>hello world</h1>
        <h2>It is {date.toLocaleTimeString()}</h2>
    </div>;


const App = () => {
    const [date, setDate] = useState(new Date());
    setInterval(() => setDate(new Date()), 1000);
    return (
        <div className="App">
            <Clock date={date} />
        </div>
    );
};


export default App;
