"use strict";

import {Context, Service, ServiceBroker} from "moleculer";

interface  Payment {
	id: string;
	name: string;
	auth: boolean;
}

export default class GreeterService extends Service {

	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "greeter",
			channels: {
				"payment.processed":{
					handler: async (ctx: Context<Payment>) => {
						const payment: Payment = ctx.params;
						console.log("Payment processed: ", payment);
					},
				},
				},
			});
	}

}
