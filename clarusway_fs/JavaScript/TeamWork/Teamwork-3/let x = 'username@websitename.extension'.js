let x = 'user@gmail.com';
if(x.includes('@') &&  (x.length-3 == x.indexOf('.')||x.length-4 == x.indexOf('.')){
    console.log('dogru');
    
}
else{
     console.log('yanlis');   
    }