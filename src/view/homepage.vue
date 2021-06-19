<template>
  <div>
    <div class="bg-dark-ytc">      
      <b-navbar toggleable="md" type="dark" class="bg-dark-ytc p-0">
        <div class="container">
          <b-navbar-brand href="#"><img src="@/assets/images/logo.png"></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" class=""></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#up">Home</b-nav-item>
              <b-nav-item href="#service">Services</b-nav-item>
              <b-nav-item href="#works">Works</b-nav-item>
              <b-nav-item href="#team">Team</b-nav-item>
              <b-nav-item href="#"><b-button size="sm" rounded  class="my-2 my-sm-0" type="submit" variant="success">Contact Us</b-button></b-nav-item>
            </b-navbar-nav>
          </b-collapse>    
        </div>
      </b-navbar>
    </div>
    <div id="up" class="bg-dark-ytc margin-navbar">
      <div class="container">
        <b-row class="" align-v="center">
          <div class="col-md-5 text-white">
            <h1 class="font-weight-bold">We guide the client to develop product in right way</h1>
            <p class="fs-16 color-muted">We are a full-service digital agency with the right team, resources and creativity to bring your idea to life.</p>
            <b-button size="md" class="my-2 my-sm-0" type="submit" variant="success">Let’s Work Together</b-button>  
          </div>
          <div class="col-md-7">
            <img src="@/assets/images/img-banner.png" class="w-100">
          </div>
        </b-row>
      </div>
    </div>
    <div id="service" class="bg-white bg-img-big-full">
      <div class="container">
        <b-row class="bg-img-big-full" align-v="center">
          <div id="disp-dekstop" class=" col-md-6">
            <img src="@/assets/images/img-services.png" class="" style="max-width: 500px;height: 450px;">
          </div>
          <div class="col-md-6 text-white text-dark">
            <h1 class="font-weight-bold color-dark-ytc mx-5 mb-5">Our Services</h1>
            <ul class="list-unstyled">
              <b-media tag="li">
                <template #aside class="mb-2">
                  <b-avatar variant="light" size="lg">
                    <b-icon variant="success" font-scale="2" icon="briefcase" aria-hidden="true"></b-icon>
                  </b-avatar>
                </template>
                <h5 class="mt-0 mb-2 color-dark-ytc font-weight-bold">Startup Consultant</h5>
                <p class="mb-0 fs-16">
                  You have a great idea for an app or service? We can help you make it happen.
                </p>
              </b-media>

              <b-media tag="li" class="my-4">
                <template #aside>
                  <b-avatar variant="light" size="lg">
                    <b-icon variant="success" font-scale="2" icon="clipboard-check" aria-hidden="true"></b-icon>
                  </b-avatar>
                </template>
                <h5 class="mt-0 mb-2 color-dark-ytc font-weight-bold">Product Development</h5>
                <p class="mb-0 fs-16">
                  We have a range of services to help you design, develop and test your ideas.
                </p>
              </b-media>

              <b-media tag="li">
                <template #aside>
                  <b-avatar variant="light" size="lg">
                    <b-icon variant="success" font-scale="2" icon="server" aria-hidden="true"></b-icon>
                  </b-avatar>
                </template>
                <h5 class="mt-0 mb-2 color-dark-ytc font-weight-bold">Engineering</h5>
                <p class="mb-0 fs-16">
                  We offer affordable design, engineering and prototyping services.
                </p>
              </b-media>
            </ul>
          </div>
        </b-row>
      </div>
    </div>
    <div id="works" class="bg-img-big-full bg-dark-ytc" :style="{
        backgroundImage: `url('${require('@/assets/images/bg-works.svg')}')`,
      }">
      <div class="container">
        <b-row class="bg-img-big-full" align-v="center">
          <div class="col-md-10 m-auto">
            <h1 class="font-weight-bold text-white text-center mb-5">How We Works</h1>
            <b-card-group deck>
              <article class="card rounded-big bg-dark-work mb-2" style="max-width: 20rem;">
                <div class="d-flex card-body">
                  <div class="bg-work">                    
                    <img src="@/assets/images/img-brain.svg" alt="Image" class="w-100" ><!---->
                  </div>
                  <div id="disp-dekstop" class="bg-work bg-transparent position-absolute float-right" style="right: 5%;top:25%;">
                    <img src="@/assets/images/img-arrow.png" class="w-100">
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title font-weight-bold text-white">Brainstorming</h4><!---->
                  <p class=""> We can start by brainstorming ideas with you and help get it off the ground.</p>
                </div><!----><!---->
                <div id="disp-mobile" class="bg-work bg-transparent m-auto text-center">
                  <img src="@/assets/images/img-arrow.png" class="w-100 rt-90">
                </div>
              </article>
              <article class="card rounded-big bg-dark-work mb-2" style="max-width: 20rem;">
                <div class="d-flex card-body">
                  <div class="bg-work">                    
                    <img src="@/assets/images/img-idea.svg" alt="Image" class="w-100" ><!---->
                  </div>
                  <div id="disp-dekstop" class="bg-work bg-transparent position-absolute float-right" style="right: 5%;top:25%;">
                    <img src="@/assets/images/img-arrow.png" class="w-100">
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title font-weight-bold text-white">Ideation</h4><!---->
                  <p class=""> Let’s explore every idea you have and find the best one.</p>
                </div>
                <div id="disp-mobile" class="bg-work bg-transparent m-auto text-center">
                  <img src="@/assets/images/img-arrow.png" class="w-100 rt-90">
                </div>
              </article>
              <article class="card rounded-big bg-dark-work mb-2" style="max-width: 20rem;">
                <div class="d-flex card-body">
                  <div class="bg-work">                    
                    <img src="@/assets/images/img-exe.svg" alt="Image" class="w-100" ><!---->
                  </div>
                  <div id="disp-dekstop" class="bg-work bg-transparent position-absolute float-right" style="right: 5%;top:25%;">
                    <img src="@/assets/images/img-arrow.png" class="w-100">
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title font-weight-bold text-white">Execution</h4><!---->
                  <p class=""> Pick our best proposal, and we’ll develop and deliver it to you.</p>
                </div>
                <div id="disp-mobile" class="bg-work bg-transparent m-auto text-center">
                  <img src="@/assets/images/img-arrow.png" class="w-100 rt-90">
                </div>
              </article>
            </b-card-group>
          </div>
        </b-row>
      </div>
    </div>
    <div id="team" class="bg-white bg-img-big-full" :style="{
        backgroundImage: `url('${require('@/assets/images/bg-ornament.svg')}')`,
      }">
      <div class=" container">
        <b-row class="bg-img-big-full" align-v="center">
          <div class="col-md-6 text-white text-dark">
            <h1 class="font-weight-bold color-dark-ytc mb-3">Our Talent Ready to Work Dedicated Project</h1>
            <p class="fs-16 font-weight-normal">Whether you’re just starting out your new business or part of a massive multinational, we’ve got a fitting team for everybody.</p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/img-talent.png" class="img-team">
          </div>
        </b-row>
      </div>
    </div>
    <div id="" class="bg-img-big" :style="{backgroundImage: `url('${require('@/assets/images/bg-end.png')}')`}">
      <div class="bg-img">
        <div class="container">
          <b-row class="bg-img-big" align-v="center">
            <b-col md="5" class="m-auto text-white text-center">
              <h1 class="font-weight-bold mb-4">Let’s Talk and Work</h1>
              <p class="fs-16 mb-4">Got a question? Simply send us a message and we’re glad to help you out.</p>
              <b-button size="md" class="my-2 my-sm-0" type="submit" variant="success">Get in touch</b-button>
            </b-col>
        </b-row>
        </div>
      </div>
    </div>
    <div class="section bg-dark-ytc">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-left order-2 order-sm-1">
            <img src="@/assets/images/logo.png">
            <p>© Yureka Teknologi Cipta 2020. All rights reserved.</p>
          </div>
          <div class="col-md-8 col-xs-12 text-left pl-4 order-1 order-sm-2">
            <div class="row">
              <div class="col-6 col-md-3 ">
                <h6 class="font-weight-bold text-white">Email</h6>
                <p>admin@yureka.com</p>
              </div>
              <div class="col-6 col-md-3 ">
                <h6 class="font-weight-bold text-white">Phone</h6>
                <p>+62 8878995678</p>
              </div>
              <div class="col-md-4 col-xs-12">
                <h6 class="font-weight-bold text-white">Location</h6>
                <p>Perumahan Metro Harmony Sonosewu Kavling A5 Jln. IKIP PGRI (Jln. Wates KM.3) Sonosewu, Ngestiharjo, Bantul, DIY 55182</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homepage',
  data(){
    return {
      mainProps: { blank: true, blankColor: '#EEFBF4', width: 50, height: 50, class: 'm1' }
    }
  },
  components: {
    
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
body{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.fs-16{
  font-size: 16px;
}
.fs-48{
  font-size: 48px;
}
.section{
  padding-top: 50px;
  padding-bottom: 50px;
}
.color-dark-ytc{
  color:#2B2D42;
}
.color-muted{
  color: rgba(255, 255, 255, 0.7);
}
.bg-dark-ytc{
  background-color:#2B2D42;
}
.bg-dark-work{
  background: #404362;
}
.bg-img-big-full{
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
}
.bg-img-big{
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 80vh;
}
.bg-img{
  background: linear-gradient(180deg, rgba(43, 45, 66, 0.85) 0%, #2B2D42 100%);
  height: 80vh;
}
.navbar{
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 199;
  max-height: 90px;
}
.margin-navbar{
  margin-top: 90px;
}
.rounded-big{
  border-radius: 15px;
}
.bg-work{
  background: #4B4E73;
  border-radius: 10px;
  width: 70px;
  height: 70px;
  padding: 10px;
}
#nav-collapse li{
  padding: 10px 20px;
}
#team,
#works,
#service,
#up{
  text-align: left;
}
#disp-mobile{
  display: none;
}
.img-team{
  width: 400px;
}
@media screen and (max-width: 425px) {
  #disp-dekstop{
    display: none;
  }
  #disp-mobile{
    display: block;
  }
  .navbar{
    overflow: unset;
  }
  .navbar-collapse{
    position: absolute;
    width: 100%;
    text-align: center;
    background: rgb(43 45 66);
    top: 90%;
    z-index: 1999;
    height: 100vh;
  }
  .navbar-toggler{
    margin:10px;
  }
  .navbar-nav{
    padding-top: 50px;
  }
  .navbar-dark .navbar-nav .nav-link{
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
  #team,
  #works,
  #service,
  #up{
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center!important;
  }
  #works .bg-work,
  #works article{
    margin: auto;
  }
  .bg-img-big-full{
    height: auto;
  }
  .rt-90{
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  #service .media,
  #service .media-aside{
    display: block;
  }
  .img-team{
    width: 100%;
  }
}
</style>

