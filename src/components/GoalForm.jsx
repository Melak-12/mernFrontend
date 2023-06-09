import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../features/goals/goalSlice"

const GoalForm = () => {

  const [text,setText]=useState('')
  const dispatch=useDispatch()


  const onSubmit=e=>{
    e.preventDefault()

    dispatch(createGoal ({text}))
    setText('')

  }

  return (<section className="form">
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Task</label>
          <input type="text" name="text" id="text" 
          placeholder="Add your Task"
           value={text}
           onChange={(e)=>setText(e.target.value)}/>
          
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">ADD TASK</button>
        </div>
      </form>
    </section>
 

     
  )
}

export default GoalForm