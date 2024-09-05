<template>
  <div class="container-geral-footer">
    <div class="content-box-items-footer">
      <div class="box-content-links">
        <div class="name-logo">
          <img class="logo-image" src="../assets/img/logo-1.png" alt="" />
        </div>
        <div class="links-rapidos">
          <h2 class="nome-da-empresa">Links Rápidos</h2>
          <div class="links">
            <a class="link-link" href="/">Home</a>
            <a class="link-link" href="/about">Sobre Nós</a>
            <a class="link-link" href="/#servicos">Serviços</a>
            <a class="link-link" href="/especialidades">Especialidades</a>
            <a class="link-link" href="">Contato</a>
          </div>
        </div>
        <div class="links-rapidos">
          <h2 class="nome-da-empresa">Legal</h2>
          <div class="links">
            <a class="link-link" href="">Termos e Condições</a>
            <a class="link-link" href="">Política de Privacidade</a>
          </div>
        </div>
      </div>
      <div class="links-redes">
        <p class="nome-da-empresa">
          <span>Nome da Empresa</span> &copy; Todos os direitos reservados.
          Desenvolvipo por
          <a
            href="https://caiquecastro.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            >CaiqueCastro</a
          >
        </p>
        <div class="icones-redes">
          <a href="https://www.instagram.com/" target="_blank"
            ><ion-icon class="icons-icons" name="logo-instagram"></ion-icon
          ></a>
          <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"
            ><ion-icon class="icons-icons" name="logo-facebook"></ion-icon
          ></a>
        </div>
      </div>
    </div>
    <div class="box-content-mais-info">
      <div class="box-rua">
        <p>R. Marselhesa, 333 - Vila Mariana</p>
      </div>
      <div class="box-contato">
        <p>Contato: (11) 0000-0000 / (11) 0000-0000</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container-geral-footer {
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.content-box-items-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  background-color: #ffd9a0;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  padding-bottom: 20px;
}
.box-content-links {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 50px;
  margin-top: 100px;
}
.name-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-image {
  width: 200px;
  height: 200px;
}
.nome-da-empresa {
  color: #e6a23c;
}
.links-rapidos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.links {
  display: flex;
  gap: 10px;
  text-decoration: none;
}
.link-link {
  text-decoration: none;
  color: #e6a23c;
}
.link-link:hover {
  color: #ac6b0b;
}
.links-redes {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  padding: 0 10px;
}
.icones-redes {
  display: flex;
  gap: 10px;
}
.icons-icons {
  width: 30px;
  height: 30px;
  color: #e6a23c;
}
.icons-icons:hover {
  color: #ac6b0b;
}
.box-content-mais-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 10px;
}
p {
  color: #e6a23c;
}
@media screen and (max-width: 786px) {
  .box-content-links {
    flex-wrap: wrap;
  }
}
</style>
