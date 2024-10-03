import Slider from "../../components/Slider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
function Home () {
    return ( 
    <main>
        <div className="content">
             {/* <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/440441682_856938219783302_7715632577538074323_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuERKanisQpJ1zCgVfdDjUh7zfCrFTRGCHvN8KsVNEYPgwyRoFhMmk2NwunhSHOVnL-eOVNWY1DqdpwYu6-1vy&_nc_ohc=iLC8HHDhFEYQ7kNvgGCBppD&_nc_ht=scontent.fdad1-4.fna&oh=00_AYC9EmktL3xKuZbTTd8AO7qKc9wds_peO5g7Haf7Tp7lgg&oe=6644C54C" alt="logo" /> */}
            <Slider />
        <section className="section" id="section_1">   
        <h1>
            Tại Sao Chọn Điện Mặt Trời Đạt Long Solar
        </h1>
            <div className="row">
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Luôn đi đầu về công nghệ, cung cấp cho khách hàng sản phẩm, dịch vụ hoàn hảo nhất.</p>
                </div>
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Lắp đặt theo tiêu chuẩn, bảo hành chu đáo, tư vấn ân cần.</p>
                </div>
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Mạng lưới hoạt động rộng rãi, đáp ứng nhu cầu lắp đặt của quý khách.</p>
                </div>
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Điện mặt trời thiết kế đa dạng, tính thẩm mỹ cao mang đến cho khách hàng nhiều lựa chọn tối ưu.</p>
                </div>
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Bảo đảm an toàn tuyệt đối cho khách hàng mọi lúc, mọi nơi.</p>
                </div>
                <div className="col-inner">
                <FontAwesomeIcon icon={faCheck} />
                <p> Dịch vụ bảo hành, bảo trì sẵn sàng phục vụ 24/24.</p>
                </div>
            </div>
            </section>  
        </div>
        </main> 
    )
}

export default Home