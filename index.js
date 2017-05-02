const bus = require('servicebus').bus({url: 'amqp://rabbitmq'});

bus.listen('my.event', event => {
	console.log(event);
});

setInterval(() => {
	bus.send('my.event', { my: 'hey Kathleen' });
}, 5000);


console.log('I am running');