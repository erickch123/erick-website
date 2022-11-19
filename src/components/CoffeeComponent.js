import React from 'react';
import CoffeeGridBoxes from './CoffeeGridBoxes';
import CoffeeHeader from './CoffeeHeader';
export default function CoffeeComponent() {
  return (
    <section>
      <CoffeeHeader
        header = "Coffees I have brewed at Home"
        description = "All the coffees here are from roasteries in Indonesia and Singapore. Since I am a cheapskate, I only bought beans in Singapore if there are at least 50% discounts. The beans from Indonesia are mostly not discounted, because I ask my parents to buy them from me 😎. I also sometimes got test-roast beans such as El Salvador, Guatemala, and Colombian Geisha from my fellow SUTD friend who is working as a part-time barista"
      />
      <div class="grid md:grid-cols-3 lg:m-5">
        {HomeBrewBeansList.map((beans)=>{
          const{beansName,roaster,altitude,varietal,process,tastingnotes,personalremarks,beanspicture} = beans;
          return(
            <CoffeeGridBoxes
            beansName ={beansName}
            roaster ={roaster}
            altitude={altitude}
            varietal = {varietal}
            process = {process}
            tastingnotes = {tastingnotes}
            personalremarks = {personalremarks}
            beanspicture={beanspicture}
          />
          )
        })}
      </div>
      <CoffeeHeader
        header = "Coffees I have Roasted my Own"
        description = "I happened to get free Rwanda Sample Beans from Singapore Coffee Association. I roasted them with Ikawa Roaster at Compound Coffee, $2 per 50 gr. During my first time, I asked my friend to help because I have no idea about coffee roasting knowledge"
      />
      <div class="grid md:grid-cols-3 lg:m-5">
        {RoastBeansList.map((beans)=>{
          const{beansName,roaster,altitude,varietal,process,tastingnotes,personalremarks,beanspicture} = beans;
          return(
            <CoffeeGridBoxes
            beansName ={beansName}
            roaster ={roaster}
            altitude={altitude}
            varietal = {varietal}
            process = {process}
            tastingnotes = {tastingnotes}
            personalremarks = {personalremarks}
            beanspicture={beanspicture}
          />
          )
        })}
      </div>
      {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <p>Coffee Beans from the shop I have visited</p>
        <p>I rarely drink coffee outside since I don't really want to spend $5-10 for a coffee, except if I have a voucher :D. The list here is also only some coffee that I remember</p>
      </div>
      <div class="grid grid-cols-3 m-20 ">
        {CafeVisitBeansList.map((beans)=>{
          const{beansName,roaster,altitude,varietal,process,tastingnotes,personalremarks,beanspicture} = beans;
          return(
            <CoffeeGridBoxes
            beansName ={beansName}
            roaster ={roaster}
            altitude={altitude}
            varietal = {varietal}
            process = {process}
            tastingnotes = {tastingnotes}
            personalremarks = {personalremarks}
            beanspicture={beanspicture}
          />
          )
        })}
      </div>
       */}
    </section>
  );


}


