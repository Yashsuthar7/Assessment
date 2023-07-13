import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Read = () => {

  const [data, setData] = useState([]);
  function getData() {
    axios.get('http://localhost:3000/user')
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      });
  }

  useEffect(() => {
    getData();
  }, [  ]);


  return (
    <>
      <h2>Read Opertaion</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <button className='btn-success'>Edit</button>
                    </td>
                    <td>
                      <button className='btn-danger' onClick={()=> handleDelete (eachData.id)}>Delete</button>
                    </td>

                  </tr>
                </tbody>
              </>
            )
          })

        }
      </table>
    </>
  )
}

export default Read