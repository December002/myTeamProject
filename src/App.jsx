import Main from "./main/head/Main"
import HowTo from "./main/body/HowTo"
import Carousel from "./main/body/Carousel";
import WhereToGo from "./main/Foot/WhereToGo";
import TourListPage from "./main/Foot/tour/TourListPage";
import Modal from "./modal/Modal";
import ModalItem from "./modal/ModalItem";

function App() {
    return(
        <>
            <Main />
            <HowTo/>
            <Carousel/>
            <WhereToGo/>
            <TourListPage/>
            <ModalItem/>
        </>
    )
}

export default App;
