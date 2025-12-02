export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".assetsignore","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BqXqzXF5.js",app:"_app/immutable/entry/app.-fzK7tDd.js",imports:["_app/immutable/entry/start.BqXqzXF5.js","_app/immutable/chunks/D3YhbB6_.js","_app/immutable/chunks/lj6ma2N6.js","_app/immutable/chunks/B32v5VJ4.js","_app/immutable/entry/app.-fzK7tDd.js","_app/immutable/chunks/lj6ma2N6.js","_app/immutable/chunks/DmMW_KmW.js","_app/immutable/chunks/r308AAZP.js","_app/immutable/chunks/B32v5VJ4.js","_app/immutable/chunks/Bs4o_7-u.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
