import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tecnologiasDoFiltro = z.enum(['React Native', 'TypeScript', 'Node', 'PHP', 'SQL', 'Rust', 'Python']);

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projetos' }),
  schema: z.object({
    nome: z.string(),
    origem: z.string(),
    periodo: z.string(),
    papel: z.string(),
    ordem: z.number(),
    largura: z.union([z.literal(4), z.literal(6), z.literal(8)]),
    destaque: z.boolean().default(false),
    resumo: z.string(),
    chamada: z.string(),
    stackCurta: z.string(),
    tecnologias: z.array(tecnologiasDoFiltro),
    atividade: z.string().optional(),
    funcionalidades: z.array(z.string()),
    tituloFuncionalidades: z.string().default('O que faz'),
    stack: z.array(z.object({ area: z.string(), itens: z.string() })),
    repositorios: z.array(z.object({ rotulo: z.string(), url: z.url()})).default([]),
    // Caminhos em public/. Sem capturas, a galeria não é exibida.
    capturas: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          // celular: tela vertical; janela: app de desktop; faixa: imagem larga e baixa.
          formato: z.enum(['celular', 'janela', 'faixa']).default('celular'),
          largura: z.number(),
          altura: z.number(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projetos };
