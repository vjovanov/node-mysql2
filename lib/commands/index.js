[require("./client_handshake.js"), require("./server_handshake.js"), require("./query.js"), require("./prepare.js"), require("./close_statement.js"), require("./execute.js"), require("./ping.js"), require("./register_slave.js"), require("./binlog_dump.js"), require("./change_user.js"),
require("./quit.js")]
  .forEach(function(ctor) {
    module.exports[ctor.name] = ctor;
  });
