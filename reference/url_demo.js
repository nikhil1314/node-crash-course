const url=require('url');
const myurl=new URL('http://mywebsite.com:4040/hello.html?id=100&status=active');
//serialized URL
console.log(myurl.href);
//string
console.log(myurl.toString());
//Host/(root domain)
console.log(myurl.host);
//hostname(does not get port)
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serazilied query
console.log(myurl.search);
//params object
console.log(myurl.searchParams);
//add param
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);
//loop through params
myurl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`));




