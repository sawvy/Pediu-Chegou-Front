export default function Home() {
  return (
    <div className="">
      <div>
        <span>Bem-vindo ao</span>
        <h1 className="text-3xl font-bold">Maia Fest</h1>
      </div>

      <div className="mt-6">
        <p>
          Aberto até 24h{' '}
          <span className="h-1 w-1 bg-black rounded-full inline-block mr-1 align-middle"></span>
          pedido min R$ 12
        </p>
      </div>

      <div className="bg-gray-100 p-2 rounded-md mt-1">
        <span>Entrega</span>
        <span>
          <strong> Hoje</strong>, 30-40 min{' '}
          <span className="h-1 w-1 bg-black rounded-full inline-block mr-1 align-middle"></span>
          <span className="text-green-400">Grátis</span>{' '}
        </span>
      </div>
    </div>
  )
}
