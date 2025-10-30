import { Link, useNavigate } from 'react-router-dom'

export default function Estoque() {
  const navigate = useNavigate()

  function onCancelar(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2047CE] text-white">
      {/* Fundo com formas, similar às demais telas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-[25%] h-[120vh] w-[120vh] rounded-full bg-[#264fdb] opacity-35 blur-sm" />
        <div className="absolute -left-80 top-[35%] h-[120vh] w-[120vh] rounded-full bg-[#2a54e3] opacity-25 blur-[2px]" />
        <div className="absolute right-[-18%] top-[-10%] h-[68vh] w-[48vw] rounded-[45%] bg-[#264fdb] opacity-35 blur-3xl" />
      </div>

      {/* Cabeçalho branco com logo e título (igual ao cadastro, texto alterado) */}
      <div className="relative z-10 w-full bg-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-8 py-6 text-center">
          <img src="/logo-lion.png" alt="LionBook" className="h-12 w-auto select-none" draggable="false" />
          <h1 className="text-4xl font-light tracking-wide text-[#2447cf]">
            <span className="font-semibold">LionBook</span> - ESTOQUE
          </h1>
        </div>
      </div>

      {/* Formulário central */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-4xl items-center justify-center px-6">
        <form className="w-full max-w-3xl">
          {/* TÍTULO (select) */}
          <SelectField placeholder="TÍTULO">
            <option value="" hidden>Selecione</option>
            <option>Livro A</option>
            <option>Livro B</option>
          </SelectField>

          {/* TIPO DE MOVIMENTO (select) */}
          <SelectField className="mt-5" placeholder="TIPO DE MOVIMENTO">
            <option value="" hidden>Selecione</option>
            <option>Entrada</option>
            <option>Saída</option>
          </SelectField>

          {/* QUANTIDADE */}
          <Field className="mt-5" placeholder="QUANTIDADE" type="number" />

          <div className="mt-10 flex items-center justify-center gap-14">
            <button
              type="submit"
              className="min-w-[220px] rounded-md bg-white px-8 py-3.5 text-center text-[14px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
            >
              Salvar
            </button>
            <Link
              to="/home"
              onClick={onCancelar}
              className="min-w-[220px] rounded-md bg-white px-8 py-3.5 text-center text-[14px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

function Field({ placeholder, className = '', type = 'text' }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 rounded-md border-2 border-white/80 bg-transparent px-5 py-3.5 text-white/90">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] uppercase tracking-wide placeholder-white/80 outline-none"
        />
      </div>
    </div>
  )
}

function SelectField({ placeholder, className = '', children }) {
  return (
    <div className={className}>
      <div className="relative">
        <div className="rounded-md border-2 border-white/80 bg-transparent px-5 text-white/90">
          <select
            className="w-full appearance-none bg-transparent py-3.5 text-[15px] uppercase tracking-wide outline-none"
            defaultValue=""
          >
            <option value="" disabled className="bg-[#2047CE] text-white/70">{placeholder}</option>
            {children}
          </select>
          {/* ícone de seta */}
          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
