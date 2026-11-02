# Portfólio de José Matheus

Site pessoal feito com Astro, MDX, React e Tailwind CSS.

## Comandos

```bash
npm install        # instala as dependências (Node 22.12 ou superior)
npm run dev        # servidor local em http://localhost:4321/Portfolio/
npm run check      # checagem de tipos
npm run build      # gera o site em dist/
npm run preview    # abre o build localmente
```

## Conteúdo

- **Projetos:** cada arquivo em `src/content/projetos/` vira um bloco na home e uma página própria. Os campos são validados em `src/content.config.ts`, e as decisões técnicas ficam no corpo do arquivo, com `<Decisao>`.
- **Capturas de tela:** coloque as imagens em `public/projetos/` e liste-as no campo `capturas` do projeto, com `alt`, `largura`, `altura` e `formato` (`celular`, `janela` ou `faixa`). Sem capturas, a galeria não aparece.
- **Experiência:** fica em `src/data/experiencia.ts`. Use só o que já está no currículo, sem telas ou dados internos das empresas.
- **Contato e links:** ficam em `src/data/site.ts`.
- **Cores e modo escuro:** as cores dos dois temas ficam em `src/styles/global.css`. O site abre no modo claro, e a escolha da pessoa fica salva no navegador.

## Publicação

O GitHub Actions gera e publica o site a cada push na `main`. Em **Settings > Pages**, o campo **Source** precisa estar em **GitHub Actions**.
