import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const EditPost = () => {
  const navigate = useNavigate()

  let { id } = useParams();
    
const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })


    useEffect(() => {
      axios.get('http://127.0.0.1:3000/' + id).then(res => {
          setData({
                name: res.data[0].name,
                email: res.data[0].email,
                phone: res.data[0].phone
            })
        })
   
    }, [id])

    const handleChange =(e)=>{
      const {name, value} = e.target;

      setData((val)=>{
      return{
        ...val, [name]:value
      }
      })

    }

    const handleUpdate =(e)=>{
      e.preventDefault();
      
      axios.post('http://127.0.0.1:3000/update/'+id, data).then((res) => {
      navigate('/posts')
      })

    }


  return (
    <>


    <h2 className='alert alert-danger text-center' >Edit page</h2>
  

    <div className="container">
    <form  >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" id="name" name="name" onChange={handleChange} value={data.name}  className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" id="email" name="email" onChange={handleChange} value={data.email} className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="text" id="phone" name="phone" onChange={handleChange} value={data.phone} className="form-control" />
  </div>
  <button type="submit" onClick={handleUpdate} className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}

export default EditPost