import React from 'react';

const DeleteWork = ({work, index}) => {
    const { _id, name } = work;
    return (
       


        <tr>
       
        <td>{index +1}</td>
        <td style={{textDecorationLine: 'line-through'}}>{name}</td>
        
      </tr>



    );
};

export default DeleteWork;