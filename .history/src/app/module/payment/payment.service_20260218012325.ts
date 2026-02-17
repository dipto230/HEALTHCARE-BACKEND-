
import Stripe from "stripe"
import { prisma } from "../../lib/prisma"


const handlerStripeWebhookEvent = async(event: Stripe.Event)=>{
    const existingPayment = await prisma.payment.findFirst({
        where:{
            stripeEventId:  event.id
        }
    })
     if(existingPayment){
        console.log(`Event ${event.id} already processed. Skipping`);
        return {message : `Event ${event.id} already processed. Skipping`}
    }

}