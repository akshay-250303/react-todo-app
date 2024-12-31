import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const renderPriority = (priority) => {
        switch (priority) {
            case 'high':
                return <span>High Priority</span>;
            case 'medium':
                return <span>Medium Priority</span>;
            case 'low':
                return <span>Low Priority</span>;
            default:
                return null;
        }
    };

    return (
        <li className={className}>
            <div className="checkbox">
                <label style={{ display:'flex',justifyContent:'space-between'}}>
                    <CheckBox checked={data.completed} onChange={handleChange}/>
                     <p>{data.text}</p>
                     <p style={{paddingInline:'10px'}}>{renderPriority(data.priority)}</p>
                     <p>{data.dueDate ? `Due:${data.dueDate}`:''}</p>
                </label>
            </div>
        </li>
    );
}
