import chai  from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index';


const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
describe('Orders',() => {
  describe('/GET Orders', () => {
    it('It should GET all orders', done => {
      chai.request(app)
      .get('/api/v1/orders/')
      .end( (err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
    });
  });
  
  describe('/POST Order', () => {
    it('It should create an order', done => {      
      const new_order = {
        id: 3,
        quantity: 2,
      };
      chai.request(app)
      .post('/api/v1/orders/')
      .send(new_order)
      .end( (err, res) => {
        expect(new_order).to.have.property('quantity');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        // expect(res.body).to.have.lengthOf('object');
        // res.length.should.be.eql(2)
        done();
      });
    });
  });
  describe('/PUT Order', () => {
    it('It should update an order', done => {      
      const updated_order = {
        // id: 3,
        meal_title: 'Test title',
        user_id: 21,
        meal_size: 'plates',
        quantity: 4,
        price: 500,
        total: 2000,
        currency: 'NGN',
        caterer_id: 3,
        status: 1,
        created_at: new Date()
      };
      chai.request(app)
      .put('/api/v1/orders/4')
      .send(updated_order)
      .end( (err, res) => {
        expect(updated_order).to.have.property('quantity');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        done();
      });
    });
  });

  describe('/DELETE Order', () => {
    it('It should delete an order', done => {      
      const delete_order_request_body = {
        user_id: 21,
      };
      chai.request(app)
      .delete('/api/v1/orders/4')
      .send(delete_order_request_body)
      .end( (err, res) => {
        expect(delete_order_request_body).to.have.property('user_id');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data.status).to.equal(-1);
        done();
      });
    });
  });
});