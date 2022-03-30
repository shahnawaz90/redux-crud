import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { fetchTodoItems, createNewItem } from "../../actions/api";

const TodoList = (props) => {

  const [list, setList] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    job: ""
  });

  useEffect(() =>{
    props.fetchTodoItems();
  },[]);

  useEffect(() => {
    props.todoItems && props.todoItems.length > 0 && setList(props.todoItems);
  },[props.todoItems])

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewItem(inputs)
      .then(() => {
        setInputs({
          name: "",
          job: ""
        });
      })
      .catch(() => {
        debugger;
      })
  }


  return(
    <div className="container">

      <h1>Todo List Items Sample with redux</h1>
      <form>
        <div className="row">
          <div className="col-12">
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" name="name" id="name" value={inputs.name} onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="job">Job</label>
            <input className="form-control" type="text" name="job" id="job" value={inputs.job} onChange={handleChange} required />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>Add new record</button>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-12">
          {
            props.fetchingTodoItems ?
            <p>Loading ... </p>
            :
            <table className="table table-bordered table-hover table-striped">
              <tbody>
              {
                list && list.map((todoItem, index) => 
                  <tr key={index}>
                    <td>
                      <img src={todoItem.avatar} style={{height: "50px"}} />
                    </td>
                    <td>
                      {todoItem.email}
                    </td>
                    <td>
                      {`${todoItem.first_name} ${todoItem.last_name}`}
                    </td>
                  </tr>
                )
              }
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  )
}
// state means redux store
const mapStateToProps = (state) => {
  return {
    todoItems: state.reducers.todoItems,
    fetchingTodoItems: state.reducers.fetchingTodoItems,
    error: state.reducers.error
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTodoItems: () => dispatch(fetchTodoItems()),
  createNewItem: (inputs) => dispatch(createNewItem(inputs))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);