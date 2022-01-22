// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
  ExpressionAttributeValues: {
    ':s': 2,
    ':e': 9,
    ':topic': 'PHRASE'
   },
 KeyConditionExpression: 'Season = :s and Episode > :e',
 FilterExpression: 'contains (Subtitle, :topic)',
 TableName: 'EPISODES_TABLE'
};

docClient.query(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
  }
});
