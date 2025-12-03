import React,{useState} from 'react'

const Login = () => {
const [currentState, setCurrentState] = useState("Sign Up");
 const onSubmitHandlaer = async (e) => {
    e.preventDefault();
  }

  return (
      <form onSubmit={onSubmitHandlaer} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' />
        </div>
        {currentState === 'Login'? '':<input  className='w-full border border-gray-300 rounded-md p-2' type="text" name="username" id="username" placeholder='Name'  />}
        <input  className='w-full border border-gray-300 rounded-md p-2' type="email" name="email" id="email" placeholder='Email' required />
        <input  className='w-full border border-gray-300 rounded-md p-2' type="password" name="password" id="password" placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password?</p>

        <p onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')} className='cursor-pointer'>
          {currentState === 'Login' ? 'Create an account' : 'Already have an account? Login'}
        </p>
      </div>
      <div className='w-full text-center mt-4'>
        <button type="submit" className='bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-800 w-full'>
          {currentState}
        </button>

        
      </div>

      </form>
  )
}

export default Login