import './MostPopular.css';
import {Card} from '../../components/index';

const MostPopular = () => {
  return (
    <>
        <Card image="popular_01"    title="Fortnite"      category ="sandbox"    rates="4.8"  downloads="2.3M"/>
        <Card image="popular_02"    title="Warzone"       category ="Stream-x"   rates="4.9"  downloads="1M"/>
        <Card image="popular_03"    title="God of War"    category ="Legendary"  rates="5"    downloads="3"/>
        <Card image="popular_04"    title="The Witcher"   category ="Battle S"   rates="4.8"  downloads="7M"/>
    </>
  )
}

export default MostPopular