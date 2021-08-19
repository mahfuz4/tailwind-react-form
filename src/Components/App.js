import React, { useReducer } from 'react';

const initialState = {
   name: '',
   age: 0,
   email: '',
   password: '',
   error: {}
}

const reducer = (state, action) => {
   switch(action.type) {
      case 'name':
         return {
            ...state,
            name: action.value
         }
      case 'age':
         return {
            ...state,
            age:action.value     }
      case 'email':
         return {
            ...state,
            email: action.value       }

      case 'password':
         return {
            ...state,
            password: action.value
         }
      default:
         return {error: state.error}
   }
}

export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)

   const {name, age, email, password} = state;

   const handleChange = e => {
      dispatch({value: e.target.value,
      type: e.target.name})

   }

   let output;

   const handleSubmit = e => {
      e.preventDefault();

      // const nameValue = e.target[0].value.trim()
      // const ageValue = Number(e.target[1].value)
      // const emailValue = e.target[2].value.trim().toLowerCase()
      // const passwordValue = e.target[3].value.trim()
      const nameValue = state.name
      const ageValue = Number(state.age)
      const emailValue = state.email
      const passwordValue = state.password
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailRegex = regex.test(emailValue);
      const isAdult = ageValue >= 18
      const isTruePassword = String(passwordValue).length > 6;
      console.log(nameValue, emailRegex, isAdult, isTruePassword)
      if (nameValue && emailRegex && isAdult && isTruePassword) {
         console.log(state)                                 
      } else {
         console.log("Failed"); 
      }
   
   }


   return (
       
      <div className='flex justify-center items-center h-screen'>

         <>
            <form className='bg-gray-100/70 p-8 rounded-md' onSubmit={handleSubmit}>
               <h1 className="text-indigo-500 text-2xl block text-center">Registration!</h1>
               <div className="block">
                  <label className='label' htmlFor="name">Name</label>
                  <input className='input' type="text" name="name" id="name" defaultValue={name} onChange={handleChange} autoComplete='off' />
               </div>

               <div className="block">
                  <label className='label' htmlFor="age">Age</label>
                  <input className='input' type="number" name="age" id="age" defaultValue={age} onChange={handleChange} />
               </div>

               <div className="block">
                  <label className='label' htmlFor="name">Email</label>
                  <input className='input' type="text" name="email" id="email" defaultValue={email} onChange={handleChange} autoComplete='off' />
               </div>

               <div className="block">
                  <label className='label' htmlFor="password">Password</label>
                  <input className='input' type="password" name="password" id="password" defaultValue={password} onChange={handleChange} />
               </div>
               <input className="block text-gray-800 cursor-pointer py-2 w-full mt-4 rounded-full bg-gray-200 hover:bg-gray-300 text-lg transition" type="submit" value="Submit" />
            </form>

            <div>
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Email</th>
                     
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{state.name}</td>
                     <td>{state.age}</td>
                     <td>{state.email}</td>
                     
                  </tr>
               </tbody>
            </table>
            </div>
         </>

      </div>
   )
}
