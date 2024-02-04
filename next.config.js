/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.tmdb.org",
				port: "",
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

module.exports = nextConfig;
