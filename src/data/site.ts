export const site = {
  marca: 'JmCode',
  nome: 'José Matheus',
  nomeCompleto: 'José Matheus de Lima Alvino',
  cargo: 'Desenvolvedor Full Stack',
  cidade: 'Fortaleza, CE',
  descricao: 'Desenvolvedor full stack em Fortaleza. Construo apps em React Native e Expo, e as APIs por trás deles.',
  email: 'josematheusdev@gmail.com',
  github: 'https://github.com/JoseMatheus29',
  linkedin: 'https://www.linkedin.com/in/jmatheus029/',
};

// Prefixa caminhos internos com o base do GitHub Pages (/Portfolio/).
export const comBase = (caminho = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${caminho.replace(/^\//, '')}`;

export const curriculo = comBase('curriculo-jose-matheus.pdf');
export const foto = comBase('foto-perfil.jpg');
