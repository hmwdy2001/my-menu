import logo from './pics/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Header(){
    return (
    <div className='header-contaner'>
        <img className="logo" src={logo} alt="logo" />
        <h1 className="shop-name">Bar Lord  || بار لورد</h1>
        <p className="about">
            العنوان📍|الحرية / شارع الدور العريض / قرب فلافل لبنان
            <br></br> <br></br>
            التوصيل مجاني داخل مدينة الحرية ⚡     
        </p>
        <div className="links">
            <a className="insta" href="https://www.instagram.com/bar_lord?igsh=cnF1a2RvZW1kNWQ2">
                <InstagramIcon/>
                @bar_lord
            </a>
            <a className="facebook" href="https://www.facebook.com/share/1AUSmakhDm/">
                <FacebookIcon/>
                بار لورد
            </a>
            <a className="whatsapp" href="https://wa.me/9647721473888">
                <WhatsAppIcon/>
                07721473888
            </a>
        </div>

    
    </div>)
}