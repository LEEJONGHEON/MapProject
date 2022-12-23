import React from "react";


const Header = () => {

    return (
<div class="maincontainer">
  <header class="blog-header lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="Mainpage">로고?</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="Mainpage">SEARCH</a>
      </div>

      <div class="col-4 dd-flex justify-content-end align-items-center">
        <a class="btn btn-sm btn-outline-secondary" href="Login">Sign up</a>
      </div>
    </div>
  </header>
</div>

    );
} 

export default Header;