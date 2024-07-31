/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'cihuy.triv.id',
            port: '',
            pathname: '**',
            },
        ],
    },
};

export default nextConfig;
