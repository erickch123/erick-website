import React from 'react';
import CoffeeGridBoxes from './CoffeeGridBoxes';
import CoffeeHeader from './CoffeeHeader';
export default function CoffeeComponent() {
  return (
    <section>
      <CoffeeHeader
        header = "Coffees I have brewed at Home"
        description = "All the coffees here are from roasteries in Indonesia and Singapore. Since I am a cheapskate, I only bought beans in Singapore if there are at least 50% discounts. The beans from Indonesia are mostly not discounted, because I ask my parents to buy them from me 😎. I also sometimes got test-roast beans such as El Salvador, Guatemala, and Colombian Geisha from my fellow SUTD friend who is working as a part-time barista."
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
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
      <CoffeeHeader
        header = "Coffee Beans from Cafe Hopping and Cupping Sessions"
        description = "I rarely drink coffee outside since I don't really want to spend $5-10 for a coffee, except if I have a voucher :D or traveling. The beans here are those that left me good impressions &#x270C;"
      />
      </div>
      {/* <div class="grid grid-cols-3 m-20 "> */}
      <div class="grid md:grid-cols-3 lg:m-5">
       
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
      
    </section>
  );


}


const HomeBrewBeansList= [
  {
    beansName :"Colombia Yobani Ramos",
    roaster: "Morgon Coffee Roasters, Gothenburg, Sweden",
    altitude :"1900",
    varietal : "Pink Bourbon",
    process : "Washed",
    tastingnotes : "Juicy and clean with notes of lemonade and mango",
    personalremarks : "Beans I brought back from Sweden to Singapore.",
    beanspicture: require('../images/Coffee/MorgonCoffeeColombia.jpeg')
  },
  {
    beansName :"Diana & Hector Ovalle, Huehuetenango, Guatemala",
    roaster: "Andersen & Maillard, Denmark",
    altitude :"",
    varietal : "Catuurra",
    process : "Natural",
    tastingnotes : "Strawberry,raspberry,peach, rose",
    personalremarks : "The beans I brought back from Denmark Coffee Festival.",
    beanspicture: require('../images/Coffee/Europe/AndersenMailllardGuatemalaDenmark.jpeg')
  },
  
  {
    beansName :"Ethiopia Shoondisha",
    roaster: "Manhattan Coffee Roasters, Netherland",
    altitude :"",
    varietal : "74110,74112",
    process : "Natural",
    tastingnotes : "Berry, Strawberry, White Sugar",
    personalremarks : "Generally fruity and sweat. Bought this at Arrenius Coffee Uppsala,Sweden",
    beanspicture: require('../images/Coffee/Europe/ManhattanEthipiaShoondisa.png')
  },

  {
    beansName :"Ethiopia Yirgacheffe",
    roaster: "Mok Coffee, Belgium",
    altitude :"",
    varietal : "Kurume",
    process : "Washed",
    tastingnotes : "Floral",
    personalremarks : "Trying to make espresso beans with hand brew. Not bad but not that special either",
    beanspicture: require('../images/Coffee/Europe/MokEthiopia.png')
  },
 
  {
    beansName :"Bali Kintamani Karana Madu, Catur Region",
    roaster: "Expat Roasters, Bali, Indonesia",
    altitude :"1800-2200",
    varietal : "USDAI",
    process : "Natural",
    tastingnotes : "Sweet rockmelon, peanut, jackfruit, hints of dates, biscuits",
    personalremarks : "Orange and Honey/Melon Sweetness",
    beanspicture: require('../images/Coffee/Expat-KintamaniNatural.webp'),
  },
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
    beansName :"Aceh Gayo Natural",
    roaster: "Tanamera Coffee Indonesia/Singapore",
    altitude :"",
    varietal : "",
    process : "Natural",
    tastingnotes : "Strawberry,mirabelle,black tea",
    personalremarks : "Unlike other Aceh Gayo beans, this one is very sweet with strawberry notes. My fav beans from the part-time job here",
    beanspicture: require('../images/Coffee/Tanamera_AcehGayo.webp'),
  },
  {
    beansName :"Colombia Huila Jonathan Gasca",
    roaster: "Mok Coffee Belgium",
    altitude :"",
    varietal : "Gesha",
    process : "Washed",
    tastingnotes : "Chamomile,mirabelle,black tea",
    personalremarks : "Very floral, with pear sweatness notes as well ",
    beanspicture: require('../images/Coffee/Europe/MokColombiaJonathanGasca.png'),
  },
  {
    beansName :"Guatemala",
    roaster: "Vero Cafe, Lithuania",
    altitude :"1700",
    varietal : "",
    process : "Anaerobic Natural",
    tastingnotes : "grapefruit, cocoa and almond flavor",
    personalremarks : "I didnt expect this Lithuanian coffee chain to have such a good cup of americano, with blueberry sweetness that is comparable with a cup of good filter coffee.",
    beanspicture: require('../images/Coffee/Europe/VeroCafeGuatemala.jpeg'),
  },
  {
    beansName :"Shwe Taung Thu, Myin Kya Doe, Myanmar",
    roaster: "The Miners Czech Republic",
    altitude :"1300",
    varietal : "Red Catuai",
    process : "Natural",
    tastingnotes : "Mandarin,Cranberry",
    personalremarks : "Didnt expect Myanmar beans can be very sweet like orange",
    beanspicture: require('../images/Coffee/Europe/TheMinersMyanmarBeans.jpeg'),
  },

  {
    beansName :"Colombia Alex Bermudez",
    roaster: "Good Coffee Micro Roasters,Poland",
    altitude :"1920",
    varietal : "Castilla",
    process : "Washed",
    tastingnotes : "The mango peach notes is very strong, it's like drinking Sjora",
    personalremarks : "Mango",
    beanspicture: require('../images/Coffee/Europe/GoodCoffeePoland.jpeg'),
  },
  {
    beansName :"Nestor Lasso, El Diviso, Colombia",
    roaster: "Lehmus Roastery, Finland",
    altitude :"",
    varietal : "Red Bourbon",
    process : "Anaerobic Natural",
    tastingnotes : "",
    personalremarks : "Taste like marshmellow, the best one at Helsinki Coffee Fest",
    beanspicture: require('../images/Coffee/Europe/LehmusColombiaFinlandCoffeeFest.png'),
  },
  {
    beansName :"Burundi Nkonge",
    roaster: "Johan Nystrom Sweden",
    altitude :"",
    varietal : "Heirloom",
    process : "Natural",
    tastingnotes : "Pomegranate, Passion Fruit, Yellow Rum ",
    personalremarks : "From Finland Coffee Fest.",
    beanspicture: require('../images/Coffee/Europe/JOhanNystromBurundi.jpeg'),
  },
  {
    beansName :"Hacienda La Papaya,Juan Pena, Saraguro, Ecuador",
    roaster: "La Cabra",
    altitude :"2000",
    varietal : "Typica",
    process : "Anaerobic Honey",
    tastingnotes : "Floral and Wild",
    personalremarks : "From Danish Coffee Fest",
    beanspicture: require('../images/Coffee/Europe/LaCabraHaciendaLaPapaya.webp'),
  },
  {
    beansName :"Santa Teresa Geisha, Peru",
    roaster: "Prolog Denmark",
    altitude :"1700",
    varietal : "Geisha",
    process : "Natural",
    tastingnotes : "Complext, tutti fruity, raspberry",
    personalremarks : "From Danish Coffee Fest. Taste like fruit bomb",
    beanspicture: require('../images/Coffee/Europe/PrologSantaTeresaGeisha.png'),
  },
  {
    beansName :"Finca Deborah Afterglow, Panama",
    roaster: "Amokka Nordic Roasters",
    altitude :"1700",
    varietal : "Geisha",
    process : "Carbonic Maceration",
    tastingnotes : "big florality, striking notes of red fruit, nectarines and toffee with a juicy, syrupy body, and a long lingering aftertaste.",
    personalremarks : "From Danish Coffee Fest. Taste like fruit bomb",
    beanspicture: require('../images/Coffee/Europe/AmokkaFincaDeborahAfterglow.webp'),
  },
  {
    beansName :"Kenya Muchagara AA",
    roaster: "Koppi Sweden",
    altitude :"1700",
    varietal : "SL34, SL28",
    process : "Geisha",
    tastingnotes : "Forest berries, orange blossoms, honey",
    personalremarks : "From Danish Coffee Fest. Taste like fruit bomb",
    beanspicture: require('../images/Coffee/Europe/KoppiSwedenKenya.png'),
  },
  {
    beansName :"Jaime Geisha Huila Colombia",
    roaster: "Coffee Collective Denmark",
    altitude :"1700",
    varietal : "SL34, SL28",
    process : "Natural",
    tastingnotes : "Super balanced, floral and elegant coffee with a delicate acidity and sweetness",
    personalremarks : "From Danish Coffee Fest. Taste very complex, floral, and bergamot",
    beanspicture: require('../images/Coffee/Europe/CoffeeCollectiveJaimeGeisha.png'),
  },
  {
    beansName :"Ethiopia Guji",
    roaster: "Beanbros Denmark",
    altitude :"2000",
    varietal : "Heirloom",
    process : "Washed",
    tastingnotes : "Earl Grey, Lemon, Peach",
    personalremarks : "From Danish Coffee Fest.",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Al Chirripo Costa Rica",
    roaster: "Jonas Reindl Austria",
    altitude :"1750",
    varietal : "Caturra",
    process : "Anaerobic Natural,raspberry,orange wine, juicy",
    tastingnotes : "Wildflower honey,",
    personalremarks : "Nice Fruity Funky",
    beanspicture: require('../images/Coffee/Europe/JonasReindlAlChirripo.jpeg'),
  },
 
  {
    beansName :"Ixhuatlan Mexico",
    roaster: "Compound Coffee Singapore",
    altitude :"1500-1700",
    varietal : "Red Bourbon",
    process : "Anaerobic Natural",
    tastingnotes : "Green Grape, Merlot, Plum",
    personalremarks : "Taste like green grape/white wine",
    beanspicture: require('../images/Coffee/CompoundIxhuatlan.jpeg'),
  },
  {
    beansName :"Ethiopia Yirgacheffe",
    roaster: "Say Something Coffee Jakarta",
    altitude :"1500-1700",
    varietal : "Heirloom",
    process : "Washed",
    tastingnotes : "Watermelon, Blueberry, Black Tea",
    personalremarks : "Watermelon on point",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },

  {
    beansName :"Ethiopia Gersay Beyou",
    roaster: "Alchemist Singapore",
    altitude :"1500-1700",
    varietal : "Heirloom",
    process : "Washed",
    tastingnotes : "Lilac, Floral",
    personalremarks : "Strong Floral Lavender Taste",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Finca Soledad ",
    roaster: "Andrew Roastwork Jakarta",
    altitude :"1750",
    varietal : "Sidra",
    process : "Natural",
    tastingnotes : "Strawberries Cranberries Red Apple",
    personalremarks : "Free Exotic Cupping Session with Placebo X SMITH Jakarta. Sidra coffee is amazing",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"La Llama Bolivia",
    roaster: "Market Lane Coffee",
    altitude :"",
    varietal : "",
    process : "Washed",
    tastingnotes : "Red apple, sweet nectarine",
    personalremarks : "Taste exactly as the tasting notes",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Colombia Castillo Jairo Arcilla Strawberry",
    roaster: "Parchmen Coffee Singapore",
    altitude :"",
    varietal : "Pink Bourbon",
    process : "Strawberry Yeast",
    tastingnotes : "Strawberry",
    personalremarks : "Tried this during Singapore Coffee Fest 2022. The strawberry is too strong, hiding the coffee taste",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Colombia Los Tres Monqueteros",
    roaster: "Dutch Colony Singapore",
    altitude :"",
    varietal : "",
    process : "Washed",
    tastingnotes : "Yellow Peach, Lychee, Jasmine",
    personalremarks : "Taste Like lychee, pear, very sweet, floral",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Kenya AB",
    roaster: "Sweet Blossom, Johor Bahru, Malaysia",
    altitude :"",
    varietal : "SL 28, SL34",
    process : "Washed",
    tastingnotes : "Prune, Blackcurrant, herb, chamomile",
    personalremarks : "During my first visit to Johor Bahru, Malaysia",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
  },
  {
    beansName :"Ethiopia Balesi Dingu",
    roaster: "Andrew Roastwork Jakarta",
    altitude :"1750",
    varietal : "Heirloom",
    process : "Natural",
    tastingnotes : "Orange Blossom, Mango, Bergamot",
    personalremarks : "Strong bergamot notes",
    beanspicture: require('../images/Coffee/Europe/BeansBrosEthiopiaGuji.webp'),
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
    tastingnotes : "Strawberry and Sweet",
    personalremarks : "Free from Singapore Coffee Association.",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaAnaerobic.jpeg'),
  },
  {
    beansName :"Rwanda",
    roaster: "Myself with Ikawa Roaster",
    altitude :"1550-1850",
    varietal : "Brown Sugar and Plum",
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
    tastingnotes : "Cherry",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaNatural.jpeg'),
  },
  {
    beansName :"Rwanda",
    roaster: "Myself with Ikawa Roaster",
    altitude :"",
    varietal : "Bourbon",
    process : "Washed",
    tastingnotes : "Hint of Citrus",
    personalremarks : "Free from Singapore Coffee Association",
    beanspicture: require('../images/Coffee/OwnRoast-Rwanda-Fullwashed2.jpeg'),
  },
  {
    beansName :"Lot 37 Rwanda,Juru Coffee Farm",
    roaster: "Myself with Ikawa Roaster",
    altitude :"1700-2200",
    varietal : "Red Bourbon",
    process : "Natural",
    tastingnotes : "Jasmine and Peach",
    personalremarks : "Free from Visit Rwanda Committee 2022",
    beanspicture: require('../images/Coffee/OwnRoast-RwandaLot37.jpg'),
  },
{
  beansName :"Costa Rica Aguilera Brothers",
  roaster: "Myself",
  altitude :"1800-2200",
  varietal : "San Roque Kenia",
  process : "Anaerobico",
  tastingnotes : "Cherry, Black Tea",
  personalremarks : "Free samples from Compound Coffee",
  beanspicture: require('../images/Coffee/OwnRoast-CostaRicaAnaerobico.jpg')
},
]