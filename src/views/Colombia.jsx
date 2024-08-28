import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Colombia = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://calendarific.com/api/v2/holidays', {
          params: {
            api_key: 'ULnqsHXega3fRhFyr5cr0RETyyAI0sUb',
            country: 'co',
            year: 2024,
          },
        });

        const sortedHolidays = response.data.response.holidays.sort((a, b) =>
          new Date(a.date.iso) - new Date(b.date.iso)
        );

        setHolidays(sortedHolidays);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  const nextHolidaysIndex = holidays.findIndex(
    (holiday) => new Date(holiday.date.iso) > new Date()
  );

  return (
    <>
      <h1>Días festivos en Colombia</h1>
      <Link to="/"><button>Volver al home</button></Link>
      <Link to="/mexico">
      <button>Festivos Mexico</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nombre del festivo</th>
            <th>Fecha del festivo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr
              key={holiday.name}
              style={{ color: index === nextHolidaysIndex ? 'red' : '#000000' }}
            >
              <td>{holiday.name}</td>
              <td>{new Date(holiday.date.iso).toLocaleDateString('es-ES')}</td>
              <td>{holiday.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Colombia;
