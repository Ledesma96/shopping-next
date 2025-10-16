/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.expoknews.com',
            'celadasa.vtexassets.com',
            'www.digitalsport.com.ar',
            'player-one.s3.amazonaws.com', // también puedes ponerlo aquí si prefieres
            'images.unsplash.com',
            'picsum.photos'
        ],
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'player-one.s3.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
