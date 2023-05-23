import CardFirst from '../components/CardFirst';
import CardSecond from '../components/CardSec';
import CardThird from '../components/CardThi';

export default function Home() {
  return(
    <div className="flex flex-row div-home">
      <CardFirst />
      <CardSecond />
      <CardThird />
    </div>
  )
}