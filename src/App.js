
import './App.css';
import { BookingList } from './components/bookingList/BookingList';
import { Hero } from './components/hero/Hero';
import { HotelsContainer } from './components/hotelsContainer/HotelsContainer';
import { ReservForm } from './components/reservForm/ReservForm';


function App() {
  return (
    <div>
     
      <Hero/>
      <HotelsContainer/>
      <ReservForm/>
      <BookingList/>

    </div>
  );
}

export default App;
