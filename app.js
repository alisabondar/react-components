// TODO
const { useState } = React;

const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };

  return (
    <li style={style}
      onMouseEnter={() => setIsDone(true)}
      onMouseLeave={() => setIsDone(false)}>
      {props.item}
    </li>
  );
};

const GroceryList = (props) => (
  <div>
    <ul>
    {props.groceryItems.map((item) => (
      <GroceryListItem item={item} />
    ))}
    </ul>
  </div>
)

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Coffee', 'Tea']}/>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);

// const GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// const GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['Coffee', 'Tea']}/>
//   </div>
// )

// const GroceryList = () => (
//   <ul>
//     <h2>My Grocery List</h2>
//     <Coffee />
//     <Tea />
//   </ul>
// );

// const Coffee = () => <li>Coffee</li>
// const Tea = () => <li>Tea</li>