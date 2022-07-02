import React from 'react';
import useWorks from '../hooks/useWorks';
import { useForm } from 'react-hook-form';
import SingleWork from './SingleWork';
const ToDo = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [works, setWorks] = useWorks();



    const onSubmit = (data) => {
        // data.preventDefault();
        const name = data.name;
        console.log(name);

        const url = 'http://localhost:5000/work';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                data.target.reset();
            });

        // toast('Work task successfully added');
        window.location.reload(true);
    }
    return (
        <div className=' mt-48 m-32'>
            <div className='  p-2'>
                <form className='d-flex flex-column'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <input className='mb-2 p-3 border-2 border-primary rounded-md ' placeholder='New Task Name' {...register("name", { required: true, maxLength: 20 })} />
                    </div>

                    <input className=' btn btn-primary' type="submit" value=" Add Task" />
                </form>
            </div>
            <hr />
            <hr />
            <hr />

            <div className='mt-5'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        {/* <input type="checkbox" className="checkbox" /> */}
                                    </label>
                                </th>
                                <th>Task-Name</th>
                                <th>Edit/Rename</th>
                                <th>Done/Completed</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            works.map(work => <SingleWork
                                key={work._id}
                                work={work}
                            >

                            </SingleWork>)
                        }

                    </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ToDo;