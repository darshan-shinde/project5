// import { Center,
//     Text,
//     FormControl,
//     Input,
//     FormLabel,
//     Box,
//     Checkbox,
//     Button,} from "@chakra-ui/react"

// export const Sign = ()=>{

//     return (
//         <div>
//            <Center mb='5'><Text fontSize='4xl' m='5'>CREATE ACCOUNT</Text></Center>
//             <Center>
//                 <Box width='30%'>
//                     <FormControl isRequired mb='5'>
//                         <FormLabel htmlFor='FistName'>First Name</FormLabel>
//                         <Input mb='5' id='Fname' placeholder='' />
//                         <FormLabel htmlFor='LastName'>Last Name</FormLabel>
//                         <Input mb='5' id='Lname' placeholder='' />
//                         <FormLabel htmlFor='Email'>Email</FormLabel>
//                         <Input mb='5' id='mail' placeholder='' />
//                         <FormLabel htmlFor='Password'>Password</FormLabel>
//                         <Input mb='5' id='pass' placeholder='' />
//                     </FormControl>
//                 </Box>   
//             </Center>
//             <Center><Checkbox defaultChecked>Checkbox</Checkbox><Text>Subscribe to stay updated with new offers!</Text></Center>
//             <Center><Button width='30%' mt='5' bg='black' color='white'>CREATE</Button></Center>
            
//         </div>
//     )
// }
import "../App.css"
import { useState } from "react";
import axios from "axios";

 

export const Sign = () => {
    const [user, setUser] = useState({
		// firstName: '',
		// lastName: '',
		// email: '',
		// password: '',
		// mobile: '',
  });
  
  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
        let inputName = e.target.name;
        setUser({
            ...user,
            [inputName] : e.target.value,
        })
  };

//   let postData = async (value) => {
//     let res = await fetch("https://bluefly-api.herokuapp.com/user",{
          
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             value,
//         })
//     })
//      let data = await res.json();
//      console.log(data);
//   }

//   const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(user);
// 		axios.post('https://bluefly-api.herokuapp.com/user')
// 			.then(function (response) {
// 				console.log(response);
// 			})
// 			.catch(function (error) {
// 				console.log(error);
// 			});
//         let value = user;
//         postData(value)

//   };
const postData = async({firstName,lastName,email,password,mobile})=>{
    
    try {
        let res= await fetch("https://bluefly-api.herokuapp.com/user",{
            method: "POST",
            headers : {"content-type" : "application/json"},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                mobile,
            })
        })
        let data= await res.json();
        console.log(data)
     
    } catch (error) {
        console.log(error);
    }

}

const handleSubmit= (e)=>{
    e.preventDefault();
    let value = user;
    postData(value);
    alert("Registration Successful")
}

    return (
        <div className="main">
         
        <h1 className="head1">SIGNUP</h1>
          <form className="loginform" onSubmit={handleSubmit}>
              <label className="label">FIRST NAME</label>
              <br></br>
          <input
              name="firstName"
              type="text"
              placeholder=""
              className="login_username"
              onChange={handelchange}
          />
          <br></br>
          <br></br>
          <label className="label">LAST NAME</label>
              <br></br>
          <input
              name="lastName"
              type="text"
              placeholder=""
              className="login_username"
              onChange={handelchange}
          />
          <br></br>
          <br></br>
          <label className="label">EMAIL</label>
              <br></br>
          <input
              name="email"
              type="text"
              placeholder=""
              className="login_username"
              onChange={handelchange}
          />
          <br></br>
          <br></br>
          <label className="label">PASSWORD</label>
          <br></br>
          <input
              name="password"
              type="password"
              placeholder=""
              className="login_username"
              onChange={handelchange}
              width="800%"
          />
          <br></br>
          <br></br>
          <label className="label">PHONE NO.</label>
              <br></br>
          <input
              name="mobile"
              type="number"
              placeholder=""
              className="login_username"
              onChange={handelchange}
          />
          <br></br>
          <br></br>
          <input type="submit" value={'SUBMIT'} className="login_submit" />
      </form>
      <br></br>
      
    </div>
    )
}