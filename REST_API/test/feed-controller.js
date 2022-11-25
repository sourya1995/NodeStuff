const expect = require('chai').expect;
const sinon = require('sinon');
const User = require('../models/user');
const FeedController = require('../controllers/feed');
const mongoose = require('mongoose');


describe('Feed Controller - Login', function () {
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
    it('should add a created post to the posts of the creator', function (done) {
        
        const req = {
            body: {
                title: 'test post',
                content: 'a test post'
            },
            file: {
                path: 'abc'
            },
            userId: 'agavbblbvlblhlnbvlweblwe'
        };
        const res = {status: function() {
            return this;
        }, json: function() {} }
       FeedController.createPost(req, res, () => {}).then( (savedUser) => {
        expect(savedUser).to.have.property('posts');
        expect(savedUser.posts).to.have.length(1);
        done();
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