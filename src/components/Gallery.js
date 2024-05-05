// import {Helmet} from 'react-helmet-async'

import React from 'react'
import image_1 from "../assets/images/1.jpg";
import image_2 from "../assets/images/2.jpg";
import image_3 from "../assets/images/3.jpg";
import image_4 from "../assets/images/4.jpg";
import image_5 from "../assets/images/5.jpg";
import image_6 from "../assets/images/6.jpg";
import image_10 from "../assets/images/8.jpg";
import image_11 from "../assets/images/9.jpg";
import image_12 from "../assets/images/10.jpg";
import image_13 from "../assets/images/11.jpg";
import image_14 from "../assets/images/12.jpg";
import image_15 from "../assets/images/13.jpg";
import image_16 from "../assets/images/14.jpg";
import image_17 from "../assets/images/15.jpg";
import image_18 from "../assets/images/16.jpg";
import image_19 from "../assets/images/17.jpg";
import cover from "../assets/images/cover.jpg";
import Rating from "../components/Rating";

function Gallery() {
  return  (
    <>
       {/* <Helmet>
              <title>เสริมจมูกเชียงใหม่ที่ไหนดี</title>
              <meta name='description' content='เสริมจมูกใกล้บ้านจังหวัดเชียงใหม่ เสริมจมูกสวยราคาไม่แพง คลินิกเสริมจมูก เสริมจมูกเชียงใหม่ เสริมจมูกครั้งแรก' />
              <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/shop/'/>
            </Helmet> */}
      <section id="gallery">
      <div className="hero">
          <img src={cover} alt=""></img>
        </div>
        <br></br>
        
          <center> <h1>Saithong Hemp</h1></center>
          <center> <h2>ภาพตัวอย่างสินค้าที่ผ่านการแปรรูปเส้นใยกัญชง โดยการถักนิตติ้ง และโครเชต์ ของวิสาหกิจชุมชนกลุ่มแม่บ้านใยกัญชงทรายทอง</h2></center>
          <br></br>
        
        <center><div className="gallery__container">
        
         
        <div className="card">
          <center> <img src={image_6} alt="หมอนใยกัญชง"></img></center>
          <center><div className="inner">   
              <center><h3>หมอนใยกัญชง </h3><br></br>
              <p className="product-rating">
                             <Rating/>
                              </p><h4>฿1,799</h4></center><br />
                </div> </center>
            </div>    
          <div className="card">
          <center> <img src={image_10} alt="ถุงใยกัญชง"></img></center>
          <center><div className="inner">   
              <center><h3>ถุงใยกัญชง </h3><br></br>
              <p className="product-rating">
                             <Rating/>
                </p>
                <h4>฿599</h4></center><br />
              
              
                  </div> </center>
            </div>      
          <div className="card">
            
            <center> <img src={image_1} alt="ลูกประคบนวดกลิ้ง" ></img></center>
            <center><div className="inner">           
              <center><h3>ลูกประคบนวด </h3><br></br>
              <p className="product-rating">
                             <Rating/>
                              </p><h4>฿350</h4></center><br />
            </div> 
            </center>
          </div>
          <div className="card">
            <center> <img src={image_2} alt="หมวกใยกัญชง" ></img></center>
            <center> <div className="inner">   
              <center><h3>หมวกใยกัญชง </h3><br></br>
              <p className="product-rating">
                             <Rating/>
                              </p><h4>฿1,299</h4></center><br />
            </div></center> 
          </div>
          <div className="card">
            <center> <img src={image_3} alt="หมวกใยกัญชง"></img></center>
            <center><div className="inner">   
        <center><h3>หมวกใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿599</h4></center><br/>
        </div> </center>
        </div>

          <div className="card">
            <center> <img src={image_4} alt="หมวกใยกัญชง"></img></center>
            <center><div className="inner">   
            <center><h3>หมวกใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿899</h4></center><br/>
            </div> </center>
            </div>
          <div className="card">
            <center> <img src={image_5} alt="หมวกใยกัญชง"></img></center>
            <center><div className="inner">   
              <center><h3>หมวกใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿399</h4></center><br/>
              </div> </center>
            </div>  
          
          <div className="card">
          <center> <img src={image_11} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
                    <center><h3>ชุดยาวใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿4,999</h4></center><br/>
                    </div> </center>
            </div>        
          <div className="card">
          <center> <img src={image_12} alt="กางเกงใยกัญชง"></img></center>
          <center><div className="inner">   
                      <center><h3>กางเกงใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,599</h4></center><br/>
                      </div> </center>
             </div>         
          <div className="card">
          <center> <img src={image_13} alt="กางเกงใยกัญชง"></img></center>
          <center><div className="inner">   
                        <center><h3>กางเกงใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,999</h4></center><br/>
                        </div> </center>
            </div>            
          <div className="card">
          <center> <img src={image_14} alt="กางเกงใยกัญชง"></img></center>
          <center><div className="inner">   
                          <center><h3>กางเกงใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿1,999</h4></center><br/>
                          </div> </center>
             </div>             
          <div className="card">
          <center> <img src={image_15} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
          <center><h3>เสื้อใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,599</h4></center><br/>
          </div> </center>
          </div>
          <div className="card">
          <center> <img src={image_16} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
          <center><h3>เสื้อใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,599</h4></center><br/>
          </div> </center>
          </div>
          <div className="card">
          <center> <img src={image_17} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
          <center><h3>เสื้อใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,599</h4></center><br/>
          </div> </center>
          </div>
          <div className="card">
          <center> <img src={image_18} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
          <center><h3>เสื้อใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿2,599</h4></center><br/>
          </div> </center>
          </div>
          <div className="card">
          <center> <img src={image_19} alt="เสื้อใยกัญชง"></img></center>
          <center><div className="inner">   
          <center><h3>เสื้อใยกัญชง </h3><br></br><p className="product-rating">
                             <Rating/>
                              </p><h4>฿1,599</h4></center><br/>
          </div> </center>
          </div>
          <br></br>
          <br></br>
        </div>
        </center>
      </section>
    </>
  )
}
export default Gallery;