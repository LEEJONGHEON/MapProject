import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header';
import Footer from './component/Footer';
import Router from "./component/Router";

function App() {

    return (
        <div>
            <Header />
            <Navigation/>
            <Router/>
            <Footer />
        </div>
    );
}

export default App;