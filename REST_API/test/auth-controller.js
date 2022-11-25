const expect = require('chai').expect;
const sinon = require('sinon');
const User = require('../models/user');
const AuthController = require('../controllers/auth');
const mongoose = require('mongoose');


describe('Auth Controller - Login', function () {
    before(function(done){
        mongoose
        .connect(
            'mongodb+srv://sourya:tCCF!wSTt9-rY7H@cluster0.gf2zckt.mongodb.net/test-messages?retryWrites=true&w=majority'
        )
        .then(result => {
            const user = new User({
                email: 'test@test.com',
                password: 'tester',
                name: 'test',
                posts: [],
                _id: '3u203yr0y02300y0'
            });
            return user.save();
        })
        .then(() => {
            done();
        })
    })
    it('should throw an error if accessing database fails', function (done) {
        sinon.stub(User, 'findOne');
        User.findOne.throws();
        const req = {
            body: {
                email: 'test@test.com',
                password: 'tester'
            }
        };
        AuthController.login(req, {}, () => { }).then(result => {
            expect(result).to.be.an('error')
            expect(result).to.have.property('statusCode', 500);
            done();
        })
        User.findOne.restore();
    })

    it('should send a response with a valid user status for an existing user', function (done) {
       
           
                const req = {userId: '3u203yr0y02300y0'}
                const res = {
                    statusCode: 500,
                    userStatus: null,
                    status: function(code){
                        this.statusCode = code;
                        return this;
                    },
                    json: function(data) {
                        this.userStatus = data.status;
                    }
                };
                AuthController.getUserStatus(req, res, () => {}).then(() => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.userStatus).to.be.equal('I am new!');
                    
                   
                    
                })
            })
          
            after(function(done){
                User.deleteMany({}).then(() => {
                    mongoose.disconnect().then(() => {
                        done();
                    })
                })
            })
})