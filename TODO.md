* ~~Create stub organ to provide an example~~
* ~~Test organ hooks using this stub organ~~
* Dashboard and dashboard widgets (organs)
* ~~Errors handling (global and per organ)~~
* ~~Notifications handling (global and per organ)~~
* ~~Organ routing~~
* ~~Status (global and per organ)~~
  * ~~3 states : normal, warning, critical~~
  * ~~Global status,~~ what to do in case of failure
  * ~~Organ status~~
  * ~~We need to handle multiple escalation reasons. For instance, some part of the app could set the 'warn' status. Some other part of the app could set it to 'critical'. When the 'critical' part is resolved, we need to keep track of the 'warn' part and maitain the 'warn' status~~
* ~~Websocket stuff~~
  * ~~Unit test : see sockMock object here : https://github.com/hackify/hackify-server/blob/master/test/controllers.test.js~~
  * Use a cookie to identify what cwpId we hold
* Polish stuff :
 * ~~Status page~~
 * Dark theme
  * Issues : in md-sidenav and md-dialog : codepens & bug reports to angular.material
 * Navigation selected element
* LICENSE (GPLv3 ?) : http://www.gnu.org/licenses/why-affero-gpl.fr.html
* Refactor stuff into a real bootstrap service, this is fugly now
