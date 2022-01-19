import Menu from './Menu';
import Categories from './Categories';
import items from './data'
import {useState} from "react";

const allCat = ['all', ...new Set (items.map((item)=>item.category))]

function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState(allCat)
  const filterItems = (category) =>{
    if(category === 'all'){
        setMenu(items)
        return
    }
    const newItems = items.filter((item)=>
        item.category === category
    )
      setMenu(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
            <h2> Our Menu</h2>
            <div className="underline"></div>
            <Categories filterItems={filterItems} categories={categories}/>
            <Menu items={menu}/>
        </div>
      </section>
    </main>
  );
}

export default App;
