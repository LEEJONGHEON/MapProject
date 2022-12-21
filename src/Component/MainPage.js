import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const MainPage = () => {

    return (
    <>
    
        {/* <div class="item-bg"></div>    */}
        
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

        {/* <div>
            <ul className="main-icon-ul">
                <li className="main-icon">
                  <a href="Emergency">
                    <img src="./beta.png" alt="응급실 새창 열기" />
                    <span>응급실</span></a>
                </li>
                <li className="main-icon">
                  <a href="Hospital">
                    <img src="../beta.png" alt="병원 새창 열기" />
                    <span>병원</span></a>
                </li>
                <li className="main-icon">
                  <a href="Aed">
                    <img src="./beta.png" alt="자동제세동기(AED) 새창 열기" />
                    <span>자동제세동기(AED)</span></a>
                </li>
               <li className="main-icon">
                  <a href="Rescue">
                    <img src="./beta.png" alt="응급처치방법 새창 열기" />
                    <span>응급처치방법</span></a>
                </li>
                <li className="main-icon">
                  <a href="MapPicture">
                    <img src="./beta.png" alt="지도 새창 열기" />
                    <span>지도</span></a>
                </li>
                <li className="main-icon">
                  <a href="Board">
                    <img src="./beta.png" alt="공익신고 새창 열기" />
                    <span>공익신고</span></a>
                </li>
            </ul>
      </div> */}

      <div>
      <div class="container">
        <div className="containerImage">
        <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Title</h1>
            <p class="lead my-3">자동심장충격기(AED)와 해양인명구조함의 정보 검색 서비스입니다.</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
          </div>
        </div>
        </div>
      
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">자동제세동기(AED)</strong>
                <h3 class="mb-0">Post title</h3>
                <div class="mb-1 text-muted">      </div>
                <p class="card-text mb-auto">간단 사용법을 텍스트로 넣을지?, 링크걸기</p>
                <a href="#" class="stretched-link">동영상 바로보기</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" 
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">이미지1</text></svg>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">인명구조함</strong>
                <h3 class="mb-0">Post title</h3>
                <div class="mb-1 text-muted">      </div>
                <p class="mb-auto">동해물과 백두산이 마르고 닮도록 어쩌구 저쩌구 텍스트는 길게 쓰는게 더 나아보임</p>
                <a href="#" class="stretched-link">동영상</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">이미지2</text></svg>
      
              </div>
            </div>
          </div>
        </div>
      
        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
      
            <article class="blog-post">
              <h2 class="blog-post-title mb-1">Sample Box</h2>
              <p class="blog-post-meta">Dec 22, 2022 by <a href="#">Mark</a></p>
      
              <p>안전사고, 인명사고 뉴스나 실제 사용사례?</p>
              <p>아니면 홈페이지 소계 등등 내용 길게 길게, 글씨체도 바꾸고 여기는 뭘 넣을지 나중에 생각해보기</p>
            </article>
                  
           <nav class="blog-pagination" aria-label="Pagination">
              <a class="btn btn-outline-primary rounded-pill" href="#">Top</a>
            </nav>
      
          </div>
      
  
        </div>
      
      </div>
     </div>
     </>
        
    );
}

export default MainPage;