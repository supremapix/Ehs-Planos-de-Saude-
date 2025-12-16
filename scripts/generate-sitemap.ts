import * as fs from 'fs';
import * as path from 'path';

const COMPANY_SITE_URL = 'https://ehsplanosdesaude.com.br';

/**
 * IMPORTANT: These lists must be kept in sync with constants.tsx
 * The slugify function below must match utils/slugify.ts
 * When adding/removing locations in constants.tsx, update these lists
 * and run: npm run generate-sitemap
 */
const BAIRROS_CURITIBA = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú (Alto da Glória)", 
  "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", 
  "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", "Bom Retiro", 
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", 
  "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba (CIC)", "Cristo Rei", 
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", 
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", 
  "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", 
  "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", 
  "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Vila Verde", "Vila Barigui", 
  "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", 
  "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro (Uberaba)", 
  "Vila Osternack (Sítio Cercado)", "Conjunto Caiuá (CIC)", "Conjunto Parigot de Souza (CIC)", 
  "Vila Reno (CIC)", "Vila Audi (CIC)"
];

const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", 
  "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", 
  "Tijucas do Sul", "Tunas do Paraná", "Curitiba"
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export { slugify };

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${COMPANY_SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${COMPANY_SITE_URL}/sitemap</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  xml += `  <!-- Cidades da Região Metropolitana -->\n`;
  for (const cidade of CIDADES_RMC) {
    const slug = slugify(cidade);
    const priority = cidade === 'Curitiba' ? '0.9' : '0.7';
    xml += `  <url>
    <loc>${COMPANY_SITE_URL}/cidade/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  }

  xml += `  <!-- Bairros de Curitiba -->\n`;
  for (const bairro of BAIRROS_CURITIBA) {
    const slug = slugify(bairro);
    xml += `  <url>
    <loc>${COMPANY_SITE_URL}/plano-de-saude/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  }

  xml += `</urlset>`;
  
  return xml;
}

function generateRoutes(): string[] {
  const routes: string[] = ['/', '/sitemap'];
  
  for (const cidade of CIDADES_RMC) {
    routes.push(`/cidade/${slugify(cidade)}`);
  }
  
  for (const bairro of BAIRROS_CURITIBA) {
    routes.push(`/plano-de-saude/${slugify(bairro)}`);
  }
  
  return routes;
}

const sitemap = generateSitemap();
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated with ${BAIRROS_CURITIBA.length + CIDADES_RMC.length + 2} URLs`);
console.log(`Output: ${outputPath}`);

const routes = generateRoutes();
const routesPath = path.join(process.cwd(), 'prerender-routes.json');
fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2));
console.log(`Routes file generated with ${routes.length} routes`);
console.log(`Output: ${routesPath}`);
