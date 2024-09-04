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
            {
                protocol: 'https',
                hostname: 'blog.triv.co.id',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
