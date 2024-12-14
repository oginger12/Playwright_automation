const {test,expect} = require('@playwright/test');


test ("Get users", async({request})=>{

    //Get request

   const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())

    expect(response.status().toBe('200 OK'))

}) 




test.only ("create user", async({request})=>{
    
//PUT request

var usreid;

await request.post('https://reqres.in/api/users', 
                    {

                        data:{"name":"Kumar","job": "engineer"},
                        headers:{"Accept":"application/json"}
                    });

console.log(await response.json())
expect(response.status().toBe('201'))

var res=await response.json()
userid = res.id
console.log (userid) 
            

}) 




test ("Update users", async({request})=>{
    

}) 




test ("Delete users", async({request})=>{
    
}) 