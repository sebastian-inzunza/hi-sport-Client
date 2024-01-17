// Reloj.js
import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const Reloj = () => {
  const [horaActual, setHoraActual] = useState(DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS));

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className='flex justify-center text-lg text-white bg-purple-500 rounded-full lg:w-1/4 py-2 my-3 mx-2 lg:mx-0'>
    <h1>Hora Actual</h1>
      <p className='mx-2'>{horaActual}</p>
    </div>

  );
};

export default Reloj;
