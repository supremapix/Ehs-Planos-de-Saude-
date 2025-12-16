import { BAIRROS_CURITIBA, CIDADES_RMC } from '../constants';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const slugToNameMap: Record<string, string> = {};

[...BAIRROS_CURITIBA, ...CIDADES_RMC].forEach(name => {
  slugToNameMap[slugify(name)] = name;
});

export function getOriginalName(slug: string): string {
  return slugToNameMap[slug] || slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
