
<template>
    <div class="hello">

      <p class="first_text">
        Об издании </p>

        <div class="verticalLine">
            
            </div>

        <p class="second_text">
            О ПРОЕКТЕ HOTNEWS <br>
 
            Доменное имя сайта: www.hotnews.plus<br>
            
            Проект не зарегистрирован в качестве периодического средства массовой информации <br>

            Адрес электронной почты редакции: adverthotnews@gmail.com<br>
            
            По вопросам сотрудничества или рекламных размещений просим вас обращаться по указанному адресу электронной почты.<br>
        </p>
        <v-footer color=#546E7A style="height: 70px;">
      <span class="white--text">&copy; 2023 HotNews</span>
    </v-footer>
     
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .first_text{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100px;}
.verticalLine {
    margin: 20px 0;
	padding: 0;
	height: 0;
	border: none;
	border-top: 2px dashed #302e2e;
}

.hello{
    width: 100%;
    
}

.second_text{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
}
  
  </style>

