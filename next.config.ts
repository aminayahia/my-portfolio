import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* options de configuration ici */
  reactStrictMode: true,
  output: 'export', // Ajoutez cette ligne pour activer l'export statique
};

export default nextConfig;

