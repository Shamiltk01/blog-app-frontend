import React from 'react'
import NavBar from './NavBar'

const ViewAllBlog = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <table class="table">
            <thead>
              <tr>
                
                <th scope="col">userName</th>
                <th scope="col">commment</th>
                <th scope="col">date</th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              
            </tbody>
          </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllBlog