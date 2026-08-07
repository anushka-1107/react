import { useState , useEffect} from 'react'
import Pagination from './components/pagination'
import './App.css'


function App() {

const url = "https://dummyjson.com/users?page=1&limit=6"


  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  },[])

async function fetchData() {
  let data = await fetch(url)
  data = await data.json()
 console.log(data.users)
  setData(data.users)
}

return (
<>
<div className="container mt-4 bg-dark text-white">
  <div className="row">
    {data.map((user,id) => (
      <div className="col-md-4 mb-4 bg-dark text-white" key={user.id}>
        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h5 className="card-title">
              {user.firstName} {user.lastName}
            </h5>
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<div>
  <Pagination />

</div>
  </>
    )
}

export default App


