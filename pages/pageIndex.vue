<template>
  <div>
    <div>
      <!-- css -->
      <div class="flexBox">
        <div class="title">
          CSS
        </div>
        <div class="step">
          <p>install sass</p>
          <div class="content">
            <span> npm install -D sass </span>
          </div>
        </div>
        <div class="step">
          <p>sass @import diff with @use</p>
          <div class="content">
            <span> https://css-tricks.com/introducing-sass-modules/ </span>
          </div>
        </div>
      </div>
      <!-- command line -->
      <div class="flexBox">
        <div class="title">
          command line
        </div>
        <div class="step">
          <p>npm run dev -- -o</p>
          <div class="content">
            <span> double dash "--" explain </span>
            <span>
              參考
              https://stackoverflow.com/questions/43046885/what-does-do-when-running-an-npm-command
            </span>
          </div>
        </div>
      </div>
      <!-- eslint  -->
      <div class="flexBox">
        <div class="title">
          eslint
        </div>
        <div class="step">
          <p>npm init @eslint/config</p>
          <div class="content">
            <span>
              eslint提供的建立config的文件的方式
              此專案設定
            </span>
            <span>
              <img src="@/assets/img/eslintConfig.png" alt="">
            </span>
            <span>
              參考
              https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf
            </span>
          </div>
        </div>
        <div class="step">
          <p>eslint 相關配置</p>
          <div class="content">
            <span>
              https://github.com/nuxt/framework/discussions/2815
            </span>
          </div>
        </div>
      </div>
      <!-- vscode -->
      <div class="flexBox">
        <div class="title">
          vscode
        </div>
        <div class="step">
          <p>vscode</p>
          <div class="content">
            <span> 搭配eslint </span>
            <span> setting.json設定 </span>
            <span>
              { "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
              "eslint.validate": [ "javascript" ],
              "compile-hero.disable-compile-files-on-did-save-code": true }
            </span>
            <span>在保存時自動修正code符合eslint</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.flexBox
  padding-left: 20px
  display: flex
  flex-direction: column
  .title
    color: #00a17e
    font-size: 25px
  .step
    margin-bottom: 15px
    p
      margin: 0px
      font-weight: bold
    .content
      padding-left: 15px
      margin: 0px
      img
        width: 300px
        height: 300px
      span
        display: block
</style>
