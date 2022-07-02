import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWorks from '../hooks/useWorks';

const SingleWork = ({work}) => {
    const [works, setWorks] = useWorks();
    const { _id, name } = work;

    const handleDelete = id => {

      
        // delete from todo list
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const url = `http://localhost:5000/work/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = works.filter(work => work._id !== id);
                    setWorks(remaining);
                })
            // toast(`${name} task successfully Completed`);
            window.location.reload(true);
        }
    }
    // checkbox
    const [change, setChange] = useState(false);
    function buttonHandler() {
        setChange(!change)
    }
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" onChange={buttonHandler} className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>

            <th>

                <Link to={`/update/${_id}`}><button className="btn-btn-success"> Update </button></Link>
            </th>
            <th>
                <button disabled={!change} onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Done</button>
            </th>
        </tr>
    );
};

export default SingleWork;