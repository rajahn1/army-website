import CardFirst from '../components/CardFirst';
import CardSecond from '../components/CardSec';
import CardThird from '../components/CardThi';
import BgPsycho from '../../public/bg-psychedelic.jpg';


export default function Home() {
  const styling = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.0), rgba(255,255,255,0.5)), url('${BgPsycho.src}')`
  }
  return(
    <div className="flex flex-row div-home bg-contain" style={styling}>
      <CardFirst />
      <CardSecond />
      <CardThird />
    </div>
  )
}