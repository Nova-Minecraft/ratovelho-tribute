import Image from "next/image"
import { FaHeart, FaMusic, FaUsers, FaCalendarAlt, FaGamepad, FaMicrophone, FaStar, FaCube } from "react-icons/fa"

export default function TributePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tributo</h1>
          <p className="text-xl md:text-2xl mb-6">Homenagem ao nosso eterno amigo Ratovelho</p>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n0mYuv7-EHFOePeXOPvFz2dBViMp6iIFS9ijmd.jpeg"
            alt="Ratovelho background - Rato é Foda album cover"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
      </header>

      {/* Biography */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center border-b border-zinc-700 pb-4">Biografia</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="w-6 h-6 mr-3 text-emerald-400" />
              <h3 className="text-xl font-semibold">Início da Jornada (2012)</h3>
            </div>
            <p>
              Sherlio Cabral, conhecido como Ratovelho, ingressou no universo do Minecraft em 2012 através do servidor EhAqui. Seu carisma único e energia contagiante rapidamente o destacaram na comunidade.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaMusic className="w-6 h-6 mr-3 text-emerald-400" />
              <h3 className="text-xl font-semibold">O Maestro</h3>
            </div>
            <p>
              Paralelamente ao mundo digital, Sherlio dedicava-se à música como professor e maestro. Seu talento musical influenciaria profundamente seus projetos no Minecraft, trazendo criatividade e ritmo a tudo que criava.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaUsers className="w-6 h-6 mr-3 text-emerald-400" />
              <h3 className="text-xl font-semibold">RatoLândia (2013)</h3>
            </div>
            <p>
              Em 2013, uniu-se a JohnnyPlay para fundar o lendário servidor RatoLândia. Lá, desenvolveu minigames inovadores como Escadona e Porradinha, além de eventos memoráveis como o Arraiá do Rato, que se tornaram referência na comunidade.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaGamepad className="w-6 h-6 mr-3 text-emerald-400" />
              <h3 className="text-xl font-semibold">Criatividade em Jogo</h3>
            </div>
            <p>
              Seus projetos eram marcados por originalidade e atenção aos detalhes. Cada evento e minigame contava uma história, refletindo sua personalidade vibrante e seu talento para unir pessoas.
            </p>
          </div>
        </div>

        {/* Música do Ratovelho */}
        <div className="mb-12 bg-zinc-800 p-6 rounded-lg">
          <div className="flex items-center mb-6">
            <FaMicrophone className="w-6 h-6 mr-3 text-emerald-400" />
            <h3 className="text-xl font-semibold">Rato É Foda (2020)</h3>
          </div>
          <p className="mb-6">
            Em 2020, Ratovelho surpreendeu a comunidade com "Rato É Foda", música que se tornou um hino entre seus seguidores. A canção capturava perfeitamente seu espírito criativo e sua conexão única com o público.
          </p>
          <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fqrDCFdqAdw"
              title="Rato É Foda (Música Oficial)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="space-y-6 text-lg">
          <div className="flex items-center gap-3 mb-6">
            <FaCube className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-semibold">Desafios e Legado</h3>
          </div>

          <p>
            Em fevereiro de 2022, Ratovelho anunciou uma pausa em seus projetos. Porém, em abril de 2024, após receber um diagnóstico de câncer, decidiu retornar para reviver os bons momentos com sua comunidade.
          </p>

          <p>
            Seu último grande evento, o Arraiá do Rato em 2024, reuniu centenas de jogadores em uma celebração emocionante de tudo que construíram juntos. Foi um testemunho do impacto duradouro de seu trabalho.
          </p>

          <p>
            Em 5 de abril de 2025, Sherlio Cabral faleceu, deixando um legado de criatividade, amor pela música e dedicação à comunidade. Sua influência permanece viva nos corações de todos que tiveram o privilégio de conhecê-lo, dentro e fora do mundo digital.
          </p>

          <div className="text-center mt-12 pt-8 border-t border-zinc-700">
            <FaStar className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
            <p className="text-xl italic">
              "Combati o bom combate, terminei a corrida, guardei a fé. Agora me está reservada a coroa da justiça, que
              o Senhor, justo Juiz, me dará naquele dia; e não somente a mim, mas também a todos os que amam a sua
              vinda."
            </p>
            <p className="mt-2">2 Timóteo 4:7-8</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-zinc-300 mb-2">Em memória de Sherlio Cabral "Ratovelho" • 1975 – 2025</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-10">
            <p className="text-zinc-400">Feito com</p>
            <FaHeart className="text-red-500 w-5 h-5 animate-pulse" />
            <p className="text-zinc-400">por</p>
          </div>
          
          <div className="mt-3">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e73fce5ec619716012cd49b8adc0cbbb-yeLxfB7pEHazN1bvnLrvxLoca73dgn.webp" 
              alt="Logo NovaMinecraft" 
              width={110} 
              height={36}
              className="h-auto mx-auto"
            />
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <FaGamepad className="w-5 h-5 text-emerald-400 opacity-70 hover:opacity-100 transition-opacity" />
            <FaMusic className="w-5 h-5 text-emerald-400 opacity-70 hover:opacity-100 transition-opacity" />
            <FaCube className="w-5 h-5 text-emerald-400 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </footer>
    </div>
  )
}

