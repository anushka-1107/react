import {createSlice, nanoid} from '@reduxjs/toolkit'

 initialState:{
    Empdata: [
        {
            id:1001,
    name:"Ritesh",
    email:"ritesh@123.com",
    mobileno:1234567890 ,
    department:"IT",
    position:"AI Engineer",
    joining:'2026-06-05',
    salary: 20000}]
 }
 
 const employeeSlice = createSlice({
    name:'Empdata',
    initialState,
    reducers:{
        addEmp:(state, action)=>{
             const emp = {
                id: nanoid(),
                name:"Ritesh",
        email:"ritesh@123.com",
         mobileno:1234567890 ,
        department:"IT",
        position:"AI Engineer",
        joining:'2026-06-05',
        salary: 20000,
            }
            state.Empdata.push(emp)
        }

    }
}

 )
 
 
 
 
 
   