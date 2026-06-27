import hero from "./assets/hero-unsplash.jpg";
import logo from "./assets/logo.jpg";
import helping from "./assets/helping-unsplash.jpg";
import signs from "./assets/skilt-unsplash.jpg";
import blueBack from "./assets/bluebac-unsplash.jpg";

export default function App() {
  return (
    <main
      className="min-h-[650px] text-slate-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${blueBack})` }}
    >
      {/* Hero section */}

      <header className="bg-white shadow-sm">
        <div className="w-full px-4 py-4 flex items-center">

          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img src={logo} className="w-20 h-20" />

          </div>

          {/* Right side (empty for now) */}


        </div>
      </header>
      <section
        className="h-[850px] bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "70%",
        }}
      >

      </section>



      {/* About course */}
      <section id="om-kurset" className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-300 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Om kurset
            </h2>
            <p className="text-slate-700 leading-7">
              Sammen i Svingen tilbyr et tilrettelagt teorikurs for kvinner som
              ønsker støtte i forberedelsen til førerkortets teoriprøve. Kurset
              kombinerer trafikkforståelse, strukturert læring og trygg
              oppfølging.
            </p>
            <p className="text-slate-700 leading-7 mt-4">
              Vi legger særlig vekt på psykisk helse, trafikkangst, rolig tempo
              og forståelig undervisning. Målet er å styrke deltakernes
              selvstendighet, mestring og muligheter i hverdagen.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Hvorfor dette kurset er viktig
            </h2>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">
              <li>Redusert isolasjon og økt frihet i hverdagen</li>
              <li>Bedre tilgang til jobb, utdanning og aktiviteter</li>
              <li>Mer trygghet og mestring i møte med teoriprøven</li>
              <li>Støttende kvinnelig fellesskap</li>
              <li>Gode rollemodeller for barn i trafikken</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Target group */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Målgruppe
          </h2>
          <img src={helping} className="w-full rounded-xl mb-6" />

          <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">
            <li>Kvinner med innvandrerbakgrunn som ønsker å ta teoriprøven</li>
            <li>Deltakere med grunnleggende ferdigheter i norsk eller engelsk</li>
            <li>Nivå: Nybegynner</li>
          </ul>
        </div>
      </section>

      {/* What you learn */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            I dette kurset lærer du
          </h2>
          <img src={signs} className="w-full rounded-xl mb-6" />

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Grunnleggende trafikkregler og trafikkskilt
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Trafikknormer i Norge
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Hvordan stress og livssituasjon påvirker læring
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Refleksjon rundt migrasjon, identitet og ressurser
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Hva trafikkangst og kjøreangst er, og hvordan det kan håndteres
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Hvordan teoriprøven er bygget opp
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Hvordan forstå og svare på spørsmål i teoriprøven
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
              Effektive strategier for øving og forberedelse
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 md:col-span-2">
              Økt trygghet og mestring i møte med teoriprøven
            </div>
          </div>
        </div>
      </section>

      {/* Time and place */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Tid og sted
            </h2>
            <div className="space-y-3 text-slate-700 leading-7">
              <p>
                <span className="font-semibold">Oppstart:</span> 25. juni 2026
              </p>
              <p>
                <span className="font-semibold">Varighet:</span> Ukentlig samling frem til desember 2026
              </p>
              <p>
                <span className="font-semibold">Tidspunkt:</span> Dagtid
              </p>
              <p>
                <span className="font-semibold">Lengde per samling:</span> 2 timer
              </p>
              <p>
                <span className="font-semibold">Sted:</span>{" "}
                <a
                  href="https://www.google.com/maps/place/Johan+Drengsruds+vei+56,+1383+Asker/@59.8263547,10.4045982,417m/data=!3m2!1e3!4b1!4m6!3m5!1s0x464115c31bda7c69:0xf116a945852b847e!8m2!3d59.826352!4d10.4071731!16s%2Fg%2F11q2n7mqpn?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="underline text-blue-700"
                >
                  Johan Drengsrudsvei 56 / Filtvetveien 2
                </a>
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps?q=Johan+Drengsrudsvei+56,+Asker&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kart til Johan Drengsrudsvei 56"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Praktisk informasjon
            </h2>
            <div className="space-y-3 text-slate-700 leading-7">
              <p>
                <span className="font-semibold">Forkunnskaper:</span> Ingen formelle forkunnskaper nødvendig.
              </p>
              <p>
                Grunnleggende ferdigheter i norsk eller engelsk er ønskelig.
              </p>
              <p>
                <span className="font-semibold">Format:</span> Fysisk kurs
              </p>
              <p>
                <span className="font-semibold">Servering:</span> Kaffe tilgjengelig under kurs
              </p>
              <p>
                <span className="font-semibold">Antall deltakere:</span> 20–30
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course holders */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Om kursholderne
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Sadia Syeda
              </h3>
              <p className="text-slate-700 leading-7">
                Sadia er psykoterapeut med erfaring innen migrasjon, psykisk helse
                og familieveiledning. Hun har forskningsbakgrunn fra Universitetet
                i Oslo og har jobbet i kommunale psykiske helsetjenester.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Tanjina Islam
              </h3>
              <p className="text-slate-700 leading-7">
                Tanjina er en erfaren lærer med undervisningserfaring fra både
                ungdomsskole og videregående skole. Hun er opptatt av å skape et
                trygt og inkluderende læringsmiljø der deltakerne kan utvikle seg
                faglig og sosialt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Er du interessert i kurset?
          </h2>
          <p className="text-slate-200 leading-7 max-w-2xl">
            Ta kontakt med oss dersom du ønsker mer informasjon eller vil melde
            interesse for kurset.
          </p>

          <div className="mt-6 space-y-3 text-slate-100">
            <p>
              <span className="font-semibold">E-post:</span>{" "}
              <a
                href="mailto:sammenisvingen@outlook.com"
                className="underline underline-offset-4"
              >
                sammenisvingen@outlook.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Organisasjon:</span> Sammen i Svingen
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
