export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold text-center">Entrar</h1>
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full border rounded px-3 py-2" placeholder="voce@exemplo.com" />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Senha</label>
          <input type="password" className="mt-1 w-full border rounded px-3 py-2" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Entrar</button>
      </form>
    </div>
  )
}
