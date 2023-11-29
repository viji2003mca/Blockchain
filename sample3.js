var validator = require('validator');
f=validator.isEmail('foo@bar.com');
if(f==true)
{
    console.log("Email validated successfully");
}
