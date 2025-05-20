
import './App.css';
import Header from "./Header";
import CreepSlider from './CreepSlider';  // تغيير اسم المكون لتجنب التعارض

import {useState} from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const [nightMood,setNightMood] = useState(false);
  function changeMood(){
    setNightMood(!nightMood)
}
  const creepArray = [
        {
          name :"كريب نوتيلا",
          img: "pics/crip/nutella.jpg",
          price: "4500",
          discption:"عجينة الكريب مع النوتيلا"
        },{
          name :"بنانا رول",
          img: "pics/crip/bananarool.jpg",
          price: "5000",
          discption:"عجينة الكريب محشية بفاكهة الموز"
        },{
          name :"بار لورد كريب",
          img: "pics/crip/barlord.jpg",
          price: "8000",
          discption:"عجينة الكريب مع كيكه البراوني والفاكهة ونستلة مقطعه بداخله وياتي بثلاث  نكهات مختلفة"
        },{
          name :"بوم كريب",
          img: "pics/crip/boom.jpg",
          price: "7000",
          discption:"عجينة الكريب مع البراوني والموز نستلة مقطعه بداخلة وايس كريم"
        },{
          name :"كريب فواكه",
          img: "pics/crip/frute.jpg",
          price: "6000",
          discption:" عجينة الكريب مع النوتيلا والفواكه " 
        },{
          name :"كريب لوتس",
          img: "pics/crip/lots.jpg",
          price: "5000",
          discption:"عجينة الكريب مع زبدة اللوتس"
        },{
          name :"كريب مكس",
          img: "pics/crip/mix.jpg",
          price: "5500",
          discption:"عجينة الكريب بثلاث نكهات مختلفة"
        },{
          name :"كريب مكسرات",
          img: "pics/crip/muksrat.jpg",
          price: "6500",
          discption:"عجينة الكريب مع النوتيلا والمكسرات والفاكهة "
        },{
          name :"كريب اوريو",
          img: "pics/crip/oriocrep.jpg",
          price: "5000",
          discption:"عجينة الكريب مع النوتيلا وبسكت الاوريو المطحون"
        },{
          name :"كريب بستاشيو",
          img: "pics/crip/pistashio.jpg",
          price: "5000",
          discption:"عجينة الكريب مع زبدة الفستق الحلبي "
        },{
          name :"سوشي كريب",
          img: "pics/crip/soshi.jpg",
          price: "5000",
          discption:"عجينة الكريب مع الموز والنوتلا"
        },{
          name :"كريب سبشل",
          img: "pics/crip/spashil.jpg",
          price: "5000",
          discption:"عجينة الكريب بنكهتين مختلفتين"
        }
      ]
  const hormonArray = [
    {
      name :"هرمون نوتيلا",
      img:  "pics/hrmon/nutellah.jpg",
      price: "5500",
      discption:"كوب من البراوني والايسكريم بالفاكهة وقطع من البان كيك بالنوتيلا"
    },
    {
      name :"هرمون لوتس",
      img: "pics/hrmon/lotsh.jpg",
      price: "5500",
      discption:"كوب من البراوني والايسكريم بالفاكهة وقطع من البان كيك بزبدة اللوتس"
    },
    {
      name :"هرمون بستاشيو",
      img: "pics/hrmon/pistashioh.jpg",
      price: "5500",
      discption:"كوب من البراوني والايسكريم بالفاكهة وقطع من البان كيك بزبدة الفستق الحلبي"
    },
    {
      name :"هرمون باربي",
      img: "pics/hrmon/strowberyh.jpg",
      price: "5500",
      discption:"كوب من البراوني والايسكريم بالفاكهة وقطع من البان كيك مع صوص الفراولة "
    },
    {
      name :"هرمون الشوكلاتا البيضاء",
      img: "pics/hrmon/whiteh.jpg",
      price: "5500",
      discption:"كوب من البراوني والايسكريم بالفاكهة وقطع من البان كيك بالشوكلاة البيضاء"
    },
  ]
  const brownyArray = [
    {
      name :"براوني",
      img: "pics/brawni/browny.jpg",
      price: "5500",
      discption:"كيكة البراوني مع النوتيلا"
    },{
      name :"براوني مع الايسكريم",
      img: "pics/brawni/brownyicecream.jpg",
      price: "6000",
      discption:" كيكة البراوني مع النوتيلا والايسكريم"
    },
  ]
  const pancakeArray = [
    {
      name :"بان كيك بالفواكه",
      img: "pics/pancake/frout.jpg",
      price: "6000",
      discption:" عجينة البان كيك مع النوتيلا والفواكه"
    },
    {
      name :"بان كيك بالنوتيلا",
      img: "pics/pancake/nutela.jpg",
      price: "4500",
      discption:" عجينة البان كيك مع النوتيلا"
    },
    {
      name :"بان كيك مكسرات وفواكه",
      img: "pics/pancake/mucasrat.jpg",
      price: "6500",
      discption:" عجينة البان كيك مع النوتيلا والفواكه والمكسرات"
    },
    {
      name :"بان كيك سبشل ",
      img: "pics/pancake/spcal.jpg",
      price: "5000",
      discption:" عجينة البان كيك بنكهتين مختلفتين"
    },
  ]
  const minipancakeArray = [
    {
      name :"ميني بان كيك نوتيلا",
      img: "pics/minipancake/nutllam.jpg",
      price: "4500",
      discption:" 12 قطعة من المني بان كيك مع النوتيلا"
    },
    {
      name :"ميني بان كيك سبشل",
      img: "pics/minipancake/spashalm.jpg",
      price: "5000",
      discption:" 12 قطعة من المني بان كيك بنكهتين مختلفتين"
    },
    {
      name :"ميني بان كيك مكس",
      img: "pics/minipancake/mixm.jpg",
      price: "5000",
      discption:" 12 قطعة من المني بان كيك باربعة نكهات مختلفة"
    },
  ]
  const waffleArray = [
    {
      name :"ستيك نوتيلا",
      img: "pics/waffle/nuttellaw.jpg",
      price: "2500",
      discption:"عجينة الوافل مع النوتلا"
    },
    {
      name :"ستيك لوتس",
      img: "pics/waffle/lotsw.jpg",
      price: "2500",
      discption:"عجينة الوافل مع اللوتس"
    },
    {
      name :"ستيك باربي",
      img: "pics/waffle/strberyh.jpg",
      price: "2500",
      discption:"عجينة الوافل مع صوص الفراولة"
    },
    {
      name :"ستيك اوريو",
      img: "pics/waffle/oriow.jpg",
      price: "3000",
      discption:"عجينة الوافل مع النوتيلا وبسكت الاوريو"
    },
    {
      name :"ستيك بستاشيو",
      img: "pics/waffle/pistashiow.jpg",
      price: "3000",
      discption:"عجينة الوافل مع زبدة الفستق الحلبي"
    },
  ]
  const milkShackArray = [
    {
      name :" نوتيلا شيك ",
      img: "pics/milkshack/nutt.jpg",
      price: "3500",
      discption:""
    },
    {
      name :" اوريو شيك ",
      img: "pics/milkshack/orio.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" لوتس شيك ",
      img: "pics/milkshack/lots.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" سريلاك شيك ",
      img: "pics/milkshack/serl.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" كالكسي شيك ",
      img: "pics/milkshack/galaxy.jpg",
      price: "4500",
      discption:""
    },
    {
      name :" لورد شيك ",
      img: "pics/milkshack/lord.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" نستلة شيك ",
      img: "pics/milkshack/nast.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" سنيكرز شيك ",
      img: "pics/milkshack/snic.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" فراولة شيك ",
      img: "pics/milkshack/str.jpg",
      price: "4000",
      discption:""
    },
    {
      name :" بستاشيو شيك ",
      img: "pics/milkshack/nast.jpg",
      price: "4500",
      discption:""
    },
    {
      name :" قهوة شيك ",
      img: "pics/milkshack/nutt.jpg",
      price: "4500",
      discption:""
    },
  ]
  const iceCreamArray = [
    {
      name :"فانيلا ايسكريم ",
      img: "pics/icecream/vane.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"شوكولاتا ايسكريم ",
      img: "pics/icecream/choclat.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"فستق ايسكريم ",
      img: "pics/icecream/pist.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"كراميل ايسكريم ",
      img: "pics/icecream/caramel.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"مشمش ايسكريم ",
      img: "pics/icecream/mshmsh.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"فراولة ايسكريم ",
      img: "pics/icecream/strw.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"سنيكرز ايسكريم ",
      img: "pics/icecream/snic.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"قهوة ايسكريم ",
      img: "pics/icecream/vane.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"توت ايسكريم ",
      img: "pics/icecream/blow.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },{
      name :"راشي ايسكريم ",
      img: "pics/icecream/vane.jpg",
      price: "3000 ربع كيلو ",
      discption:""
    },
    
  ]
  const mohitoArray = [
    {
      name :"موهيتو بلو",
      img: "pics/moheto/blow.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو توت",
      img: "pics/moheto/pink.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو ريد بول",
      img: "pics/moheto/lemon.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو كيوي وليمون",
      img: "pics/moheto/green.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو فواكه حامظة",
      img: "pics/moheto/lemon.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو علج بوبي",
      img: "pics/moheto/pink.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو مانجو",
      img: "pics/moheto/lemon.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو فراولة",
      img: "pics/moheto/red.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو ليمون ونعناع",
      img: "pics/moheto/green.jpg",
      price: "3000",
      discption:""
    },{
      name :"موهيتو انناس",
      img: "pics/moheto/lemon.jpg",
      price: "3000",
      discption:""
    },
  ]

  return (
    <div style={{ background: nightMood ? "#232323" : "#e9e9e9" , color: !nightMood ? "#232323" : "#e9e9e9", transition: "0.5s ease-out" }}>

    <button  style={{ background: !nightMood ? "#232323" : "#e9e9e9", color: nightMood ? "#232323" : "#e9e9e9" }} className='mood-btn'onClick={changeMood}>{nightMood?<WbSunnyIcon/> : <NightlightIcon/> }</button>
      <Header/>
      <CreepSlider sect="الكريب" arry={creepArray} />

      <CreepSlider sect="هرمون السعادة" arry={hormonArray} />

      <CreepSlider sect="البراوني" arry={brownyArray} />

      <CreepSlider sect="البانكيك" arry={pancakeArray} />

      <CreepSlider sect="المني بان كيك" arry={minipancakeArray} />

      <CreepSlider sect="الوافل" arry={waffleArray} />

      <CreepSlider sect="الميلك  شيك" arry={milkShackArray} />

      <CreepSlider sect="الايس كريم" arry={iceCreamArray} />

      <CreepSlider sect="الموهيتو" arry={mohitoArray} />
    </div>
  );
}

export default App;