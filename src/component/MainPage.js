import React from "react"
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rescue from "./Rescue";
import Aed from "./Map/Aed";

const MainPage = () => {


  
    return (
    <>
      <div class="container" style={{margin:50}}>
        <div className="containerImage">
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark"  style={{height:300}}>

          <div className="single_home_slider">
              <div className="main_home wow fadeInUp" data-wow-duration="700ms">
                  <h3>More Safety, Better Life </h3>
                       <h1>WELCOME TO OUR SERVICE</h1>
                        <div className="separator"></div>
                           <p>자동심장충격기(AED)와 해양인명구조함의 정보 검색 서비스입니다</p>
                          <div className="home_btn">
                               <a href="/Aed" className="btn btn-lg m_t_10" >GET STARTED NOW</a>
                              <a href="/Rescue" className="btn btn-default">LEARN MORE</a>
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
                  image={require("../assets/img/AEDLogo.png")}
                  position="relative"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  자동제세동기(AED)의 위치와 사용방법 확인하기
                  </Typography>
                </CardContent>
                <CardActions>
                <Button variant="outline-success" onClick={"/Aed"}>지도</Button>{' '}
                <Button variant="outline-success" >사용법</Button>
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
                  image={require("../assets/img/rescueBoxLogo.png")}
                  position="relative"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  인명구조함의 위치와 사용방법 확인하기
                  </Typography>
                </CardContent>
                <CardActions>
                <Button variant="outline-success" >지도</Button>{' '}
                <Button variant="outline-success" >사용법</Button>
                </CardActions>           
              </Card>

              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row g-5" style={{marginTop:50}}>
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
            이달의 뉴스
            </h3>
      
            <article className="blog-post">
              <h2 className="blog-post-title mb-1">속초시, 공공 체육시설에 심장제세동기 설치</h2><br />
              <p className="blog-post-meta">Dec 18, 2022 by <a href="http://www.enewstoday.co.kr/news/articleView.html?idxno=1623882">Link</a></p>
              <img src={require("../assets/img/AEDnews.png")} alt="뉴스기사 사진" /><br /><br /><br />
              <p>[이뉴스투데이 강원취재본부 우정연 기자] 강원 속초시는 공공 체육시설 10곳에<br />
              심장제세동기(자동심장충격기, AED)를 설치한다고 18일 밝혔다.<br /><br />
              이는 체육활동 중 응급상황이 발생했을 때를 대비해 신속한 구급 대처 수단을 확보함으로써<br />
              시민 안정이 보장되는 환경에서 체육활동에 매진할 수 있도록 마련됐다.<br />
              설치 대상은 청초 생활체육관과 척산 생활체육관 등 속초시 공공 체육시설 10곳이다.<br /><br />
              출처 : 이뉴스투데이</p>
            </article>
                  
                  </div>
            </div>
        </div>
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
                                                        <h4>자동제세동기</h4>
                                                        <p> 지도상에서 병원, 지하철, 공공기관 등등에서 구비하고 있는 자동제세동기(AED)의 위치와 사용법을 확인할 수 있습니다.
                                                        </p>
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
                                                        <h4>인명구조함</h4>
                                                        <p> 가벼운 물놀이 혹은 재난상황에서 어려운 처지에 빠진 사람의 목숨을 구할 수 있도록 
                                                            여러 장비를 보관하고 있는 구조함의 위치와 사용방법을 확인할 수 있습니다.</p>
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
                                                        <p>인명구조함과 자동제세동기(AED)의 위치와 더불어 지도에서 원하시는 위치를 검색하면 
                                                            그 주변의 응급실 위치를 확인할 수 있습니다.
                                                        </p>
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
                                    <img src={require("../assets/img/service1.png")} alt="서비스화면 꾸미기 이미지" />
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
                                <h2>자주찾는 서비스</h2>
                                <div className="subtitle">
                                    {/* 다양한 사이트를 확인해보세요! */}
                                </div>
                                <div className="separator"></div>
                            </div> 

                            <div className="body_imgs"> 
                                <a href="https://www.lost112.go.kr/"><img src={require("../assets/img/112.png")} alt="경찰청 유실물센터 바로가기 이미지" /></a>
                                <a href="http://www.119.go.kr/Center119/main.do"><img src={require("../assets/img/119.png")} alt="119 바로가기 이미지" /></a>
                                <a href="https://www.kosha.or.kr/kosha/index.do"><img src={require("../assets/img/safe.png")} alt="안전공단 바로가기 이미지" /></a>
                                <a href="https://www.safekorea.go.kr/idsiSFK/neo/main/main.html/"><img src={require("../assets/img/safekorea.png")} alt="국민재난안전 바로가기 이미지" /></a>
                                <a href="https://www.safetyreport.go.kr/#main"><img src={require("../assets/img/safetyreport.png")} alt="안전신문고 바로가기 이미지" /></a>
                                <a href="https://www.weather.go.kr/w/index.do"><img src={require("../assets/img/weather.png")} alt="기상청 바로가기 이미지" /></a>
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
                                        <div>
                                        <h2>공익신고 접수</h2>
                                        <h4>사이트에 미등록된 위치를 발견하신다면 아래 공익접수 게시판에 확인된 정보를 남겨주시면 반영하겠습니다.<br/>
                                            여러분의 소중한 제보로 안전한 대한민국에 한걸음 더 다가갑니다.<br/>
                                            감사합니다.</h4>
                                         </div>   
                                        <a href="/Board" className="btn btn-lg">공익신고접수</a>
                                    
                                    </div>
                                    
                                </div>
                                <img className="boardWrite_bg_img" src={require("../assets/img/board_form.png")} alt="공익신고 접수배경 이미지" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <nav className="blog-pagination" aria-label="Pagination" style={{marginTop:100}}>
              <a className="btn btn-outline-primary rounded-pill" href="#">Top</a>
            </nav>
        </>
        
    );
}

export default MainPage;