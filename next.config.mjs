/** @type {import('next').NextConfig} */
const API_URL = process.env.API_BASE_URL
const nextConfig = {
    env: {
        NEXTAUTH_SECRET:'WSwCP6asuo/+ADE+5Ocf5wivIvleeVlqIkqO/dLUnXY='
    },
    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination:`${API_URL}/v1/:path*`
            }
        ]
    }
};

export default nextConfig;
