import React from 'react'

const Form = () => {
    return (
        

        <div className="card">
        <div className="card__body">
        <form>
        
          
        <div className="form-group">
        <label htmlFor="inputlabel1">label1</label>
        <input type="text" className="form-control" id="inputlabel1" placeholder="Label1" />
      </div>
      <div className="form-group">
        <label htmlFor="inputlabel2">Label1</label>
        <input type="text" className="form-control" id="inputlabel2" placeholder="Label2" />
      </div>
      <div className="form-group">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />

            <label htmlFor="inputPassword4">Re-Enter Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Re-enterPassword" />
          
        </div>
      
        
          
          <div className="form-group">
            <label htmlFor="inputChoose">Choose</label>
            <select id="inputChoose" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          
        
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      </div>
      </div>
        



    )
}

export default Form
