import './App.scss';
import Card from "./components/card/Card";
import {cardsContent} from "./common-data/cards-content/cardsContent";
import {eventsContent} from './common-data/events-content/eventsContent'

function App() {
    return (
        <div className="App">
            <Card
                {...cardsContent.yellowNew}
                cardContent={eventsContent}
            />
            <Card
                {...cardsContent.purpleNew}
                cardContent={eventsContent}
            />
        </div>
    );
}

export default App;
