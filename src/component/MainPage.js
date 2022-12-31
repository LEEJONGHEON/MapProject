import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';

const MainPage = () => {

  
    return (
    <>
    

        <div className="d-flex">
        <Form className="d-flex">
        <Form.Control
          className="me-2"
          type="search"
          placeholder="예) 세종대로 172, 강남응급실, 어쩌구~"
          aria-label="Search"
         />
        <Button variant="outline-success">검색</Button>
     </Form>
     </div>

     
      <div className="container">
        <div className="containerImage">
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="col-md-6 px-0">
          <div className="single_home_slider">
              <div className="main_home wow fadeInUp" data-wow-duration="700ms">
                  <h3>Our Clients Are Our First Priority</h3>
                       <h1>WELCOME TO ??</h1>
                        <div className="separator"></div>
                           <p>L자동심장충격기(AED)와 해양인명구조함의 정보 검색 서비스입니다</p>
                          <div className="home_btn">
                               <a href="" className="btn btn-lg m_t_10">GET STARTED NOW</a>
                              <a href="" className="btn btn-default">LEARN MORE</a>
                          </div>
               </div>
            </div>
          </div>
        </div>      
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-350 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">자동제세동기(AED)</strong>
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="자동제세동기AED"
                  height="400"
                  image="img/AEDLogo.png"
                  position="relative"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    여기1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    여기2
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="#888">영상</Button>
                  <Button size="small">이미지</Button>
                </CardActions>
              </Card>
  
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">인명구조함</strong>
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="자동제세동기AED"
                  height="400"
                  image="img/rescueBoxLogo.png"
                  position="relative"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    여기1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    여기2
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="#888">영상</Button>
                  <Button size="small">이미지</Button>
                </CardActions>
              </Card>

              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              Sample Project 
            </h3>
      
            <article className="blog-post">
              <h2 className="blog-post-title mb-1">Sample Box</h2>
              <p className="blog-post-meta">Dec 22, 2022 by <a href="#">Mark</a></p>
      
              <p>안전사고, 인명사고 뉴스나 실제 사용사례?</p>
              <p>아니면 홈페이지 소계 등등 내용 길게 길게, 글씨체도 바꾸고 여기는 뭘 넣을지 나중에 생각해보기</p>
            </article>
                  
                  </div>
            </div>
        </div>



           <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">Top</a>
            </nav>

            {/*  History section */}
            <section id="history" className="history sections">
                <div className="container">
                    <div className="row">
                        <div className="main_history">
                            <div className="col-sm-6">
                                <div className="single_history_img">
                                    <img src="assets/images/stab1.png" alt="" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="single_history_content">
                                    <div className="head_title">
                                        <h2>OUR HISTORY</h2>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page 
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                                        distribution of letters, as opposed to using 'Content here, content here', making it 
                                        look like readable English. Many desktop publishing packages and web page editors now use 
                                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>

                                    <a href="" className="btn btn-lg">Click</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section> 

            {/* <!-- service Section --> */}
            <section id="service" className="service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="main_service">
                            <div className="col-md-6 col-sm-12 no-padding">

                                <div className="single_service single_service_text text-right">
                                    <div className="head_title">
                                        <h2>OUR SERVICES</h2>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-10 col-xs-10 margin-bottom-60">
                                            <div className="row">

                                                <div className="col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1">
                                                    <article className="single_service_right_text">
                                                        <h4>자동제세동기 위치찾기</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                                    </article>
                                                </div>
                                                <div className="col-sm-1 col-xs-1">
                                                    <figure className="single_service_icon">
                                                        <i className="fa fa-heart"></i>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="col-md-12 col-sm-10 col-xs-10 margin-bottom-60">
                                            <div className="row">

                                                <div className="col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1">
                                                    <article className="single_service_right_text">
                                                        <h4>인명구조함 위치찾기</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                                    </article>
                                                </div>
                                                <div className="col-sm-1 col-xs-1">
                                                    <figure className="single_service_icon">
                                                        <i className="fa fa-heart"></i>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="col-md-12 col-sm-10 col-xs-10 margin-bottom-60">
                                            <div className="row">

                                                <div className="col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1 margin-bottom-20">
                                                    <article className="single_service_right_text">
                                                        <h4>응급실 위치찾기</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                                    </article>
                                                </div>
                                                <div className="col-sm-1 col-xs-1">
                                                    <figure className="single_service_icon">
                                                        <i className="fa fa-heart"></i>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </div> 

                                    </div>
                                </div>
                            </div> 

                            <div className="col-md-6 col-sm-12 no-padding">
                                <figure className="single_service single_service_img">
                                    <div className="overlay-img"></div>
                                    <img src="assets/images/servicerightimg.jpg" alt="" />
                                </figure> 
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section> 
         
         {/* 다른 참고기관 링크걸기 */}
            <section id="clogo" className="clogo">
                <div className="container">
                    <div className="row">
                        <div className="main_clogo sections text-center">
                            <div clclassNameass="head_title text-center">
                                <h2>기타 다른 연결기관 넣기</h2>
                                <div className="subtitle">
                                    Suspendisse sed eros mollis, tincidunt felis eget, interdum erat. 
                                    Nullam sit amet odio eu est aliquet euismod a a urna. Proin eu urna suscipit, dictum quam nec. 
                                </div>
                                <div className="separator"></div>
                            </div> 

                            <div className="body_imgs"> 
                                <a href="https://www.lost112.go.kr/"><img src="img/112.png" alt="경찰청 유실물센터 바로가기 이미지" /></a>
                                <a href="http://www.119.go.kr/Center119/main.do"><img src="img/119.png" alt="119 바로가기 이미지" /></a>
                                <a href="https://www.kosha.or.kr/kosha/index.do"><img src="img/safe.png" alt="안전공단 바로가기 이미지" /></a>
                                <a href="https://www.lost112.go.kr/"><img src="img/112.png" alt="경찰청 유실물센터 바로가기 이미지" /></a>
                                <a href="http://www.119.go.kr/Center119/main.do"><img src="img/119.png" alt="119 바로가기 이미지" /></a>
                                <a href="https://www.kosha.or.kr/kosha/index.do"><img src="img/safe.png" alt="안전공단 바로가기 이미지" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </section> 

            <section id="trial" clclassNameass="trial text-center wow fadeIn"  data-wow-duration="2s" data-wow-dealy="1.5s">
                <div className="main_trial_area">
                    <div className="video_overlay sections">
                        <div className="container">
                            <div className="row">
                                <div className="main_trial">
                                    <div className="col-sm-12">
                                        <h2>안전한 삶(공익신고 유도 배너)</h2>
                                        <h4>여러분의 소중한 제보로 안전한 대한민국에 한걸음 더 다가갑니다</h4>
                                        <a href="/Board" className="btn btn-lg">공익신고접수</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

     </>
        
    );
}

export default MainPage;