import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Members', () => {
  it('should get all members', () =>
    request(Server)
      .get('/api/v1/members')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an.an('object');
      }));

  it('should add a new member', () =>
    request(Server)
      .post('/api/v1/members')
      .send({ nome: 'test', telefone: '+5598981631742', email: 'lolo.tomaz@gmail.com', type_member_id: 1, endereco: 'kkk', situacao: 'ss' })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('nome')
          .equal('test');
      }));

  it('should get an member by id', () =>
    request(Server)
      .get('/api/v1/members/3')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('nome')
          .equal('Lorenzo');
      }));
});
