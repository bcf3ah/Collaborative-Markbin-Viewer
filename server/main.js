import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function(){
  	return Bins.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBins', function(){
	//Find the current user, save it to a variable
	const user = Meteor.users.findOne(this.userId);

	//if no user found, just return back to React
	if(!user){return;};

	//Find the current user's email address from Meteor
	const email = user.emails[0].address;

	//return any Bins where the user's email exists in the sharedWith array
	return Bins.find({
		sharedWith: {$elemMatch: {$eq: email}}
	});


  });
});
