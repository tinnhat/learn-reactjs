import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../Components/TodoList";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import queryString from "query-string";
import TodoForm from "../../Components/TodoForm";
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },
    {
      id: 2,
      title: "code",
      status: "completed",
    },
    {
      id: 3,
      title: "sleep",
      status: "new",
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || "all";
  });
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);
  const handleTodoCLick = (item, index) => {
    //clone current array to new array
    const newTodoList = [...todoList];

    // console.log(item, index);
    //toggle status:
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    newTodoList[index] = newTodo;
    // console.log(newTodo);
    //update todo list
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    // setFilteredStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    // setFilteredStatus("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);
  // console.log(filteredStatus);
  // console.log(renderedTodoList);
  const handleTodoFormSubmit = (values) => {
    console.log(values);
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title: values.title,
      status: "new",
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>what to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>To do list</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoCLick} />
      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}

export default ListPage;
