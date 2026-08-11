import {createSlice, nanoid} from '@reduxjs/toolkit'


const savedemployees= JSON.parse(localStorage.getItem("employees")) || []


 const initialState={
    Empdata: savedemployees.length?savedemployees: [
        {
            id:1,
    name:"Ritesh",
    email:"ritesh@123.com",
    mobileno:1234567890 ,
    department:"IT",
    position:"AI Engineer",
    joining:'2026-06-05',
    salary: 20000},]
 }
 
 const employeeSlice = createSlice({
    name:'Empdata',
    initialState,
    reducers:{
        addEmp:(state, action)=>{
             const emp = {
                 ...action.payload,
                id: nanoid(),
                
            }
            state.Empdata.push(emp)

            localStorage.setItem('employees',JSON.stringify(state.Empdata))
        }

    }
}

 )



export const {addEmp} = employeeSlice.actions

export default employeeSlice.reducer
 
 
 
 
 
   