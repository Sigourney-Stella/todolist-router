<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="add">
    <!-- End of Page Navbar -->
    <header id="home" class="header">
      <div class="overlay"></div>
      <div class="header-content container">
        <h1 class="header-title">
          <span class="up">HI!</span><br />
          <span class="down">I am Hoa</span>
        </h1>
        <p class="header-subtitle">FRONTEND WEB DESIGNER</p>
      </div>
    </header>
    <section class="section pt-0" id="about">
      <div class="container text-center">
        <div class="about">
          <div class="about-img-holder">
            <img src="./avatarmeo.jpg" class="about-img" alt="" />
          </div>
          <div class="about-caption">
            <h3>Tên: {{ userName }}</h3>
            <h3>Ngày sinh: 02/01/2002</h3>
            <h3>Quê quán: Thanh Hóa</h3>
            <h3>Số điện thoại: 11111223</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      // Đọc userName từ store
      return this.$store.state.userName;
    },
  },
};
</script>

<style scoped>
.add {
  background: white;
}
.header {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-image: url(./header.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

h1 {
  font-family: "Baloo Paaji", cursive;
  color: #212529;
  font-weight: 800;
  font-size: 4rem;
}

.header .header-content .header-subtitle {
  letter-spacing: calc(1px + (7 - 1) * ((100vw - 300px) / (1300 - 300)));
  opacity: 0.8;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #111;
}

.about {
  display: flex;
  text-align: left;
}

.about-img-holder {
  width: 27%;
}

.about-caption {
  width: 50%;
}

section#about {
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 18rem;
}

h3 {
  font-family: cursive;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-top: 0.6rem;
}
</style>