const HomeBrewBeansList= [
  {
    beansName :"Ethiopia Yirgacheffe Gedeb",
    roaster: "Cumulo Coffee, Singapore",
    altitude :"1800-2200",
    varietal : "Heirloom",
    process : "Washed",
    tastingnotes : "Lemon Verbena, Tangerine, Lemon Grass, Black Tea, Citrus Blossom",
    personalremarks : "Lemon, Black Tea, and sometimes may have brown sugar finish ",
    beanspicture: require('../images/Coffee/Cumulo-YirgacheffeGedeb.webp'),
  },
  {
    beansName :"Gunung Baru, Aceh",
    roaster: "People Temple, Indonesia",
    altitude:"1200-1600",
    varietal : "Mixed",
    process : "Extended Natural",
    tastingnotes : "Grapefruit, Ripe Peach,Bittersweet Chocolate",
    personalremarks : "Strong Lychee flavour, funky, the best Indo Beans Ive tried",
    beanspicture: require('../images/Coffee/PeopleTemple-AcehExtended.jpeg'),
  },{
    beansName : "Colombia Finca Villarazo",
    roaster: "Cumulo Coffee, Singapore",
    altitude:"1800",
    varietal : "Castillo",
    process : "Extended Natural, Ice Fermentation",
    tastingnotes : "Peach, Blackberry,Chocolate",
    personalremarks : "Pineapple,Grape,Honey",
    beanspicture: require('../images/Coffee/Cumulo-FincaVillarazo.webp'),
  },{
    beansName :"Flores Uwu #01",
    roaster: "Common Grounds, Indonesia",
    altitude:"1400-1600",
    varietal : "Kartika",
    process : "Anaerobic Natural",
    tastingnotes : "Blueberry,Grape Gum, Passion Fruit",
    personalremarks : "Berry Notes",
    beanspicture: require('../images/Coffee/CommonGrounds-FloresUwu.png'),
  },
  {
    beansName :"Bali Kintamani",
    roaster: "Common Grounds, Indonesia",
    altitude:"",
    varietal : "Lini S795 Kartika",
    process : "Natural",
    tastingnotes : "Mangoes,Banana,Brown Sugar",
    personalremarks : "The most prominent taste is banana",
    beanspicture: require('../images/Coffee/CommonGrounds-BaliKintamani.jpeg'),
  },
  {
    beansName :"Bali Kintamani 04",
    roaster: "Common Grounds, Indonesia",
    altitude:"1400-1450",
    varietal : "Kartika",
    process : "Experimental",
    tastingnotes : "Blackforest Cake, Cherry, Rum",
    personalremarks : "I don't really remember ...",
    beanspicture: require('../images/Coffee/CommonGrounds-BaliKintamani04.jpeg'),
  },
  {
    beansName :"Ethiopia Hambela Wamena",
    roaster: "Common Grounds, Indonesia",
    altitude:"1950-2000",
    varietal : "wolisho Kurume, 74110, 74112",
    process : "Natural",
    tastingnotes : "Rambutan, Rose Tea, Rose Apple",
    personalremarks : "When I brewed it, taste like ginger and Chinese Herb",
    beanspicture: require('../images/Coffee/CommonGrounds-Ethiopia Hambela.jpeg'),
  },
  {
    beansName :"Toraja Kalosi",
    roaster: "Common Grounds, Indonesia",
    altitude:"",
    varietal : "Lini-S",
    process : "Full Washed",
    tastingnotes : "Brown Sugar, Floral, Citrus",
    personalremarks : "Brown Sugar notes, which is not common for washed coffee I guess",
    beanspicture: require('../images/Coffee/CommonGrounds-TorajaKalosi.jpeg'),
  },
  {
    beansName :"Nyamasheke, Lake Kivu, Rwanda",
    roaster: "Parallel Coffee, Singapore",
    altitude:"1700-2100",
    varietal : "Red Bourbon",
    process : "Natural",
    tastingnotes : "Strawberries, Dark Chocolate, Red Ripe Fruits",
    personalremarks : "I bought this with my friends because of 50% discount",
    beanspicture: require('../images/Coffee/ParallelLakeKivu.jpeg'),
  },
  {
    beansName :"San Isidro, Costa Rica",
    roaster: "Parallel Coffee, Singapore",
    altitude:"1350",
    varietal : "Caturra and Catuai",
    process : "Natural",
    tastingnotes : "Chocolate, Macerated Grapes, Raisins, Lime, Syrupy, Winey",
    personalremarks : "I bought this with my friends because of 50% discount",
    beanspicture: require('../images/Coffee/Parallel-SanIsidro.jpeg'),
  },
  {
    beansName :"Ethiopia Shaakkiso Daanisa",
    roaster: "Parallel Coffee, Singapore",
    altitude:"2000-2178",
    varietal : "Heirloom",
    process : "Natural",
    tastingnotes : "Floral, Candied orange, Grapefruit, Pomegranate",
    personalremarks : "I bought this with my friends because of 50% discount",
    beanspicture: require('../images/Coffee/Parallel-Shaakiso.jpeg'),
  },
  {
    beansName :"Mekarwangi, West Java",
    roaster: "Tadasih, Yogyakarta, Indonesia",
    altitude:"",
    varietal : "",
    process : "",
    tastingnotes : "Orange, Berries, Boozy, Sweet",
    personalremarks : "One day I want to sell coffee like the way Tadasih does :)",
    beanspicture: require('../images/Coffee/Tadasih-Mekarwangi.jpeg'),
  },
  {
    beansName :"Temanggung, Central Java",
    roaster: "Tadasih, Yogyakarta, Indonesia",
    altitude:"",
    varietal : "",
    process : "",
    tastingnotes : "Blueberry, Blackberry, Strawberry, Choco Cream",
    personalremarks : "One day I want to sell coffee like the way Tadasih does :)",
    beanspicture: require('../images/Coffee/Tadasih-Temanggung.jpeg'),
  },
  {
    beansName :"Mount Halu, West Java",
    roaster: "Space Roastery, Yogyakarta, Indonesia",
    altitude:"",
    varietal : "",
    process : "Honey",
    tastingnotes : "Banana, Cotton Candy, Raw Honey, Orange",
    personalremarks : "",
    beanspicture: require('../images/Coffee/SpaceRoastery HaluBanana.jpeg'),
  },
  {
    beansName :"Mount Halu, West Java",
    roaster: "Space Roastery, Yogyakarta, Indonesia",
    altitude:"",
    varietal : "",
    process : "Extended Yeast Fermentation",
    tastingnotes : "Red Wine, Ripe Apple, Bitter Sweet Caramel",
    personalremarks : "",
    beanspicture: require('../images/Coffee/SpaceRoastery HaluBanana.jpeg'),
  },
  {
    beansName :"Ethiopia Yirgacheffe",
    roaster: "Perk Coffee, Singapore",
    altitude:"2000-2200",
    varietal : "Heirloom",
    process : "Natural",
    tastingnotes : "Lavender, Peach, Wild Berry",
    personalremarks : "So far it is the best one from perk",
    beanspicture: require('../images/Coffee/Perk-Yirgacheffe.webp'),
  },
  {
    beansName :"Brazil Cerrado",
    roaster: "Perk Coffee, Singapore",
    altitude:"1000-1200",
    varietal : "Bourbon, Catuai",
    process : "Natural",
    tastingnotes : "Milk Chocolate, Caramel, Toasted Hazelnut",
    personalremarks : "",
    beanspicture: require('../images/Coffee/Perk-Cerrado.webp'),
  },
  {
    beansName :"Santa Rosa Guatemala",
    roaster: "Perk Coffee, Singapore",
    altitude:"1000-1200",
    varietal : "Catuai, Pache, Catimor",
    process : "Washed",
    tastingnotes : "Dark Cherry, Fig, Brown Sugar",
    personalremarks : "",
    beanspicture: require('../images/Coffee/Perk-Guatemala.webp'),
  },
  {
    beansName :"Colombia Altura",
    roaster: "Perk Coffee, Singapore",
    altitude:"1400-1800",
    varietal : "Catuai, Pache, Catimor",
    process : "Washed",
    tastingnotes : "Pomegranate, Red Grape, Honey",
    personalremarks : "",
    beanspicture: require('../images/Coffee/Perk-Colombia.webp'),
  },
];

