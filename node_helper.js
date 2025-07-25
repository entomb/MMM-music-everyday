/* Magic Mirror
 * Node Helper: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  // Override socketNotificationReceived method.
  /* socketNotificationReceived(notification, payload)
   * This method is called when a socket notification arrives.
   *
   * argument notification string - The identifier of the noitication.
   * argument payload mixed - The payload of the notification.
   */
  // socketNotificationReceived: function(notification, payload) {
  // 	if (notification === "MUSICEVERYDAY-NOTIFICATION_TEST") {
  // 		console.log("Working notification system. Notification:", notification, "payload: ", payload);
  // 		// Send notification
  // 		this.sendNotificationTest(this.anotherFunction()); //Is possible send objects :)
  // 	}
  // },
  // Example function send notification test
  // sendNotificationTest: function(payload) {
  // 	this.sendSocketNotification("MUSICEVERYDAY-NOTIFICATION_TEST", payload);
  // },
})
