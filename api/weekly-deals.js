export default function handler(req, res) {
  const { first_name, country, client_id, subscription_date } = req.query;

  const discount = country === 'US' ? '50%' : '40%';
  const greeting = first_name ? `Hey ${first_name}, ` : '';
  const countryText = country ? ` (${country})` : '';
  const clientText = client_id ? ` | Client ID: ${client_id}` : '';
  const dateText = subscription_date ? ` | Subscribed: ${subscription_date}` : '';

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(
    `<table><tr><td><h2>${greeting}This Week's Deals for your Country - ${countryText}</h2><p>${discount} off all items...</p><p style="font-size:12px;color:#888;">${dateText}${clientText}</p></td></tr></table>`
  );
}
