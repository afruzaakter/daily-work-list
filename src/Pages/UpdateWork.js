import React from 'react';
import { useForm } from 'react-hook-form';
import {  useParams } from 'react-router-dom';
const UpdateWork = () => {
    const {id} = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{
        const name = data.name;
        // const update = {name}
        const url = `http://localhost:5000/work/${id}`;
    console.log(url);

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name})
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        alert('Bill Data  Edit successfully!!!');
       data.target.reset();
      })
    }
    return (
        <div className='mt-36'>
            {/* <p>{name}</p> */}
            <div className='  p-2'>
                <form className='d-flex flex-column'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <input className='mb-2 p-3 border-2 border-primary rounded-md ' placeholder='Update Task Name' {...register("name", { required: true, maxLength: 20 })} />
                    </div>

                    <input className=' btn btn-primary' type="submit" value="Update Task" />
                </form>
            </div>
        </div>
    );
};

export default UpdateWork;