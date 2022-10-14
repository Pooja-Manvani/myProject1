// import React from 'react';

// export default class PersonRemove extends React.Component {
//   state = {
//     id: ''
//   }

//   handleChange = event => {
//     this.setState({ id: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person ID:
//             <input type="number" name="id" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     )
//   }
// }

import React from 'react';

import API from '../api';

export default class PersonRemove extends React.Component {
  // ...

  handleSubmit = event => {
    event.preventDefault();

    API.delete(`users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  // ...
}