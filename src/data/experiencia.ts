export type Experiencia = {
  id: string;
  empresa: string;
  cargo: string;
  periodo: string;
  resumo: string;
  atividades: string[];
  stack: string;
  link?: { rotulo: string; url: string };
};

// Conteúdo limitado ao que está no currículo: sem telas ou dados internos das empresas.
export const experiencias: Experiencia[] = [
  {
    id: 'conectasus',
    empresa: 'ConectaSUS',
    cargo: 'Desenvolvedor Full Stack Júnior',
    periodo: 'set. 2026 – atual',
    resumo: 'Sou um dos responsáveis pelo ciclo completo de desenvolvimento mobile, entregando novas features de ponta a ponta.',
    atividades: [
      'Crio endpoints na API em PHP e Laravel, e implemento regras de negócio no banco de dados.',
      'Consumo essas APIs no app em React Native e Expo, garantindo a comunicação entre os sistemas.',
      'Faço correções e manutenções pontuais no frontend web em Vue.',
      'Trabalho com Scrum, Gitea, Docker e Portainer.',
    ],
    stack: 'React Native · Expo · Laravel · MySQL · MariaDB · Vue · Docker',
  },
  {
    id: 'gpm',
    empresa: 'GPM Soluções',
    cargo: 'Desenvolvedor Mobile, antes estagiário web',
    periodo: 'fev. 2024 – set. 2026',
    resumo: 'Comecei no ERP vendido a terceirizadas de concessionárias de energia elétrica. Depois de um ano, migrei para o time mobile e fui contratado como analista em novembro de 2025.',
    atividades: [
      'Desenvolvi apps com módulos de segurança do trabalho, ordens de serviço, ordens de serviço mecânicas e obras elétricas.',
      'Construí fluxos offline-first com Realm DB, e atuei na API em PHP e MySQL que sincroniza o ERP e os aplicativos.',
      'No web, desenvolvi funcionalidades com PHP, CodeIgniter e Bootstrap, integradas a AWS Lambda e CloudWatch.',
    ],
    stack: 'React Native · Expo · Realm DB · PHP · CodeIgniter · MySQL · AWS',
  },
  {
    id: 'apple',
    empresa: 'Apple Developer Academy',
    cargo: 'Residente em Desenvolvimento',
    periodo: 'jan. – dez. 2025',
    resumo: 'Participei da fase final do Homero, plataforma de cursos criada dentro da Academy e já em produção.',
    atividades: [
      'Levei para o app os protótipos criados no Figma.',
      'Lidei com sincronização de dados, vazamento de memória e construção de layouts.',
      'Implementei funcionalidades e testes em Swift, em equipes ágeis.',
    ],
    stack: 'Swift · APIs REST · Figma · Scrum',
  },
  {
    id: 'ufc',
    empresa: 'UFC',
    cargo: 'Desenvolvedor Backend, bolsista',
    periodo: 'mar. – dez. 2023',
    resumo: 'Atuei principalmente no backend de projetos da Universidade Federal do Ceará.',
    atividades: [
      'Orbis: fui responsável por todo o backend, com testes em PHPUnit, incluindo os endpoints que recomendam ferramentas de IHC a partir das cartas escolhidas.',
      'API Lampião: contribuí com a API de uma plataforma que preserva o acervo de cordéis do Ceará e da UFC.',
    ],
    stack: 'PHP · Laravel · PHPUnit · React · Python · Flask',
    link: { rotulo: 'Abrir o Orbis', url: 'https://orbistoolkit.vercel.app' },
  },
  {
    id: 'landis',
    empresa: 'Landis+Gyr',
    cargo: 'Estagiário em Testes de Software',
    periodo: 'mai. 2022 – jan. 2023',
    resumo: 'No time de Qualidade de Software, validei softwares internos antes da liberação dos produtos.',
    atividades: [
      'Desenvolvi testes de integração, de estresse, de caixa branca e de caixa preta, com Python e TDD.',
      'Criei testes unitários com PyUnit e de integração com Selenium.',
      'Apliquei Clean Code, com Git e Azure DevOps.',
    ],
    stack: 'Python · PyUnit · Selenium · TDD · Azure DevOps',
  },
];
