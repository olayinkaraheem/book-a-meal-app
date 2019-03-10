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
        expect(res.body).to.be.an('object');
        done();
      })
    });
  });
  
  describe('/POST Order', () => {
    it('It should create an order', done => {      
      const new_order = {
        meal_id: 2,
        user_id: 4,
        quantity: 2
      };
      chai.request(app)
      .post('/api/v1/orders/')
      .send(new_order)
      .end( (err, res) => {
        expect(new_order).to.have.property('quantity');
        expect(new_order).to.have.property('meal_id');
        expect(new_order).to.have.property('user_id');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });
  
  describe('/PUT Order', () => {
    it('It should update an order', done => {      
      const updated_order = {
        meal_id: 3,
        user_id: 4,
        quantity: 4
      };
      // console.log(updated_order);
      chai.request(app)
      .put('/api/v1/orders/1')
      .send(updated_order)
      .end( (err, res) => {
        expect(updated_order).to.have.property('quantity');
        expect(updated_order).to.have.property('meal_id');
        expect(updated_order).to.have.property('user_id');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data[1][0]).to.have.property('id');
        done();
      });
    });
  });

  describe('/DELETE Order', () => {
    it('It should delete an order', done => {      
      const delete_order_request_body = {
        user_id: 4,
      };
      chai.request(app)
      .delete('/api/v1/orders/3')
      .send(delete_order_request_body)
      .end( (err, res) => {
        expect(delete_order_request_body).to.have.property('user_id');
        // console.log(res.body);
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data[1][0]).to.have.property('id');
        expect(res.body.data[1][0].status).to.equal(-1);
        done();
      });
    });
  });
});