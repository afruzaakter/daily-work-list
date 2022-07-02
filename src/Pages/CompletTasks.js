import React, { useEffect, useState } from 'react';
import DeleteWork from './DeleteWork';

const CompletTasks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('https://lower-bunnyhug-38167.herokuapp.com/work')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])
    return (
        <div className='mt-28 m-28'>
            <div className='min-h-screen'>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                works.map((work, index) => <DeleteWork
                                    key={work._id}
                                    work={work}
                                    index={index}
                                ></DeleteWork>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default CompletTasks;