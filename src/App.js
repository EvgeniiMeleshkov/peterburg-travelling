import './App.scss';
import Card from "./components/card/Card";
import {cardsContent} from "./common-data/cards-content/cardsContent";
import {eventsContent} from './common-data/events-content/eventsContent'

function App() {
    return (
        <div className="App">
            {cardsContent.map(el => {
                return <Card key={el.id} {...el} eventsContent={eventsContent}/>
            })}
        </div>
    );
}

export default App;
