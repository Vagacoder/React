import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <div className="list-items">loading</div>;
    }

    if (tasks.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map((task) => {
                return <Task key={task.id} task={task} {...events} />
            })}
        </div>
    );
}

export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <div className="list-items">loading</div>;
    }

    if (tasks.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map((task) => {
                return <Task key={task.id} task={task} {...events} />
            })}
        </div>
    );
}

PureTaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: PropTypes.func.isRequired,
    onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
    loading: false,
};

// export default TaskList;

export default connect(
    ({ tasks }) => ({
        tasks: tasks.filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }),
    dispatch => ({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id)),
    })
)(PureTaskList);



