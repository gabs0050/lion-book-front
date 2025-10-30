import { Link } from 'react-router-dom'

export default function CadastroUsuario() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2047CE] text-white">
      {/* Formas decorativas do fundo (iguais à tela de login) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 bottom-[-10%] h-[130vh] w-[130vh] rounded-full bg-[#264fdb] opacity-35 blur-sm" />
        <div className="absolute -left-80 -bottom-56 h-[130vh] w-[130vh] rounded-full bg-[#2a54e3] opacity-25 blur-[2px]" />
        <div className="absolute right-[-18%] top-[-12%] h-[68vh] w-[48vw] rounded-[45%] bg-[#264fdb] opacity-35 blur-3xl" />
      </div>

      {/* Conteúdo central */}
      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6">
        {/* Opcional: usar o mesmo ícone/cart ou a logo do projeto */}

        <form className="w-full max-w-md">
          {/* Criar nome de usuário */}
          <div className="mb-5">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <input
                type="text"
                placeholder="CRIAR NOME DE USUÁRIO"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Criar senha */}
          <div className="mb-5">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <input
                type="password"
                placeholder="CRIAR SENHA"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Confirmar senha */}
          <div className="mb-6">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <input
                type="password"
                placeholder="CONFIRMAR SENHA"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Botão Cadastrar */}
          <button
            type="submit"
            className="mb-4 w-full rounded-md bg-white px-6 py-3 text-center text-[14px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
          >
            Cadastrar
          </button>

          {/* Link para voltar ao login */}
          <div className="mt-1 text-center text-[12px] text-white/85">
            <Link to="/login" className="hover:underline">Já possui conta? Entrar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
