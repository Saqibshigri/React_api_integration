import axios from 'axios'
import { useEffect, useState } from 'react'
import '../App.css'
const Apiintegration = () => {
    const [data, setData] = useState([])
    const getData  = async ()=>{
        const res = await axios.get('https://picsum.photos/v2/list')
          setData(res.data)
       console.log(data);
       
    }
    useEffect(() => {
      getData()
    }, [ ])
    
  return (
    <div>
        {/* <button onClick={()=>{
              getData()
        }} className="bg-green-600 text-white">Get Data</button> */}
          {
            data.map((elem,indx)=>{
                return <div key={indx} className='text-black flex items-center justify-between w-full px-3 py-3 mb-3 rounded bg-gray-50'>
                       <img  className= ' h-72 ' src={elem.download_url} alt="" />
                       <h3 className='text-white'>{elem.author}</h3>
                </div>
            })
          }
    </div>
  )
}

export default Apiintegration
