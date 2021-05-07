const PineconeRouterMiddleware = {
	/**
	 * @property {string} version the version of this middleware.
	 */
	version: '0.0.0',
	/**
	 * @property {string} name the name of the middleware.
	 */
	name: 'middleware',
	/**
	 * @property {object} settings the middleware settings.
	 */
	settings: {},

	/**
	 * This will be called at router initialization.
	 * used for detecting router settings.
	 * @param {object} component the router's alpine component.
	 */
	init(component, settings) {
		//load settings
		this.settings = {
			...this.settings,
			...(settings?.middlewares?.[this.name] ?? {}),
		};
	},

	/**
	 * Called for each route during initialization,
	 * before the route is processed & added.
	 * @param {Element} el the route's <template> element
	 * @param {object} component the router's alpine component
	 * @param {string} path the route's path
	 */
	onBeforeRouteProcessed(el, component, path) {},

	/**
	 * Will be called before the handlers are executed.
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
