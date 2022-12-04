const PineconeRouterMiddleware = {
	/**
	 * @property {string} version the version of this middleware.
	 */
	version: '0.0.0',
	/**
	 * @property {string} name the name of the middleware.
	 */
	name: '{middleware-name}',
	/**
	 * This will be called at router initialization.

	 */
	init(el, path) {},
	/**
	 * Called for each route during initialization,
	 * before the route is processed & added.
	 * @param {Element} el the route's <template> element
	 * @param {string} path the route's path
	 */
	onBeforeRouteProcessed(el, path) {},
	/**
	 * Called for each route during initialization,
	 * after the route is processed & added.
	 * @param {Element} el the route's <template> element
	 * @param {string} path the route's path
	 */
	onAfterRouteProcessed(el, path) {},
	/**
	 * Will be called before the handlers are executed and done.
	 * during navigation (PineconeRouter.navigate()).
	 * @param {object} route the matched route, undefined if not found.
	 * @param {string} path the path visited by the client
	 * @param {boolean} firstload first page load and not link navigation request
	 * @returns {string|null} 'stop' to make the navigate function exit (make sure to send the loadend event); none to continute execution.
	 */
	onBeforeHandlersExecuted(route, path, firstload) {},

	/**
	 * Will be called after the handlers are executed and done.
	 * during navigation (PineconeRouter.navigate()).
	 * this wont be executed if a handler redirected
	 * @param {object} route the matched route, undefined if not found.
	 * @param {string} path the path visited by the client
	 * @param {boolean} firstload first page load and not link navigation request
	 * @returns {string|null} 'stop' to make the navigate function exit (make sure to send the loadend event); none to continute execution.
	 */
	onHandlersExecuted(route, path, firstload) {},
};

if (window.PineconeRouterMiddlewares == null)
	window.PineconeRouterMiddlewares = [PineconeRouterMiddleware];
else window.PineconeRouterMiddlewares.push(PineconeRouterMiddleware);
