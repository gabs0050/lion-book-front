import { Link } from 'react-router-dom'

export default function Home() {
  const livros = [
    { id: 120, titulo: 'A Volta ao Mundo em 80 Dias' },
    { id: 456, titulo: 'O velho e o menino' },
    { id: 987, titulo: 'As coisas que você só vê quando desacelera' },
    { id: 321, titulo: 'O Homem que Calculava' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2047CE] text-white">
      {/* Fundo com formas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-[25%] h-[120vh] w-[120vh] rounded-full bg-[#264fdb] opacity-35 blur-sm" />
        <div className="absolute -left-80 top-[35%] h-[120vh] w-[120vh] rounded-full bg-[#2a54e3] opacity-25 blur-[2px]" />
        <div className="absolute right-[-18%] top-[-10%] h-[68vh] w-[48vw] rounded-[45%] bg-[#264fdb] opacity-35 blur-3xl" />
      </div>

      {/* Cabeçalho branco com logo e título */}
      <div className="relative z-10 w-full bg-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-8 py-6 text-center">
          <img src="/logo-lion.png" alt="LionBook" className="h-12 w-auto select-none" draggable="false" />
          <h1 className="text-4xl font-light tracking-wide text-[#2447cf]">
            <span className="font-semibold">LionBook</span>
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-10">
        {/* Botões de ação */}
        <div className="flex items-center gap-10">
          <Link
            to="/cadastro"
            className="rounded-md bg-white px-9 py-4 text-center text-[15px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
          >
            Novo Livro
          </Link>
          <Link
            to="/estoque"
            className="rounded-md bg-white px-9 py-4 text-center text-[15px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
          >
            Estoque
          </Link>
        </div>

        {/* Tabela */}
        <div className="mt-10 overflow-hidden rounded-md border-2 border-white/70">
          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-[140px_1fr_180px] bg-white/25 text-white text-[15px]">
            <div className="border-r-2 border-white/70 px-5 py-4 font-semibold uppercase tracking-wide">ID</div>
            <div className="border-r-2 border-white/70 px-5 py-4 font-semibold uppercase tracking-wide">Título</div>
            <div className="px-5 py-4 text-center font-semibold uppercase tracking-wide">Ação</div>
          </div>
          {/* Linhas */}
          <div>
            {livros.map((livro) => (
              <div key={livro.id} className="grid grid-cols-[140px_1fr_180px]">
                <div className="border-t-2 border-r-2 border-white/70 bg-[#244DDB] px-5 py-4 text-center text-white/95">
                  <span className="text-[22px] font-semibold">{livro.id}</span>
                </div>
                <div className="border-t-2 border-r-2 border-white/70 bg-[#2047CE] px-5 py-4 text-white text-[15px]">
                  {livro.titulo}
                </div>
                <div className="border-t-2 border-white/70 bg-[#244DDB] px-4 py-3">
                  <div className="flex items-center justify-center gap-4">
                    <IconButton variant="edit" />
                    <IconButton variant="delete" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function IconButton({ variant = 'edit' }) {
  const isEdit = variant === 'edit'
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded bg-white/95 text-[#2047CE] shadow hover:bg-white"
      title={isEdit ? 'Editar' : 'Excluir'}
    >
      {isEdit ? (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20h4l10-10-4-4L4 16v4z" fill="currentColor" />
        </svg>
      ) : (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="2" />
          <path d="M7 9l1 10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
