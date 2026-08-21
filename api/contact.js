export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Accepts both the original short names and the human-readable names the
  // live FormSubmit form uses, so this stays a drop-in replacement.
  const b = req.body || {};
  const fn     = b.fn     ?? b['First Name'];
  const ln     = b.ln     ?? b['Last Name'];
  const ph     = b.ph     ?? b['Phone'];
  const em     = b.em     ?? b.email;
  const want   = b.want   ?? b['Interested In'];
  const exp    = b.exp    ?? b['Shooting Experience'];
  const rental = b.rental ?? b['Needs Rental'];
  const msg    = b.msg    ?? b['Message'];

  if (!fn || !em) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const html = `
    <h2>New seat request — Wade's Tactical</h2>
    <p><strong>Name:</strong> ${escapeHtml(fn)} ${escapeHtml(ln || '')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(ph || '—')}</p>
    <p><strong>Email:</strong> ${escapeHtml(em)}</p>
    <p><strong>What they're after:</strong> ${escapeHtml(want || '—')}</p>
    <p><strong>Shooting experience:</strong> ${escapeHtml(exp || '—')}</p>
    <p><strong>Needs a rental?</strong> ${escapeHtml(rental || '—')}</p>
    <p><strong>Message:</strong><br>${escapeHtml(msg || '—').replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Wade\'s Tactical <onboarding@resend.dev>',
        to: process.env.RESEND_TO || 'WadesTactical@gmail.com',
        reply_to: em,
        subject: `New seat request — ${fn} ${ln || ''}`.trim(),
        html
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Resend error:', errText);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
