
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
    switch(event.type){
        case "checkout.session.completed": {
            const session = event.data.object

            const appointmentId = session.metadata?.appointmentId

            const paymentId = session.metadata?.paymentId

            if (!appointmentId || !paymentId) {
                console.error("Missing appointmentId or paymentId in session metadata");
                return { message: "Missing appointmentId or paymentId in session metadata" }
            }

            const appointment = await prisma.appointment.findUnique({
                where: {
                    id: appointmentId
                }
            })

            if (!appointment) {
                console.error(`Appointment with id ${appointmentId} not found`);
                return { message: `Appointment with id ${appointmentId} not found` }
            }
        

}