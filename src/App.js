
// import { useFormik } from 'formik';
// import './App.css';
// import { useState } from 'react';

import Demo from "./Demo";

function App() {
  // const[data,setdata]=useState([])
  // const[id,setid]=useState(null)
  // let deletedata=(index)=>{      
  //   let copy=[...data]
  //   copy.splice(index,1)
  //   setdata(copy)
  // }
  // const formik=useFormik({
  //   initialValues:{
  //     name:'',
  //     surname:''
  //   },
  //   onSubmit:values=>{
  //     if (id!==null) {
  //       let copydata=[...data]
  //       copydata[id]=values
  //       setdata(copydata)
  //       setid(null)
  //     }
  //     else{
  //       setdata([...data,values])
  //     }
  //     formik.resetForm()
  //   }    
  // })
  // const updatedata=(iteam,index)=>{
  //   formik.setValues({
  //     name:iteam.name,
  //     surname:iteam.surname
  //   })
  //   setid(index)
  // }
  return (
    <div className="App">
      {/* <form action="" onSubmit={formik.handleSubmit}>
        <table>
          <tr>
            <td>name</td>
            <td><input type="text" value={formik.values.name} onChange={formik.handleChange} name='name'/></td>
          </tr>
          <tr>
            <td>surname</td>
            <td><input type="text" value={formik.values.surname} onChange={formik.handleChange} name='surname' /></td>
          </tr>
          <tr>
            <td>submit</td>
            <td><input type="submit" /></td>
          </tr>
        </table>
      </form>
      <table border={1}>
        <tr>
          <td>name</td>
          <td>surname</td>
          <td>delete</td>
          <td>update</td>
        </tr>
        {
          data.map((iteam,index)=>(
            <tr>
              <td>{iteam.name}</td>
              <td>{iteam.surname}</td>
              <td><button onClick={()=>{deletedata(index)}}>delete</button></td>
              <td><button onClick={()=>{updatedata(iteam,index)}}>update</button></td>
            </tr>
          ))
        }
      </table> */}
      <Demo></Demo>
    </div>
  );
}

export default App;
