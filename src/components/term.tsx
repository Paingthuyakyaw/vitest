import { useState } from "react"

const Term = () => {

    const [isChecked, setIsChecked] = useState(false)
    
  return (
    <div>
       <h1>Terms and Conditions</h1>

       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, cum!</p>

       <div>
        <input checked={isChecked} onChange={() => setIsChecked(!isChecked)} type="checkbox" />
        <label>I agree to the terms and conditions</label>
       </div>   

       <button disabled={!isChecked} >Submit</button>
    </div>
  )
}

export default Term