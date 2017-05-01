const bus = require('servicebus').bus({url: 'amqp://rabbitmq'});

bus.listen('my.event', function (event) {
  console.log(event);
});

setInterval(function () {
  bus.send('my.event', { my: 'updated event' });
}, 5000);


console.log('I am running');