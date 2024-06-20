import { useState } from 'react'
import ShoppingForm from './components/shoppingform';
import ShoppingList from './components/ShoppingList';


function App() {
    const [shoppingListItems, setshoppingListItems ] = useState({}) ;
  

  return (
    <>
      <h1>Lets go shopping</h1>
      <ShoppingForm  generateList={setshoppingListItems} />
      <ShoppingList items={shoppingListItems}/>
    </>
  )
}

export default App
