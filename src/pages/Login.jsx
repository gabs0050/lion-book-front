export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2047CE] text-white">
      {/* Formas decorativas do fundo */}
      <div className="pointer-events-none absolute inset-0">
        {/* ondas circulares à esquerda (mais suaves) */}
        <div className="absolute -left-48 bottom-[-10%] h-[130vh] w-[130vh] rounded-full bg-[#264fdb] opacity-35 blur-sm" />
        <div className="absolute -left-80 -bottom-56 h-[130vh] w-[130vh] rounded-full bg-[#2a54e3] opacity-25 blur-[2px]" />
        {/* mancha orgânica à direita (mais discreta) */}
        <div className="absolute right-[-18%] top-[-12%] h-[68vh] w-[48vw] rounded-[45%] bg-[#264fdb] opacity-35 blur-3xl" />
      </div>

      {/* Conteúdo central */}
      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6">
        {/* Ícone carrinho com seta (imagem externa) */}
        <img src="/cart-icon.png" alt="Cart icon" className="mb-10 h-35 w-auto select-none" draggable="false" />

        {/* Formulário */}
        <form className="w-full max-w-md">
          {/* Username */}
          <div className="mb-5">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <UserIcon className="h-5 w-5 opacity-80" />
              <input
                type="text"
                placeholder="USERNAME"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex items-center gap-3 rounded-md border border-white/50 bg-transparent px-4 py-3 text-white/90 transition-colors focus-within:border-white">
              <LockIcon className="h-5 w-5 opacity-80" />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full bg-transparent text-[14px] uppercase tracking-wide placeholder-white/70 outline-none"
              />
            </div>
          </div>

          {/* Botão LOGIN */}
          <button
            type="submit"
            className="mb-4 w-full rounded-md bg-white px-6 py-3 text-center text-[14px] font-semibold uppercase text-[#2047CE] shadow hover:bg-white/95 active:translate-y-[1px]"
          >
            Login
          </button>

          {/* Forgot password */}
          <div className="mt-1 text-center text-[12px] text-white/85">
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}


function UserIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 21c1.8-4 6-6 9-6s7.2 2 9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function LockIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  )
}
