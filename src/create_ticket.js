({ http_event }) => {
  let body = http_event.parsed_body;
  api.run('this.open_dialog', {trigger_id: body.trigger_id, text: body.text});
  return { status_code: 200 };
}
