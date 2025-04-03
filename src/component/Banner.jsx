import React from "react";
import Rating from "../assets/rating.png";
import RatingHalf from "../assets/rating-half.png";
import ImgKSY from "../assets/Kimetsu-no-yaiba.jpg";
import PlayBtn from "../assets/play-button.png";
const Banner = () => {
  return (
    <>
      <section class="banner">
        <div class="container">
          <div class="row banner-content align-items-center">
            <div class="col-lg-6 col-md-6 text-white">
              <span class="feature-badge text-white">TV Show</span>
              <h1 class="display-4 fw-bold mb-3">Kimetsu No Yaiba</h1>
              <div class="mb-2">
                <div className="d-flex align-items-center">
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={Rating} alt="" style={{ width: 24 }} />
                  <img src={RatingHalf} alt="" style={{ width: 24 }} />
                  <span className="ms-2 ">4.5/5</span>
                </div>
              </div>
              <p class="lead mb-4">
                Trên đường tiếp tục làm nhiệm vụ, Tanjirō lập nhóm với Agatsuma
                Zenitsu và Hashibira Inosuke, cũng là những người sống sót sau
                kỳ sát hạch. Cả nhóm đối đầu với một thành viên của Thập Nhị Quỷ
                Nguyệt nhưng bị đánh bại và cuối cùng được các thành viên Sát
                Quỷ Đội giải cứu rồi đưa về trụ sở. Tại đây, anh em nhà Kamado
                tham gia vào cuộc họp giữa Ubuyashiki Kagaya, thủ lĩnh Sát Quỷ
                Đội, và các Trụ cột, những kiếm sĩ ưu tú nhất đoàn diệt quỷ.
              </p>
              <div class="d-flex flex-wrap gap-3">
                <button class="btn btn-outline-light btn-lg px-4">
                  Xem chi tiết
                </button>
                <button class="btn btn-custom-primary btn-lg text-white px-4">
                  Xem ngay
                </button>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="image-container">
                <img src={ImgKSY} class="img-fluid" alt="Product Image" />
                <div class="play-button">
                  <img src={PlayBtn} className="play-icon" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
