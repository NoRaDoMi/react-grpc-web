// import { GreeterClient } from '../grpc/helloworld_grpc_web_pb.js';
// import { HelloRequest, RepeatHelloRequest } from '../grpc/helloworld_pb.js';
import { GreetServiceClient } from '../grpc/greet_grpc_web_pb.js';
import { Greeting, GreetRequest } from '../grpc/greet_pb.js';

const URL = 'http://' + window.location.hostname + ':8080';
// const client = new GreeterClient(URL, null, null);
const client = new GreetServiceClient(URL, null, null);

const metadata = { 'custom-header-1': 'value1' };

export default {
	// sayHello: (name, callback) => {
	//   const request = new HelloRequest();
	//   request.setName(name);
	//   client.sayHello(request, metadata, callback);
	// },
	// sayRepeatHello: ({ name, count }) => {
	//   const streamRequest = new RepeatHelloRequest();
	//   streamRequest.setName(name);
	//   streamRequest.setCount(count);
	//   return client.sayRepeatHello(streamRequest, metadata);
	// },
	sayHello: (name, callback) => {
		const greeting = new Greeting();
		greeting.setFirstName(name);
		greeting.setLastName(name);

		const greetRequest = new GreetRequest();
		greetRequest.setGreeting(greeting);
		client.greet(greetRequest, metadata, callback);
	}
};
