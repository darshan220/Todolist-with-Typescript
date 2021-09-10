import React from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import {ITask} from '../interfaces'

interface props { 

    task: ITask,
    completeTask(taskNameToDelete: string): void;

}

const TodoData = ({task,completeTask}: props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>

            </div>
            <button onClick={()=> {completeTask(task.taskName)}}>Remove</button>
        </div>
    );
}

export default TodoData;

