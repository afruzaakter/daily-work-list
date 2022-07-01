import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
    const[date, setDate]=useState(new Date());
    return (
        <div className='mt-28'>
            <div class="hero  bg-success-100">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <DayPicker 
                         mode="single"
                         selected={date}
                         onSelect={setDate}
                        />
                    </div>
                  
                </div>
               
            </div>
            <div className='text-center bg-slate-400 ml-48 p-5 rounded-md mr-48'>
            <p className='text-2xl text-neutral font-bold'>Your Picked: <span className='text-secondary'>{format(date, 'PP')}</span> </p>
            </div>
            

        </div>
    );
};

export default Calendar;