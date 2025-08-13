import BestItem from "../components/BestItem";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Instagram from "../components/Instagram";
import SoccerShoes from "../components/SoccerShoes";
import NewItem from "../components/NewItem";
import Story from "../components/Story";
import Popup from "../components/Popup";
import TopBanner from "../components/TopBanner";


function Home(){
    return(
        <main className="home">
            <TopBanner />
            <BestItem />
            <NewItem />
            <Popup />
            <Story />
            <Collection />
            <SoccerShoes />
            <Instagram />
            <Footer />
        </main>
    )
}

export default Home;