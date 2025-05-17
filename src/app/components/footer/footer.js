
import Image from "next/image";
import styles from "./footer.module.css"
export function Footer() {
    return (
<div className={styles.foot}>
<footer className={styles.footer}>
   <section className={styles.FooterSection}>
    <div className={styles.footerCol}>
    <div className={styles.footerTitle1}>
    <strong>Tổng đài hỗ trợ</strong>

    <ul>
      <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
      <li>Khieu nai: 1800 676 456 (8:00 - 21:30)</li>
      <li>Bảo hành: 1900 232 465 (8:00 - 21:00)

</li>
    </ul>
    </div>

    </div>

    <div className={styles.footerCo2}>
    <div className={styles.footerTitle2}>
    <strong>Về Công Ty</strong>

    <ul>
      <li>Giới thiệu công ty (MWG.vn)</li>
      <li>Tuyển dụng</li>
      <li>Gửi góp ý, khiếu nại</li>
    
      <li>  Tìm siêu thị (2960 shop)</li>

    </ul>
    </div>
    </div>

    <div className={styles.footerCo3}>
    <div className={styles.footerTitle3}>
    <strong>Thông tin khác</strong>

    <ul>
      <li>Tích điểm Quà tặng VIP</li>
      <li>Lịch sử mua hàng</li>
      <li>Đăng ký bán hàng CTV chiết khấu cao</li>
      <li>Tìm hiểu về mua trả chậm</li>
      <li>Xem thêm</li>
    </ul>
    </div>
    </div>

    <div className={styles.footerCol}>4</div>
  </section>
  <div className={styles.CopyRight}>

                <p>
                © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021. </p>
                <p>
                Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email:  hotrotmdt@thegioididong.com.
                Xem chính sách sử dụng
                </p>

  </div>
  </footer>
  </div>
      )
    }
 