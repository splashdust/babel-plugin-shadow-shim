import path from "path";
import { pluginTester } from "babel-plugin-tester";
import plugin from "./index";

pluginTester({
  plugin,
  pluginName: 'babel-plugin-shadow-shim',
  pluginOptions: {
    shadowRootSelector: "#shadow",
    appIdentifier: "myUniqueId",
  },
  fixtures: path.join(__dirname, "../tests/fixtures"),
});
