export default defineEventHandler(async (_event) => {
	console.log('Request received');
	// const storage = useStorage('db');
	// await storage.setItem(`telemetry:request:${Date.now()}`, {
	// 	url: getRequestURL(_event),
	// 	method: _event.method,
	// 	headers: getRequestHeaders(_event),
	// });
});
