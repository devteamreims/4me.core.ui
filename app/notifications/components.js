import button from './button/';

/**
 * @ngdoc function
 * @name 4me.core.notifications.components
 * @description
 * # Notification components
 * Notification components
 */
var notificationComponents = angular.module('4me.core.notifications.components', [
  '4me.core.organs',
  '4me.core.notifications',
  '4me.core.notifications.button'
]);

notificationComponents.component('fmeNotificationList', {
  restrict: 'E',
  controller: fmeNotificationListController,
  controllerAs: 'fmeNotificationList',
  templateUrl: 'views/notifications/fmeNotificationList.tpl.html'
});


fmeNotificationListController.$inject = ['notifications', '$mdDialog'];
function fmeNotificationListController(notifications, $mdDialog) {
  var fmeNotificationList = this;
  fmeNotificationList.notifications = notifications.get();
  fmeNotificationList.unreadCount = notifications.getUnreadCount();

  fmeNotificationList.getIcon = function(n) {
    if(n.priority === 'critical') {
      return 'close-circle';
    } else if(n.priority === 'warning') {
      return 'alert';
    } else {
      return 'information';
    }
  };

  fmeNotificationList.getClass = function(n) {
    if(n.priority === 'critical') {
      return 'md-accent';
    } else if(n.priority === 'warning') {
      return 'md-warn';
    } else {
      return 'md-primary';
    }
  };

  fmeNotificationList.click = function(callback) {
    $mdDialog.hide();
    callback();
  };

  fmeNotificationList.markAllAsRead = function() {
    notifications.markAllAsRead();
  };

  fmeNotificationList.addCoreNotification = function() {
    notifications.add('core', 'warning');
  };
}
