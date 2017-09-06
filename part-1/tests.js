const expect = require('chai').expect;
const {
  month,
  reverseSentence,
  nameProps,
  filterBetween
} = require('../part-1/functions.js');

describe("#month", function() {

  it('Checks for the correct month on a given object', function(){
    expect(month(new Date(2017, 7, 17))).to.equal("August");
    expect(month(new Date(2018, 0, 1))).to.equal("January");
    expect(month(new Date(2017, 11, 25))).to.equal("December");
    expect(month(new Date(2017, 9, 31))).to.equal("October");
    expect(month(new Date(2017, 8, 17))).to.equal("September");
    expect(month(new Date(2017, 4, 17))).to.equal("May");
    expect(month(new Date(2017, 2, 17))).to.equal("March");
    expect(month(new Date(2017, 5, 17))).to.equal("June");
  })

  it('If the object is not a date then throws an error', function(){
    expect(function() {month()}).to.throw("The correct object was not passed");
  })
})

describe("#reverseSentence", function() {

  it('Checks whether the sentence is actually reversed or not', function(){
    expect(reverseSentence("The dog is cool.")).to.equal("cool. is dog The");
    expect(reverseSentence("The super cool dood.")).to.equal("dood. cool super The");
    expect(reverseSentence("The dog.")).to.equal("dog. The");
    expect(reverseSentence("This is a very very very very very long sentence."))
    .to.equal("sentence. long very very very very very a is This");
    expect(reverseSentence("The")).to.equal("The");
  })

  it('If the object passed is not a string then throw an error', function(){
    expect(function() {reverseSentence()}).to.throw("The correct object was not passed");
  })
})

describe("#nameProps", function() {

  it('Checks for the properties of a given object', function(){
    let person = {
      firstName: "Jack",
      lastName: "Lubaway",
      age: 26,
      eyeColor: "brown"
    }
    expect(nameProps(person)).to.deep.equal([ 'age', 'eyeColor', 'firstName', 'lastName' ]);
  })

  it('If what is passed is not an object throw an error', function(){
    expect(function() {nameProps()}).to.throw("The correct object was not passed");
  })
})

describe("#filterBetween", function() {

  it('Checks whether the returned array is filtered correctly', function(){
    let arr = ['aardvark', 'ant', 'wolf', 'zebra', 'bear', 'cat', 'dog', 'hyena', 'crab']
    expect(filterBetween(arr, 'ant', 'cat')).to.deep.equal(['aardvark', 'wolf', 'zebra', 'dog', 'hyena', 'crab']);
    expect(filterBetween(arr, 'ant', 'zebra')).to.deep.equal(['aardvark']);
    expect(filterBetween(arr, 'aardvark', 'wolf')).to.deep.equal(['zebra']);
    expect(filterBetween(arr, 'aardvark', 'zebra')).to.deep.equal([]);
  })

  it('If the object is not an array throw an error', function(){
    expect(function() {filterBetween()}).to.throw("The correct object was not passed");
    it('If the objects in the array are not strings then throw an error', function(){
      expect(function() {filterBetween([66])}).to.throw("The correct object was not passed");
    })
  })
})
