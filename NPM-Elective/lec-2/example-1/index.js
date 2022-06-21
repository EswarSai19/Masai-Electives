
   
import inquirer from 'inquirer';
import  filter  from 'lodash';
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        message : "Enter user name",
        name:"username"
    },
    {
        type:"password",
        message : "Enter password",
        name:"password"
    },
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    console.log('Welcome back',userDetails.username)
    inquirer.prompt([
        {
          type: "confirm",
          name : "Delivery",
          message : "Do you want order to be delivered ?",
         default:true
        },
        {
          type: 'input',
          name : "Address",
          message: 'Ok then, Enter Address : ',
          validate(value){
            if(value.length>10){
              return true
            }
            else{
              return "Can you give in more detail"
            }
          }
        },
        {
          type:'input',
          name: 'Phone_Number',
          message:'And then enter your Mobile Number : ',
          validate(value){
            var num = value.length === 10
            if(num){
              return true
            }else{
              return 'Enter a valid number'
            }
          }
        },
        {
          type : 'list',
          name : 'Ordered_Details',
          message : 'Select you dish : ',
          choices : [
            'Burger',
            'Pizza',
            'Chicken Biriyani',
            'Chille Chicken',
          ]
        }, 
        {
          type : 'input',
          name : 'Quantity',
         message: 'How many you want : ',
         validate(value){
          var valid = !isNaN(parseInt(value))
          return valid || 'Please enter number'
         },
         filter(value){
          return parseInt(value)
         }
        },
        

       
    ])
    .then((answers)=>{
      console.log(" ")
      console.log("*****************************")
      console.log("!---------Total Bill----------!")
     console.log("   Delivery :", answers.Delivery )
     console.log("   Address :", answers.Address )
     console.log("   Phone Number :", answers.Phone_Number )
     console.log("   Ordered Items :", answers.Ordered_Details )
     console.log("   Quantity :", answers.Quantity )
     console.log("   Total Price(Include GST) : ",`${answers.Quantity*119}/-` )
     console.log("*****************************")
     
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });