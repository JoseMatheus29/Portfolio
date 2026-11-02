import { useState } from 'react';

export type ProjetoCard = {
  id: string;
  nome: string;
  origem: string;
  resumo: string;
  stackCurta: string;
  tecnologias: string[];
  largura: 4 | 6 | 8;
  destaque: boolean;
  funcionalidades: string[];
  capturas: { src: string; alt: string; formato: 'celular' | 'janela' | 'faixa'; largura: number; altura: number }[];
  href: string;
};

const TODOS = 'Todos';
const FILTROS = [TODOS, 'React Native', 'TypeScript', 'Node', 'PHP', 'SQL', 'Rust', 'Python'];
const COLUNAS = { 4: 'md:col-span-4', 6: 'md:col-span-6', 8: 'md:col-span-8' };

export default function ProjectGrid({ projetos }: { projetos: ProjetoCard[] }) {
  const [filtro, setFiltro] = useState(TODOS);
  const combina = (projeto: ProjetoCard) => filtro === TODOS || projeto.tecnologias.includes(filtro);
  const total = projetos.filter(combina).length;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-1.5 pt-7">
        <h2 id="projetos" className="scroll-mt-4 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          Projetos
        </h2>
        <div role="group" aria-label="Destacar projetos por tecnologia" className="flex flex-wrap gap-2">
          {FILTROS.map((rotulo) => {
            const ativo = rotulo === filtro;
            return (
              <button
                key={rotulo}
                type="button"
                aria-pressed={ativo}
                onClick={() => setFiltro(rotulo)}
                className={`min-h-11 cursor-pointer rounded-xl border border-borda px-3.5 py-2 font-mono text-sm transition-colors ${
                  ativo ? 'bg-marca text-white' : 'bg-transparent text-tinta hover:bg-bloco'
                }`}
              >
                {rotulo}
              </button>
            );
          })}
        </div>
      </div>

      <p role="status" className="sr-only">
        {filtro === TODOS ? `${total} projetos` : `${total} ${total === 1 ? 'projeto usa' : 'projetos usam'} ${filtro}`}
      </p>

      <div className="grid grid-cols-12 gap-3.5">
        {projetos.map((projeto) => {
          const telas = projeto.capturas.filter((captura) => captura.formato === 'celular').slice(0, 2);
          const faixa = projeto.capturas.find((captura) => captura.formato === 'faixa');
          return (
          <article
            key={projeto.id}
            className={`col-span-12 flex min-w-0 flex-wrap gap-6 rounded-bloco p-[clamp(22px,3vw,36px)] transition-opacity duration-200 ${COLUNAS[projeto.largura]} ${
              projeto.destaque ? 'bg-marca text-white' : 'bg-bloco text-tinta'
            } ${combina(projeto) ? 'opacity-100' : 'opacity-35'}`}
          >
            <div className="flex min-w-0 flex-[1_1_280px] flex-col items-start gap-3">
              <p className="text-[15px] font-semibold">{projeto.origem}</p>
              <h3
                className={`font-extrabold leading-[1.02] tracking-[-0.03em] ${
                  projeto.destaque ? 'text-[clamp(44px,6vw,80px)]' : 'text-[clamp(28px,3vw,40px)]'
                }`}
              >
                {projeto.nome}
              </h3>
              <p className="max-w-[46ch]">{projeto.resumo}</p>
              <p className="font-mono text-[13px]">{projeto.stackCurta}</p>
              <a href={projeto.href} className="py-2.5 font-bold underline underline-offset-4">
                Ver o projeto <span className="sr-only">{projeto.nome}</span>
              </a>
            </div>

            {projeto.destaque && telas.length > 0 && (
              <div className="flex min-w-0 flex-[1_1_280px] items-center gap-2.5">
                {telas.map((captura) => (
                  <img
                    key={captura.src}
                    src={captura.src}
                    alt={captura.alt}
                    width={captura.largura}
                    height={captura.altura}
                    loading="lazy"
                    className="h-auto min-w-0 flex-1 rounded-[18px]"
                  />
                ))}
              </div>
            )}

            {faixa && (
              <img
                src={faixa.src}
                alt={faixa.alt}
                width={faixa.largura}
                height={faixa.altura}
                loading="lazy"
                className="h-auto w-full min-w-0 basis-full self-end rounded-xl"
              />
            )}

            {projeto.destaque && telas.length === 0 && (
              <ul className="flex min-w-0 flex-[1_1_280px] flex-col justify-end text-[15px]">
                {projeto.funcionalidades.slice(0, 4).map((item) => (
                  <li key={item} className="border-t border-white/35 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
          );
        })}
      </div>
    </>
  );
}
