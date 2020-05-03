import React, { useState } from 'react';

const Todo = props => (
  <li className="marginY" >
    <input style={{ marginLeft:0, paddingLeft: 0, }} type="checkbox" checked={ props.todo.checked } onChange={ props.toggleChecked }/>
    <button className="marginX" onClick={ props.handleDelete }>Delete me</button>
    <span className="marginX" >{ props.todo.text }</span>
  </li>
);

let id = 0;

const App = () => {
  const [ todos, setTodos ] = useState( [] );
  
  function addTodo() {
    const text = prompt( 'Add a Todo to the list!');
    setTodos( [ ...todos, { text: text, id: id++, checked: false, } ] );
  };

  function handleDelete( id ) {
    setTodos( todos.filter( todo => todo.id !== id ) );
  };

  function toogleChecked( id ) {
    setTodos( todos.map( todo => {
      if ( todo.id !== id ) return todo
      return {
        id: id,
        text: todo.text,
        checked: !todo.checked,
      }
    } ) );
  };

  return (
    <div className="App">
      <div className="marginY" >Total Todos on your list: { todos.length }</div>
      <div className="marginY" >Total uncomplete Todos: { todos.filter( todo => todo.checked === false ).length }</div>
      <button onClick={ () => addTodo() } className="marginY" >
        Add todos
      </button>
      <ul className="marginY" >
        { todos.map( ( todo, index ) => (
          <Todo
            key={ index }
            todo={ todo }
            handleDelete={ () => handleDelete( todo.id ) }
            toggleChecked={ () => toogleChecked( todo.id )}
          />
        ) ) }
      </ul>
    </div>
  );
};

export default App;
