import React from "react";

const Footer = () => {

    return(
<>
    <br/><br/><br/><br/>
     <div class="blog-footer">
        <p>공익신고 접수는 <a href="Board">여기</a>
        를 클릭해주세요
        </p>
     </div><br/><br/>

      <div className="container">
        <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                <ul className="list-inline mb-2">
                    <li className="list-inline-item"><a href="#!">About</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Contact</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2022. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item me-4">
                        <a href="#!"><i className="bi-facebook fs-3"></i></a>
                    </li>
                    <li className="list-inline-item me-4">
                        <a href="#!"><i className="bi-twitter fs-3"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!"><i className="bi-instagram fs-3"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</>
    );
}

export default Footer;