import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Route } from "react-router-dom";
import { Link, NavLink, Switch, Redirect } from "react-router-dom";
import NotFound from "./features/Todo/Components/notFound";
import { useEffect } from "react";
import productsApi from "./api/productApi";
import CounterFeature from "./features/counter";
import Header from "components/header";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = { _limit: 10 };
      const productsList = await productsApi.getAll(params);
      console.log(productsList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/" exact component={CounterFeature} exact />

        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