const CafeVisitBeansList= [
  {
    beansName :"Ethiopia Yirgacheffe Gedeb",
    roaster: "Cumulo Coffee, Singapore",
    altitude :"",
    varietal : "Heirloom",
    process : "Lemon Verbena, Tangerine, Lemon Grass, Black Tea, Citrus Blossom",
    tastingnotes : "Peach, Blackberry,Chocolate",
    personalremarks : "Lemon, Black Tea, and sometimes may have brown sugar finish ",
    beanspicture: require('../images/Coffee/Cumulo-YirgacheffeGedeb.webp'),
  },
]

const RoastBeansList= [
  {
    beansName :"Rwanda Nkora CWS, Western Province",
    roaster: "Myself with Ikawa Roaster",
    altitude :"",
    varietal : "Bourbon",
    process : "Washed",
    tastingnotes : "Apple and hint of chocolate",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaWashed.jpeg'),
  },
  {
    beansName :"Rwanda Gisanga, Southern Province",
    roaster: "Myself with Ikawa Roaster",
    altitude :"1550-1850",
    varietal : "Bourbon",
    process : "Anaerobic Natural",
    tastingnotes : "",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaAnaerobic.jpeg'),
  },
  {
    beansName :"Rwanda",
    roaster: "Myself with Ikawa Roaster",
    altitude :"1550-1850",
    varietal : "",
    process : "Honey",
    tastingnotes : "",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaHoney.jpeg'),
  },
  {
    beansName :"Rwanda Gisanga, Southern Province",
    roaster: "Myself with Ikawa Roaster",
    altitude :"1930-2200",
    varietal : "Bourbon",
    process : "Natural",
    tastingnotes : "",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaNatural.jpeg'),
  },
  {
    beansName :"Rwanda",
    roaster: "Myself with Ikawa Roaster",
    altitude :"",
    varietal : "",
    process : "Washed",
    tastingnotes : "",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-Rwanda-Fullwashed2.jpeg'),
  },
]