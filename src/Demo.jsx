import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'

const Demo = () => {
    const[data,setdata]=useState([])
    const[id,setid]=useState(null)
    const updatedata=(el,i)=>{
            formik.setValues({
                name:el.name,
                sub1:el.sub1,
                sub2:el.sub2,
                sub3:el.sub3
            })
    }
    const deletedata=(i)=>{
        let copy=[...data]
        copy.splice(i,1)
        setdata(copy)
    }
    const formik=useFormik({
        initialValues:{
            name:'',
            sub1:'',
            sub2:'',
            sub3:''
        },
        onSubmit:values=>{
            if (id!==null) {
                let copydata=[...data]
                copydata[id]=values
                setdata(copydata)
                setid(null)
            }
            else{
                setdata([...data,values])
            }
            formik.resetForm()
        }
        
    })
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <table>
            <tr>
                <td>name</td>
                <td><input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
                <td>sub1</td>
                <td><input type="number" name='sub1' value={formik.values.sub1} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
                <td>sub1</td>
                <td><input type="number" name='sub2' value={formik.values.sub2} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
                <td>sub3</td>
                <td><input type="number"name='sub3' value={formik.values.sub3} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
                <td>submit</td>
                <td><input type="submit" name="" id="" /></td>
            </tr>
        </table>
      </form>
      <table border={1}>
        <tr>
            <th>name</th>
            <th>sub1</th>
            <th>sub2</th>
            <th>sub3</th>
            <th>delete</th>
            <th>update</th>
        </tr>
        {
            data.map((el,i)=>(
                <tr>
                    <td>{el.name}</td>
                    <td>{el.sub1}</td>
                    <td>{el.sub2}</td>
                    <td>{el.sub3}</td>
                    <td><button onClick={()=>{deletedata(i)}}>delete</button></td>
                    <td><button onClick={()=>{updatedata(el,i)}}>update</button></td>
                </tr>
            ))
        }
      </table>
    </div>
  )
}

export default Demo
