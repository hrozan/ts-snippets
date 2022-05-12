import { application } from "./app";

const app = application();

app.run().then(() => {
	console.log("server running");
});
