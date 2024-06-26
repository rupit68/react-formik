import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const New = () => {
    const [data,setdata]=useState([])
    const hendel=(values)=>{
        setdata([...data,values])
    }
    const deletedata=(index)=>{
        let copydata=[...data]
        copydata.splice(index,1)
        setdata(copydata)
    }
  return (
    <div>
   
     <Formik 
        initialValues={{
            name:'',
            surname:''
        }}
        onSubmit={hendel}
    >
        <Form>
            name:-<Field name="name" /><br />
            surname:-<Field name="surname" /><br />
            <button type='submit'>add</button>
        </Form>
      </Formik>
     <table border={1}>
        <tr>
            <td>name</td>
            <td>surname</td>
            <td>delete</td>
        </tr>
        {
            data.map((iteam,index)=>(
                <tr>
                    <td>{iteam.name}</td>
                    <td>{iteam.surname}</td>
                    <td><button onClick={()=>{deletedata(index)}}>delete</button></td>
                </tr>
            ))
        }
     </table>
    </div>
  )
}

export default New
