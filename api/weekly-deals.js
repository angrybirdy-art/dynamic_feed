export default function handler(req, res) {
  const { first_name, country } = req.query;

  const discount = country === 'US' ? '50%' : '40%';
  const greeting = first_name ? `Hey ${first_name}, ` : '';
  const countryText = country ? ` (${country})` : '';

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(
    `<table><tr><td><h2>${greeting}This Week's Deals for your Country - ${countryText}</h2><p>${discount} off all items...</p></td></tr></table>`
  );
}
