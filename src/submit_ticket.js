({ http_event }) => {
  var moment = require('moment.js');
  let body = JSON.parse(http_event.parsed_body.payload);
  let columns = api.run('this.list_columns', { sheetid: env.get('sheetid') });
return body;
  // Create the ticket entry in our databse
  api.run('this.add_rows', {
    						 sheetid: env.get('sheetid'),
                             user: api.run('this.get_email', {user: body.user.id})[0].email,
    						 date: moment().format("MM/DD/YYYY"),
                             description: body.submission.description,
                             priority: body.submission.priority,
    						 team: body.submission.team,
    						 department: body.submission.department,
    						 column2: columns[2].id,
    						 column3: columns[3].id,
    						 column4: columns[4].id,
    						 column5: columns[5].id,
    						 column6: columns[6].id,
    						 column7: columns[7].id,
    						 column11: columns[11].id,
    						 column15: columns[15].id,
                           });

  // api.run('this.confirm_ticket', {
  //     								channel: body.user.id,
  //                                   header: `Ticket created for ${body.user.name}`,
  //                                   description: body.submission.description,
  //                                   priority: body.submission.priority,
  //                                   team: body.submission.team,
  //                                   department: body.submission.department,
  //                                  });
    
  return { status_code: 200 };
}
