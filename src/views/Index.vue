<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Title -->
    <title>Esee</title>

    <!-- --------- Swiper Library --------- -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
    />

    <!-- --------- Unicons Icons --------- -->
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />

    <!-- --------- CSS Files --------- -->
    <link rel="stylesheet" href="http://localhost:5000/istyle.css" />
  </head>

  <body>
    <header>
      <!-- --------- Navbar --------- -->
      <nav class="container">
        <img
          class="logo"
          src="@/assets/svg/logoss/logo.svg"
          alt="Logo"
          data-hs-theme-appearance="default"
        />

        <div class="links">
          <ul>
            <li>
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li>
              <a href="#services" class="nav-link">Services</a>
            </li>
            <li>
              <a href="#ourclient" class="nav-link">Our Client</a>
            </li>
            <!--
                <li>
                    <a href="#" class="nav-link">Contact</a>
                </li>
                -->
          </ul>
          <div class="nav-btn">
            <ul>
              <li>
                <router-link :to="{ name: 'ApplyAsAHost' }" class="rbtn">
                  Apply as a Host
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'LoginAdmin' }" class="lbtn">
                  Sign In
                </router-link>
              </li>
            </ul>
          </div>
          <!--<i class="uil uil-moon toggle-btn"></i>-->
        </div>
      </nav>
    </header>

    <main>
      <!-- --------- Showcase Area Section --------- -->
      <section class="showcase-area" id="home">
        <!-- <img src="@/assets/square1.png" class="shape square" alt="circle"> -->
        <div class="container">
          <div class="showcase-info">
            <h1 class="heading">
              Make management <span style="color: #eaae2e"> easier</span> than
              before.
            </h1>
            <h3 class="sub-heading">
              Experience the handiest way to track, manage, recruit, and monitor
              hosts.
            </h3>
            <div class="cta">
              <router-link :to="{ name: 'LoginAdmin' }" class="btn">
                SIGN IN NOW
              </router-link>
            </div>
            <p class="mt-3 fw-bold dblue">
              For hosts,
              <span
                style="cursor: pointer"
                @click="$router.push({ name: 'Login' })"
                >click here to sign in
                <i class="bi bi-chevron-right ms-2"></i>
              </span>
            </p>
          </div>
          <div class="showcase-image">
            <img
              src="@/assets/iassets/manage2.png"
              class="manage"
              alt="person"
            />
          </div>
        </div>
      </section>

      <section class="services section" id="services">
        <div class="container">
          <div class="section-header">
            <h3 class="title" data-title="What We Offer">Services</h3>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adupusucubf elit. Alias,
              vero?
            </p>
          </div>
          <div class="cards">
            <div class="card-wrap">
              <img
                src="@/assets/iassets/points.png"
                class="points points1 points-sq"
              />
              <div class="card card1" data-card="Recruit">
                <div class="card-content">
                  <img
                    src="@/assets/iassets/recruitment.png"
                    class="icon"
                    alt=""
                  />
                  <h3 class="title-sm">Recruit</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adupusucubf elit.
                    Alias, vero?
                  </p>
                </div>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card card2" data-card="Manage">
                <div class="card-content">
                  <img src="@/assets/iassets/idea1.png" class="icon" alt="" />
                  <h3 class="title-sm">Manage</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adupusucubf elit.
                    Alias, vero?
                  </p>
                </div>
              </div>
            </div>
            <div class="card-wrap">
              <img
                src="@/assets/iassets/points.png"
                class="points points2 points-sq"
              />
              <div class="card card3" data-card="Track">
                <div class="card-content">
                  <img
                    src="@/assets/iassets/performance.png"
                    class="icon"
                    alt=""
                  />
                  <h3 class="title-sm">Track</h3>
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adupusucubf elit.
                    Alias, vero?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--------- Our Client Section ------->
      <section class="oclient section" id="ourclient">
        <div class="container">
          <div class="oclient-grid">
            <img
              src="@/assets/iassets/image3.png"
              class="manage"
              alt="person"
            />
          </div>

          <div class="oclient-info">
            <h1 class="sub-heading">OUR CLIENT</h1>
            <h1 class="heading">The Midnight Suns Company</h1>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adupusucubf elit. Alias,
              vero. Lorem ipsum dolor sit amet, consectetur adupusucubf elit.
              Alias, vero. Lorem ipsum dolor sit amet, consectetur adupusucubf
              elit. Alias, vero. Lorem ipsum dolor sit amet, consectetur
              adupusucubf elit. Alias, vero. Lorem ipsum dolor sit amet,
              consectetur adupusucubf elit. Alias, vero. Lorem ipsum dolor sit
              amet, consectetur adupusucubf elit. Alias, vero.
            </p>
            <div class="milestones">
              <div class="ml">
                <h2 class="number"><span data-target="11">0</span>+</h2>
                <h5>Years</h5>
              </div>
              <div class="ml">
                <h2 class="number"><span data-target="79">0</span>+</h2>
                <h5>Projects</h5>
              </div>
              <div class="ml">
                <h2 class="number"><span data-target="95">0</span>+</h2>
                <h5>Clients</h5>
              </div>
              <div class="cta">
                <router-link
                  :to="{ name: 'ApplyAsAHost' }"
                  class="btn secondary-btn"
                >
                  Apply as a Host
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!----------- About Section --------- -->

      <!-- --------- Skills Section --------- -->

      <!-- --------- Services Section --------- -->

      <!-- --------- Portfolio Section --------- -->

      <!-- --------- Contact Section --------- -->

      <!-- --------- Subscription Section --------- -->
    </main>

    <footer>
      <!-- --------- Footer --------- -->
    </footer>

    <!-- JavaScript Files -->
  </body>
</template>

<script>
export default {
  name: "Index",
};
</script>
