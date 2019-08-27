({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  return body;
  let columns = api.run('this.list_columns', { sheetid: env.get('sheetid') });

  // Create the ticket entry in our databse
  api.run('this.add_rows', {
    						 sheetid: env.get('sheetid'),
                             user: api.run('this.get_email', {user: body.user.id})[0].email,
                             title: body.submission.title,
                             description: body.submission.description,
                             urgency: body.submission.urgency,
    						 column2: columns[2].id,
    						 column3: columns[3].id,
    						 column4: columns[4].id,
    						 column5: columns[5].id,
    						 column6: columns[6].id,
    						 column7: columns[7].id,
    						 column11: columns[11].id,
                           });
  // Choose the description and return to user
  if (body.submission.description) {
    api.run('this.confirm_ticket', {
      								channel: body.user.id,
                                    header: `Ticket created for ${body.user.name}`,
                                    title: body.submission.title,
                                    description: body.submission.description,
                                    urgency: body.submission.urgency,
                                   });
  } else {
    api.run('this.confirm_ticket', {
      								channel: body.user.id,
                                    header: `Ticket created for ${body.user.name}`,
                                    title: body.submission.title,
                                    description: 'None provided',
                                    urgency: body.submission.urgency,
                                   });
  }
    
  return { status_code: 200 };
}
