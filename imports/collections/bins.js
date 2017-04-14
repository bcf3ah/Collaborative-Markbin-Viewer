import {Mongo} from 'meteor/mongo';

//create middleware
Meteor.methods({
	'bins.insert': function(){
		return Bins.insert({
			createAt: new Date(),
			content: '',
			sharedWith: [],
			ownerId: this.userId
		});
	},
	
	'bins.remove': function(bin){
		return Bins.remove(bin);
	},

	'bins.update': function(bin, content){
		return Bins.update(bin._id, {$set: {content: content}}); //could also be just {content} using ES6
	},

	'bins.share': function(bin, email){
		return Bins.update(bin._id, {$push: {sharedWith: email}});
	}

});

export const Bins = new Mongo.Collection('bins');