/* global Module */

/* Magic Mirror
 * Module: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

Module.register("MMM-music-everyday", {
  defaults: {
    updateInterval: 30000,
    retryDelay: 5000,
    dayOffset: 0,
  },

  requiresVersion: "2.1.0", // Required version of MagicMirror

  start: function () {
    let dataContent = null
    //let dataNotification = null;

    //Flag for check if module is loaded
    //this.loaded = false;
    this.updateDom(this.config.animationSpeed)
    //Schedule update timer.
    this.getData()
    setInterval(() => {
      this.updateDom()
    }, this.config.updateInterval)
  },

  /*
   * getData
   * function example return data and show it in the module wrapper
   * get a URL request
   *
   */

  getData: function () {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let day = moment().dayOfYear() + this.config.dayOffset
    let todayLetter = abc[day % abc.length]
    //setTimeout(()=>{
    this.dataContent = {
      after: abc[(day + 2) % abc.length],
      tomorrow: abc[(day + 1) % abc.length],
      today: todayLetter,
      yesterday: abc[(day - 1) % abc.length],
      before: abc[(day - 2) % abc.length],
      artists: __artists[todayLetter],
    }

    // console.log(this.dataContent, abc.length, day);
    this.updateDom(this.config.animationSpeed)

    this.scheduleUpdate(-1)
    //},2999);
  },

  /* scheduleUpdate()
   * Schedule next update.
   *
   * argument delay number - Milliseconds before next update.
   *  If empty, this.config.updateInterval is used.
   */
  scheduleUpdate: function (delay) {
    let nextLoad = this.config.updateInterval
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay
    }
    setTimeout(() => {
      this.getData()
    }, nextLoad)
  },

  getDom: function () {
    let wrapper = document.createElement("div")
    wrapper.className = "wrapper"

    let title = document.createElement("header")
    title.innerHTML = "Music Suggestions"

    wrapper.appendChild(title)

    if (this.dataContent) {
      let content = document.createElement("div")

      Object.keys(this.dataContent).forEach((day) => {
        if (day === "artists") return
        let Letter = document.createElement("div")
        Letter.className = day
        Letter.innerHTML = this.dataContent[day]
        content.appendChild(Letter)
      })

      wrapper.appendChild(content)

      let SuggestionsTitle = document.createElement("div")
      SuggestionsTitle.className = "suggestions-title"
      //SuggestionsTitle.innerHTML = '';

      let SuggestionsContent = document.createElement("div")
      SuggestionsContent.className = "suggestions-content small dimmed"

      if (this.dataContent.artists.length > 10) {
        SuggestionsContent.innerHTML = this.dataContent.artists
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 10)
          .join("</br>")
      } else {
        SuggestionsContent.innerHTML = this.dataContent.artists.join("</br>")
      }
      wrapper.appendChild(SuggestionsTitle)
      wrapper.appendChild(SuggestionsContent)
    }

    return wrapper
  },

  getScripts: function () {
    return ["artists.js"]
  },

  getStyles: function () {
    return ["MMM-music-everyday.css"]
  },

  // Load translations files
  getTranslations: function () {
    console.log("getTranslations")
    return {
      en: "translations/en.json",
    }
  },

  // processData: function(data) {
  //  console.log('processData')
  // 	let self = this;
  // 	this.dataRequest = data;
  // 	if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
  // 	this.loaded = true;
  // },

  // socketNotificationReceived from helper
  socketNotificationReceived: function (notification, payload) {
    // console.log('socketNotificationReceived')
    // if(notification === "MUSICEVERYDAY-NOTIFICATION_TEST") {
    // 	// set dataNotification
    // 	this.dataNotification = payload;
    // 	this.updateDom();
    // }
  },
})
