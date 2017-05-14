<template lang="pug">
  .content
    .section.comp-intro
      strong [关于怡康]
      p.animated.fadeInUp
        | 江苏怡康控股集团有限公司创建于1988年，初期为苏沪市场流通领域的标杆企业，1993年开始投资房地产开发行业，2004年开始涉足金融投资领域。经多年发展，九洲集团已形成以地产开发、金融投资、资产经营为主的多元化发展格局。
        span.label.label-warning(@click="jump({path: '/intro'})") 更多...
    .section.industry-intro
      strong [怡康产业]
      .part.text-center(style="margin-top: 5%;")
        .row
          .col-sm-4
            .industry-card.card-yellow
              i.fa.fa-rocket
              h3 开发经营
          .col-sm-4
            .industry-card.card-green
              i.fa.fa-line-chart
              h3 资产经营
          .col-sm-4
            .industry-card.card-red
              i.fa.fa-ils
              h3 其他经营
    .section.team-intro
      strong [怡康团队]
      .part
        .row
          .col-sm-4
            img.img-responsive(src="../assets/teammodel.jpg")
            .grid-content(style="margin-bottom: 20px;")
              h4 人才理念及培训项目
              div.text-right
                span.label.label-warning 详情
          .col-sm-4
            img.img-responsive(src="../assets/teammodel.jpg")
            .grid-content(style="margin-bottom: 20px;")
              h4 培训与成长
              div.text-right
                span.label.label-warning 详情
          .col-sm-4
            img.img-responsive(src="../assets/teammodel.jpg")
            .grid-content(style="margin-bottom: 20px;")
              h4 人才招聘
              div.text-right
                span.label.label-warning 详情
    .section.culture-intro
      strong [怡康文化]
      .part
        .line 怡康愿景
        .line 怡康使命
        .line 核心价值观
        .line 价值取向
        .line 团队文化


</template>

<script>
  export default {

  }
</script>

<style scoped>
  .section {
    height:100vh;
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .comp-intro {
    background: url(../assets/bg1.jpg);
  }
  .industry-intro {
    background: url(../assets/bg2.jpg);
  }
  .team-intro {
    background: url(../assets/bg3.jpg);
  }
  .culture-intro {
    background: url(../assets/bg4.jpg);
  }
  .section strong {
    position: absolute;
    top: 20%;
    left: 20%;
    font-size: 30px;
    font-weight: 500;
    color:#efefef;

  }

  .section p,
  .section .part {
    position: absolute;
    top: 30%;
    left: 20%;
    font-size: 16px;
    width: 60%;
    color:#666;
  }
  .culture-intro .part {
    background: rgba(255,229,127,.8);
    padding: 20px 10%;
    border-radius: 6px;
    color:#666f;
  }

  .culture-intro .part .line {
    padding: 10px 0px;
  }

  .section .industry-card {
    border-radius: 6px;
    padding: 30px 0px;
    color: #fff;
    margin-bottom: 20px;
  }

  .section .industry-card:hover {
    cursor: pointer;
  }

  .card-yellow {
    background: rgba(255, 196, 44,.9);
  }

  .card-green {
    background: rgba(100,211,187, .9);
  }

  .card-red {
    background: rgba(255, 88 ,62, .9);
  }

  .section .industry-card i.fa {
    font-size: 50px;
  }

  .team-intro .part .grid-content {
    background: #fff;
    /*box-shadow: 0px 2px 0px #D4D5D9;*/
    padding: 10px 10px;
    position: relative;
  }



</style>
