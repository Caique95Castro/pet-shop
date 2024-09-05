<template>
  <div class="container-geral-about">
    <div class="container-content-inicio-about">
      <div class="content-text-inicio-about">
        <div class="box-text">
          <h1 class="tituli">
            Pioneiro no atendimento clínico e cirúrgico de animais, o centro de
            saúde animal <span class="span-color">NOME DA EMPRESA</span> foi
            fundado em junho de 2005, em sede própria, na Vila Mariana.
          </h1>
        </div>
        <div class="box-vazio">
          <img class="image-pets-9" src="../assets/img/pts-9.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container-content-meio-about">
      <div class="container-meio-about">
        <div class="box-titulo">
          <h1 class="titulo-1">
            Nosso principal objetivo é buscar a melhora na qualidade de vida dos
            animais
          </h1>
        </div>
        <div class="box-texto">
          <p class="text-geral-exames">
            Sempre com ética e profissionalismo com o compromisso de oferecer
            cada vez mais satisfação aos proprietários. Contamos com uma equipe
            altamente capacitada e treinada periodicamente, além de veterinários
            especializados em clínica e cirurgia de animais silvestres.
            Realizamos também exames de raios-x e ultrassom, exames
            laboratoriais e internação 24 horas para cães, gatos e animais
            silvestres.
          </p>
        </div>
      </div>
    </div>
    <marquee
      behavior="alternate"
      direction="left"
      style="background-color: #ffd9a0; color: white"
      >NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA
      SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA
      EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA
      - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME DA SUA EMPRESA - NOME
      DA SUA EMPRESA
    </marquee>
    <div class="container-geral-fim-about">
      <div class="content-box-fim-about">
        <div class="box-text-1">
          <ion-icon class="icons-icons" name="trending-up-outline"></ion-icon>
          <h2 class="titulo-final">Missão</h2>
          <p class="texto-final">
            Promover a saúde e bem estar dos animais de forma preventiva e
            curativa, melhorando a qualidade de vida e proporcionando momentos
            felizes entre animal e proprietário, buscando tecnologia e novos
            recursos, sempre de forma sustentável.
          </p>
        </div>
        <div class="box-text-2">
          <ion-icon class="icons-icons" name="search-circle-outline"></ion-icon>
          <h2 class="titulo-final">Visão</h2>
          <p class="texto-final">
            No atendimento do Centro de Saúde Animal Zoovet, é possível realizar
            diversos exames, com segurança e agilidade , armazenamento e
            transporte, pela eficiência no processamento das amostras.
          </p>
        </div>
        <div class="box-text-3">
          <ion-icon class="icons-icons" name="ribbon-outline"></ion-icon>
          <h2 class="titulo-final">Valores</h2>
          <p class="texto-final">
            Ética, excelência, respeito aos colaboradores, clientes e animais,
            profissionalismo, transparência responsabilidade, amor incondicional
            aos animais.
          </p>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>
<script>
import FooterPage from "./FooterPage.vue";

export default {
  components: {
    FooterPage,
  },
};
</script>
<style src="./css/AboutPage.css" scoped></style>
