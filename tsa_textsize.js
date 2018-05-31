module.exports = function (RED) {
  "use strict";

  function main(config) {
    RED.nodes.createNode(this, config);
    this.config = config;
    var node = this;
    this.on("input", function(msg) {
      var value = 3;
      if(typeof(node.config.val) != "undefined"){value = node.config.val};
      msg.textsize = value;
      node.send(msg);
    });
  }
  RED.nodes.registerType("textsize", main);
}
