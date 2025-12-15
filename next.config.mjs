/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// This allows the build to succeed even if there are linting errors
		// or bugs in the linter itself (like the one you are facing).
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
