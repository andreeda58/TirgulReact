import TextField from '@mui/material/TextField';
import { useState } from 'react';




const Form = () => {


    const [value,setValue]=useState("");

    const onchana=(event)=>{
      
        console.log(event.target.value);
        setValue(event.target.value)
    }
    return (
        <div className='container2'>

            <h1 className='espace'>Please Fill the Form</h1>
            <form >
                <div>
                    <TextField   
                    id="outlined-required"
                    label="Name"
                    className='espace'
                    defaultValue=""
                    />
                </div>
                <div>
                    <TextField   
                    id="outlined-required"
                    label="Last Name"
                    />
                </div>
                <div>
                    <TextField   
                    id="outlined-required"
                    type='date'
                    onChange={onchana}
                    />
                </div>
                <div>
                    <TextField   
                    id="outlined-required"
                    label="Password"
                    type='password'
                    />
                </div>


                <button className='btn btn-info espace'>submit</button>
            </form>
            
        </div>
    )
}


export default Form;