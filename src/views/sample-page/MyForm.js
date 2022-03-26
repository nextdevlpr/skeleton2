// import React from 'react';

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '' };
//     }

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     handleSubmit = (event) => {
//         this.newMethod();
//         fetch('http://localhost:3000/store-data', {
//             method: 'POST',
//             // We convert the React state to JSON and send it as the POST body
//             body: JSON.stringify(this.state)
//         }).then((response) => {
//             console.log(response);
//             return response.json();
//         });

//         event.preventDefault();
//     };

//     newMethod() {
//         alert(`A form was submitted: ${this.state}`);
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

// export default MyForm;
