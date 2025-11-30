import { send } from '@emailjs/browser'

const SERVICE_ID = 'service_rmz85be'
const TEMPLATE_ID = 'template_40hzk1u'
const PUBLIC_KEY = 'Elle6Iia_vO0Fp-ty'

export async function sendOrderEmail(order) {
  const itemsSummary = order.items
    .map((item) => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n')

  const firstItem = order.items[0]

  const templateParams = {
    to_email: order.customer.email,
    to_name: order.customer.name,
    order_id: order.id,
    order_date: new Date(order.date).toLocaleString(),
    order_total: order.totals.total.toFixed(2),
    order_items: itemsSummary,
    product_image: firstItem && firstItem.image ? firstItem.image : '',
  }

  try {
    await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
  } catch (error) {
    console.error('Error enviando correo de pedido:', error)
  }
}
