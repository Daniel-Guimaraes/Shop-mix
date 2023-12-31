import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { items } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!items) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const successUrl = `${process.env.URL_HTTP}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.URL_HTTP}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: items,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
