import React, { useEffect, useState, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { fetchData } from './services/api';
import Loader from './components/Loader';


const CategoryTabs = React.lazy(() => import('./components/CategoryTabs'));
const DishCard = React.lazy(() => import('./components/DishCard'));
const CartIcon = React.lazy(() => import('./components/CartIcon'));
//used react.lazy and suspense for dynamically load components. loading components only when they are needed,
// reduces the initial load time. 
//Suspense component to show a fallback UI while the lazy-loaded components are being fetched.

function App() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      if (result) setData(result.data[0].table_menu_list);
    };

    loadData();
  }, []);
  //used useEffect Hook for fetch data in inital render.

  if (!data) return <Loader />


  const categories = data.map((category) => category.menu_category);
  const activeDishes = data[activeTab]?.category_dishes || [];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UNI Resto Cafe</h1>
        
          <CartIcon />
        
      </div>
      <Suspense fallback={<><Skeleton /></>}>
      
        <CategoryTabs
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Suspense>
      <div className="mt-4">
        <Suspense fallback={<><Skeleton count={5} /></>}>
          {activeDishes.map((dish) => (
            <DishCard key={dish.dish_id} dish={dish} />
          ))}
        </Suspense>
      </div>
      
    </div>
    
  );
}

export default App;
