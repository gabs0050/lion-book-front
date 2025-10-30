import { Link, useNavigate } from 'react-router-dom'

export default function Cadastro() {
  const navigate = useNavigate()

  function onCancelar(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2047CE] text-white">
      {/* Fundo com formas, similar ao Login */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-[25%] h-[120vh] w-[120vh] rounded-full bg-[#264fdb] opacity-35 blur-sm" />
        <div className="absolute -left-80 top-[35%] h-[120vh] w-[120vh] rounded-full bg-[#2a54e3] opacity-25 blur-[2px]" />
        <div className="absolute right-[-18%] top-[-10%] h-[68vh] w-[48vw] rounded-[45%] bg-[#264fdb] opacity-35 blur-3xl" />
      </div>

      {/* Faixa branca superior com logo e título */}
      <div className="relative z-10 w-full bg-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-8 py-6 text-center">
          <img src="/logo-lion.png" alt="LionBook" className="h-12 w-auto select-none" draggable="false" />
          <h1 className="text-4xl font-light tracking-wide text-[#2447cf]">
            <span className="font-semibold">LionBook</span> - CADASTRO
          </h1>
        </div>
      </div>

      {/* Formulário central, centrado e maior */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-4xl items-center justify-center px-6">
        <form className="w-full max-w-3xl">
          <Field placeholder="TÍTULO" />
          <Field placeholder="QUANTIDADE" className="mt-5" />
          <Field placeholder="ISBN" className="mt-5" />
          <Field placeholder="DATA DE PUBLICAÇÃO" className="mt-5" />

          <div className="mt-10 flex items-center justify-center gap-14">
            <button
              type="submit"
              className="min-w-[260px] rounded-md bg-white px-8 py-3.5 text-center text-[15px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
            >
              Cadastrar
            </button>
            <Link
              to="/home"
              onClick={onCancelar}
              className="min-w-[260px] rounded-md bg-white px-8 py-3.5 text-center text-[15px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

function Field({ placeholder, className = '' }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 rounded-md border-2 border-white/80 bg-transparent px-5 py-3.5 text-white/90">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] uppercase tracking-wide placeholder-white/80 outline-none"
        />
      </div>
    </div>
  )
}
