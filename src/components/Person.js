import React, { useEffect, useState } from 'react';
import User from './User';
import './Person.css';

const Person = () => {
  const [user, setUser] = useState([])
  const [amount, setAmount] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setUser(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className="pay-area col-md-6 text-center">
          <h4>Pay Employee</h4>
          <p>Total Employee paid: </p>
          <p>Total amount Paid: </p>
      </div>
      <div classname="person-area col-md-4 mr-0" >
        {user.map(x => <User user={x} key={x.id.value}></User>)}
      </div>
      
    </div>
  );
};

export default Person;