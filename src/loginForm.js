import React, {useState} from "react";

// for a single useState and adding the onChange to each input
// function LoginForm(){

//     const [names, setName] = useState("")

//     return (
//         <form>
//             <label>
//                 User Name:
//                 <input
//                 type= "text"
//                 value = {name}
//                 onChange ={(e) => setName(e.target.value)}/>
//             </label>

//         </form>
//     )
// }



// for multiple feilds in the form using useState and onChnage at once

function LoginForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('Form data:', formData);
        alert('Submitted! ')
    }

    return(
        <div>
            <h2>
                Login
            </h2>
            <br/>
            <form 
                onSubmit={handleSubmit}>
                <label>
                User Name:
                </label>
                <br/>
                <input
                    type= "text"
                    name = 'name'
                    value = {formData.name}
                    onChange ={handleChange}
                />
                <br/>
                <label>
                    Email:
                </label>
                <br/>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <br/>
                <label>
                    Password:
                </label>
                <br/>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <br/>
                <button type="submit"> Login In</button>

            </form>

        </div>
        
    )

}

export default LoginForm;