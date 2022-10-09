import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Post = () => {

    
  const [data, setData] = useState({
    name:'',
    email:'',
    phone:''

  })

  const [getData, setGetData] = useState([]);

  useEffect(() => {
        axios.get('http://127.0.0.1:3000/').then((res) => {
            setGetData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


const handleChange = (e)=>{
const {name, value} = e.target;

setData((val)=>{
  return {
    ...val, [name]:value
  }
})
}

const handleSubmit = (e) =>{
  e.preventDefault();

  axios.post('http://127.0.0.1:3000', data).then((res) => {
  // console.log(`res.data`, res.data);
  setData({
    name:'',
    email:'',
    phone:''
  })
}).catch((err) => {
  console.log(err);
})

}



  return (
    <>
        <div className="container">
   <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" id="name" name="name" onChange={handleChange} value={data.name} className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" id="email" name="email" onChange={handleChange} value={data.email} className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="text" id="phone" name="phone" onChange={handleChange} value={data.phone} className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<div className="col-md-7">
  <table className="table">
    <thead>
      <tr >
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>

    {
      getData.map((data, item)=>{
        return(
          <tr key={item} >
            <td>{item}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>
                <Link to={{ pathname: "/editPast/"+data._id }} className={"btn btn-sm me-2 btn-primary"} onClick={()=>{}}>Edit</Link>
                <Link to={{ pathname: "/editPast/"+data._id }} className={"btn btn-sm btn-danger"} onClick={()=>{}} >Delete</Link>
            </td>
          </tr>
        )
      }) 
    }
     
    </tbody>
  </table>
</div>

    </div>
    </>
  )
}

export default Post