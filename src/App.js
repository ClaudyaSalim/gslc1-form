import './App.css';

function Inputs({labelName, inputType, placeholder}){
  return (
    <div className='inputGroup'>
      <label><b>{labelName}</b></label>
      <input type={inputType} placeholder={placeholder}></input>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className='FormBox'>
        <form>
          <Inputs labelName='Name' inputType='text' placeholder='John Doe'></Inputs>
          <Inputs labelName='Email' inputType='email' placeholder='john.doe@gmail.com'></Inputs>
          <Inputs labelName='Password' inputType='password' placeholder='Password'></Inputs>
          <button type='submit'><b>Submit Form</b></button>
        </form>
      </div>
    </div>
  );
}

export default App;
