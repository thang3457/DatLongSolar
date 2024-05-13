import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import  './footer.scss'

function Footer () {
    return (
        
        <footer class="footer">
            <div className='icon'>
            <FontAwesomeIcon icon={faGithub}  />

            </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5>Về Chúng Tôi</h5>
                    <p>Chúng tôi cung cấp giải pháp năng lượng mặt trời chất lượng cao cho gia đình và doanh nghiệp. Với kinh nghiệm và uy tín, chúng tôi cam kết mang lại sự hài lòng tối đa cho khách hàng.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5>Dịch Vụ</h5>
                    <ul class="list-unstyled">
                        {/* <li><a href="#">Lắp đặt hệ thống năng lượng mặt trời</a></li>
                        <li><a href="#">Bảo dưỡng và sửa chữa</a></li>
                        <li><a href="#">Tư vấn và thiết kế</a></li>
                        <li><a href="#">Tài liệu và hướng dẫn sử dụng</a></li> */}
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5>Liên Hệ</h5>
                    <address>
                        <p>123 Đường ABC, Thành phố XYZ</p>
                        <p>Email: info@solarcompany.com</p>
                        <p>Điện thoại: +123456789</p>
                    </address>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <p class="text-center">© 2024 DatLong Solar. All Rights Reserved | DesginThang</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    )
}

export default Footer