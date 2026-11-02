import { useRef, useState, type KeyboardEvent } from 'react';
import type { Experiencia } from '../data/experiencia';

export default function ExperienceTabs({ experiencias }: { experiencias: Experiencia[] }) {
  const [ativa, setAtiva] = useState(experiencias[0].id);
  const abas = useRef<Record<string, HTMLButtonElement | null>>({});

  const moverComTeclado = (evento: KeyboardEvent<HTMLButtonElement>, indice: number) => {
    const destinos: Record<string, number> = {
      ArrowRight: (indice + 1) % experiencias.length,
      ArrowLeft: (indice - 1 + experiencias.length) % experiencias.length,
      Home: 0,
      End: experiencias.length - 1,
    };
    const destino = destinos[evento.key];
    if (destino === undefined) return;
    evento.preventDefault();
    const { id } = experiencias[destino];
    setAtiva(id);
    abas.current[id]?.focus();
  };

  return (
    <div className="flex flex-col gap-6">
      <div role="tablist" aria-label="Experiências profissionais" className="flex flex-wrap gap-2">
        {experiencias.map((experiencia, indice) => {
          const selecionada = experiencia.id === ativa;
          return (
            <button
              key={experiencia.id}
              ref={(elemento) => {
                abas.current[experiencia.id] = elemento;
              }}
              id={`aba-${experiencia.id}`}
              type="button"
              role="tab"
              aria-selected={selecionada}
              aria-controls={`painel-${experiencia.id}`}
              tabIndex={selecionada ? 0 : -1}
              onClick={() => setAtiva(experiencia.id)}
              onKeyDown={(evento) => moverComTeclado(evento, indice)}
              className={`min-h-11 cursor-pointer rounded-xl border border-borda px-4 py-2 font-semibold transition-colors ${
                selecionada ? 'bg-tinta text-fundo' : 'bg-transparent text-tinta hover:bg-fundo'
              }`}
            >
              {experiencia.empresa}
            </button>
          );
        })}
      </div>

      {experiencias.map((experiencia) => (
        <div
          key={experiencia.id}
          id={`painel-${experiencia.id}`}
          role="tabpanel"
          aria-labelledby={`aba-${experiencia.id}`}
          tabIndex={0}
          hidden={experiencia.id !== ativa}
          className="[&:not([hidden])]:flex flex-wrap gap-x-14 gap-y-6"
        >
          <div className="flex min-w-0 flex-[1_1_320px] flex-col items-start gap-2.5">
            <h3 className="text-[clamp(24px,2.6vw,32px)] font-bold leading-[1.15] tracking-[-0.02em]">{experiencia.cargo}</h3>
            <p className="font-mono text-sm text-marca">{experiencia.periodo}</p>
            <p className="text-[19px] leading-[1.4]">{experiencia.resumo}</p>
            {experiencia.link && (
              <a href={experiencia.link.url} target="_blank" rel="noopener" className="py-2.5 font-bold underline underline-offset-4">
                {experiencia.link.rotulo}
              </a>
            )}
          </div>
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-3.5">
            <ul className="flex list-disc flex-col gap-2 pl-5 text-corpo">
              {experiencia.atividades.map((atividade) => (
                <li key={atividade}>{atividade}</li>
              ))}
            </ul>
            <p className="font-mono text-[13px] text-suave">{experiencia.stack}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
