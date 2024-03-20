// import React, { useState } from 'react';

// function MyComponent() {
//   const [age, setAge] = useState(42);
//   const [name, setName] = useState('Taylor');

//   function handleClick() {
//     // setAge(age + 1 ); // Increment age by 1
//     // setAge(age + 1   );
//     setAge(a => a + 1); // setAge(42 => 43)
//     setAge(a => a + 1); // setAge(43 => 44)
//     setAge(a => a + 1);
//     console.log("running first time")
//   }

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <button onClick={handleClick}>Increment Age</button>
//     </div>
//   );
// }

// export default MyComponent;
// import { useState } from "react";

// export default function MyCheckbox() {
//   const [liked, setLiked] = useState(true);

//   function handleChange(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <label>
//         <input type="checkbox" checked={liked} onChange={handleChange} />I liked
//         this
//       </label>
//       <p>You {liked ? "liked" : "did not like"} this.</p>
//     </>
//   );
//!!!!!!!!!!!!!!!! passing the updater function and passing the state directly!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(a => a + 1);
//     // setAge(a + 1)
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "Ahmad",
    lastName: "khawar",
    email: "ahmad12@gmail.com",
  });

  return (
    <>
    <div className="flex flex-col gap-5">
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
      </div>
    </>
  );
}
