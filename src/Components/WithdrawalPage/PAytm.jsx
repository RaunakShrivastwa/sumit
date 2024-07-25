import React from 'react'

function PAytm() {
  return (
    <form className='w-25 shadow-lg p-3'>
        
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">PayTm No.</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Withdrawal Amount</label>
                <input type="text" value='0' class="form-control" id="exampleInputPassword1" />
            </div>
           
            <button type="submit" class="btn btn-warning w-100">Submit</button>
        </form>
  )
}

export default PAytm