import Title from '../components/Title'
import Counter from '../components/Counter'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import useCoutdown from '../hooks/useCoutdown'

import { countdownContext } from '../context/countdownContext';


const Countdown = () => {

    const {event} = useContext(countdownContext)

    if (!event) return <Navigate to="/" />

    const eventTitle = event.title
    const eventColor = event.color 

    const [day, hour, minute, second] = useCoutdown(event.date)

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
