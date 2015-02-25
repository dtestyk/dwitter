module('peerjs_ready_usage', ['peerjs_ready', 'log'], function(imports){
  var me = imports[0]
  var log = imports[1]
  log(me)
  log(me.id)
})