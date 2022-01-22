// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'eu-west-1'});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

// Create variables to hold numeric key values
var season = SEASON_NUMBER;
var episode = EPISODES_NUMBER;

var params = {
  TableName: 'EPISODES_TABLE',
  Key: {
    'Season' : season,
    'Episode' : episode
  },
  UpdateExpression: 'set Title = :t, Subtitle = :s',
  ExpressionAttributeValues: {
    ':t' : 'NEW_TITLE',
    ':s' : 'NEW_SUBTITLE'
  }
};

docClient.update(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
