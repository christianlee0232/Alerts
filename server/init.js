Meteor.startup(() => {
  // code to run on server at startup

  // hold onto to logon ID to be used for this session
  LogonID = new Mongo.Collection('LogonID');

  // loggin on to Surveillint web server
  var result = HTTP.call("GET", Meteor.settings.connectionInfo.url + 'Logon',
    {
      params: {
        wsUser: Meteor.settings.connectionInfo.user,
        wsPasswd: Meteor.settings.connectionInfo.pwd,
        wsApplication: "AlertMaker",
        wsClient: ""
      }
    }
  );

  console.log(result.content);

  // extracting logonid
  var wrapped = result.content.match("&gt;&lt;LogonID&gt;(.*)&lt;/LogonID&gt;&lt;UserName&gt;");
  logonID = wrapped[1];
  console.log('LogonID = ' + logonID);

  // remove all from connection
  LogonID.remove({});

  // create an entry in mongo for logonid
  LogonID.insert({ logonid: logonID })

});
