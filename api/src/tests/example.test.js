// const chai = require('chai');
// import chai from 'chai';
// const expect = chai.expect;
// const assert = chai.assert;
// const should = chai.should();
// const add = (a, b) => a + b;
// const square = (a) => a * a;
// const setName = (obj, fullName) => {
//   const nameArray = fullName.split(' ');
//   obj.first_name = nameArray[0];
//   obj.last_name = nameArray[1];
//   return obj;
// }


// it('should return 12', () => {
//   const res = add(12, 0);

//   if(res !== 12) {
//     throw new Error(`Returned value expected t be 12, ${res} was gotten.`);
//   }
// });

// it('should expect object has firstname and lastname and object is a type object', ()=> {
//   const name_object = setName({}, "Olayinka Raheem");
//   const one = 1;
//   name_object.should.be.an('object');  
//   assert.isObject(name_object, 'result is an object');  
//   // name_object.should.equal({first_name: "Olayinka", last_name: "Raheem"});
//   expect(name_object).to.be.an('object');
//   expect(name_object).to.have.property('last_name');
// });