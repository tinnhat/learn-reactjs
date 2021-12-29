import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoCLick = (item, index) => {
    if (!onTodoClick) return; //nếu cha không truyền gì xuống thì khong lam gì cả
    onTodoClick(item, index);
  };
  return (
    <ul className="todo-list">
      {todoList &&
        todoList.length > 0 &&
        todoList.map((item, index) => (
          <li
            key={item.id}
            className={classnames({
              "todo-item": true,
              completed: item.status === "completed",
            })}
            onClick={() => handleTodoCLick(item, index)}
          >
            {item.title}
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
