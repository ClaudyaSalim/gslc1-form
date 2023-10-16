import './App.css';

function Inputs({labelName, inputType, placeholder}){
  return (
    <div className='inputGroup'>
      <label><b>{labelName}</b></label>
      <input type={inputType} placeholder={placeholder}></input>
    </div>
  )
}

function InputRadio({labelName, radioName, inputValue}){
  return (
    <div className='inputGroup'>
      <input type='radio' name={radioName} value={inputValue}></input>
      <label>{labelName}</label>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className='FormBox'>
        <form>
          <Inputs labelName='Name' inputType='text' placeholder='John Doe'></Inputs>
          <label><b>Gender</b></label>
          <div className='radioGroup'>
            <InputRadio labelName='Male' radioName="gender" value="male"></InputRadio>
            <InputRadio labelName='Female' radioName="gender" value="female"></InputRadio>
          </div>
          <label><b>Country</b></label>
          <select>
            <option value='Asia'>Asia</option>
            <option value='America'>America</option>
            <option value='Europe'>Europe</option>
            <option value='Australia'>Australia</option>
          </select>
          <Inputs labelName='Email' inputType='email' placeholder='john.doe@gmail.com'></Inputs>
          <Inputs labelName='Password' inputType='password' placeholder='Password'></Inputs>
          <button type='submit'><b>Submit Form</b></button>
        </form>
      </div>
    </div>
  );
}

export default App;
