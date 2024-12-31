import React from 'react';

export default function Sorting({ sortTasks }){
    return (
        <div style={{marginTop:'25px',marginBottom:'15px'}}>
            <select onChange={(e) => sortTasks(e.target.value)} defaultValue=""className='form-control'>
                <option value="">Select a sorting method</option>
                <option value="dateAsc">Due Date (Asc ↑)</option>
                <option value="dateDesc">Due Date (Desc ↓)</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}