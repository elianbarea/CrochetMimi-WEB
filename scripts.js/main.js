document.getElementById("navigation").innerHTML = `
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a href="#">HOME</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">NEW SEASON</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">BEANIES</a></li>
                    <li><a class="dropdown-item" href="#">ACCESORIES</a></li>
                    <li><a class="dropdown-item" href="#">COMBOS</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">PRODUCTS</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">BEANIES</a></li>
                    <li><a class="dropdown-item" href="#">CLOTHES</a></li>
                    <li><a class="dropdown-item" href="#">ACCESORIES</a></li>
                    <li><a class="dropdown-item" href="#">AMIGURUMIS</a></li>
                </ul>
            </li>
        </ul>
        <ul class="title">
            <img class="icon-nav" src="../styles/images/mimicon.png" alt="icon">
            <h3>Mimi Crochet Store</h3>
        </ul>
        <ul class="navbar-right">
            <li class="nav-item">
                <a href="#">LOGIN</a>
            </li>
            <li class="nav-item">
                <a href="#">CART (0)</a>
            </li>
            <li>
                <span class="material-symbols-outlined">search</span>
            </li>
        </ul>`
document.getElementById("footer").innerHTML = `
        <div class="info-footer">
            <div class="title-footer">
                <img class="icon-nav" src="../styles/images/mimicon.png" alt="icon">
                <h3>Mimi Crochet Store</h3>
            </div>
            <div class="body-footer">
                <p>
                    8:00 - 19:00, Monday - Saturday, Sunday - closed <br>
                    Telephone: +xx xxx xxxx <br>
                    <span class="material-symbols-outlined">store</span>
                </p>
            </div>
        </div>
        <div class="footer-footer">
            <ul class="ul-footer">
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">FAQS</a></li>
                <li><a href="#">ORDER TRACKING</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <hr></hr>
            <h5>Copyright &copy; 2023, Mimi Crochet Store</h5>
        </div>
    </div>
`