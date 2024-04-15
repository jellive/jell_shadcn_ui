/** @type {import('next').NextConfig} */

const publicRuntimeConfig = {
    // basePath: process.env.NODE_ENV === 'development' ? `/absproxy/${'3000'}` : '/',
    basePath: `/absproxy/${'3000'}`
};

const serverRuntimeConfig = {}


const nextConfig = {
    basePath: process.env.NODE_ENV === 'development' ? `/absproxy/${'3000'}` : '/',
    publicRuntimeConfig,
    serverRuntimeConfig
}
export default nextConfig
// export default {publicRuntimeConfig, serverRuntimeConfig};
