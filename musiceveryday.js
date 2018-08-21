/* global Module */

/* Magic Mirror
 * Module: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

Module.register("musiceveryday", {
  defaults: {
    updateInterval: 60000,
    retryDelay: 5000,
    dayOffset: 0
  },

  requiresVersion: "2.1.0", // Required version of MagicMirror

  start: function() {
    let dataContent = null;
    //let dataNotification = null;

    //Flag for check if module is loaded
    //this.loaded = false;
    this.updateDom(this.config.animationSpeed);
    //Schedule update timer.
    this.getData();
    setInterval(() => {
      this.updateDom();
    }, this.config.updateInterval);
  },

  /*
   * getData
   * function example return data and show it in the module wrapper
   * get a URL request
   *
   */

  getData: function() {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let day = moment().dayOfYear() + this.config.dayOffset;

    //setTimeout(()=>{
    this.dataContent = {
      after: abc[(day + 2) % abc.length],
      tomorrow: abc[(day + 1) % abc.length],
      today: abc[day % abc.length],
      yesterday: abc[(day - 1) % abc.length],
      before: abc[(day - 2) % abc.length],
    };

    console.log(this.dataContent, abc.length, day);
    this.updateDom(this.config.animationSpeed);

    this.scheduleUpdate(-1)
    //},2999);


    // let self = this;
    //
    // let urlApi = "https://jsonplaceholder.typicode.com/posts/1";
    // let retry = true;
    //
    // let dataRequest = new XMLHttpRequest();
    // dataRequest.open("GET", urlApi, true);
    // dataRequest.onreadystatechange = function() {
    // 	console.log(this.readyState);
    // 	if (this.readyState === 4) {
    // 		console.log(this.status);
    // 		if (this.status === 200) {
    // 			self.processData(JSON.parse(this.response));
    // 		} else if (this.status === 401) {
    // 			self.updateDom(self.config.animationSpeed);
    // 			Log.error(self.name, this.status);
    // 			retry = false;
    // 		} else {
    // 			Log.error(self.name, "Could not load data.");
    // 		}
    // 		if (retry) {
    // 			self.scheduleUpdate((self.loaded) ? -1 : self.config.retryDelay);
    // 		}
    // 	}
    // };
    // dataRequest.send();
  },


  /* scheduleUpdate()
   * Schedule next update.
   *
   * argument delay number - Milliseconds before next update.
   *  If empty, this.config.updateInterval is used.
   */
  scheduleUpdate: function(delay) {
    let nextLoad = this.config.updateInterval;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }
    setTimeout(() => {
      this.getData();
    }, nextLoad);
  },

  getDom: function() {
    let wrapper = document.createElement("div");
    wrapper.className = 'wrapper';

    let title = document.createElement("header");
    title.innerHTML = 'Music Suggestions';

    wrapper.appendChild(title);

    if (this.dataContent) {
      let content = document.createElement("div");

      Object.keys(this.dataContent).forEach(day => {
        let Letter = document.createElement("div");
        Letter.className = day;
        Letter.innerHTML = this.dataContent[day];
        content.appendChild(Letter)
      });

      wrapper.appendChild(content);

      let SuggestionsTitle = document.createElement("div");
      SuggestionsTitle.className = 'suggestions-title';
      //SuggestionsTitle.innerHTML = '';

      let SuggestionsContent = document.createElement("div");
      SuggestionsContent.className = 'suggestions-content small dimmed';
      SuggestionsContent.innerHTML = '<p>... load suggestions here ...</p>';

      wrapper.appendChild(SuggestionsTitle);
      wrapper.appendChild(SuggestionsContent);
    }

    return wrapper;
  },

  getScripts: function() {
    return [];
  },

  getStyles: function() {
    return [
      "musiceveryday.css",
    ];
  },

  // Load translations files
  getTranslations: function() {
    console.log('getTranslations')
    return {
      en: "translations/en.json"
    };
  },

  // processData: function(data) {
  //  console.log('processData')
  // 	let self = this;
  // 	this.dataRequest = data;
  // 	if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
  // 	this.loaded = true;
  // },

  // socketNotificationReceived from helper
  socketNotificationReceived: function(notification, payload) {
    // console.log('socketNotificationReceived')
    // if(notification === "MUSICEVERYDAY-NOTIFICATION_TEST") {
    // 	// set dataNotification
    // 	this.dataNotification = payload;
    // 	this.updateDom();
    // }
  },
});
