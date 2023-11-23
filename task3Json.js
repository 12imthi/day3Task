const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
      
 console.log( JSON.stringify(object1) === JSON.stringify(object2));
    //   console.log(
    //     _.isEqual(object1, object2));