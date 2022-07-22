import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [onPages, setOnPages] = useState([]);

  //const [currentItems, setCurrentItems] = useState([])


  useEffect(() => {

    const ferchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?q${query}`);
      setData(res.data)
      setLoading(false);
    }
    if (query.length === 0 || query.length > 2) ferchData();

  }, [query])

  // Get
  const indesxOfLastItem = currentPage * itemsPerPage;
  const indesxOfFirstItem = indesxOfLastItem - itemsPerPage;
  const currentItems = onPages.length ? onPages?.slice(indesxOfFirstItem, indesxOfLastItem) : data?.slice(indesxOfFirstItem, indesxOfLastItem);



  const dataSearch = e => {
    setQuery(e.target.value)

    
    
    const newData = data.filter(item =>
        item.title.toLowerCase().includes(e.target.value)
      ); 
    setData(newData); 

    setOnPages(newData);

    //console.log(newData)

  };


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (

    <div className="App">

      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" id="search" placeholder="Поиск" onChange={dataSearch} />
          <button className="searchBtn">
            <img src="img/search.svg" alt="" />
          </button>
        </div>

        <Table
          items={currentItems}
          query={query}
          loading={loading}
        />

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={onPages.length ? onPages.length : data?.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          query={query}
        />
      </div>
    </div>
  );
}

export default App;
