import { ConfigPlugin, withStringsXml } from '@expo/config-plugins';

type SetStringsPluginPreferences = {
  text: string;
};

const KEY = 'OurConfigKey';

const withSetStrings: ConfigPlugin<SetStringsPluginPreferences> = (config, { text }) => {
  if (!config.ios) {
    config.ios = {};
  }
  if (!config.ios?.infoPlist) {
    config.ios.infoPlist = {};
  }
  config.ios.infoPlist[KEY] = text;

  return withStringsXml(config, async (strings) => {
    strings.modResults.resources.string = [
      ...(strings.modResults.resources.string?.filter((r) => r.$.name !== KEY) || []),
      { $: { name: KEY }, _: text },
    ];
    return strings;
  });
};

export default withSetStrings;
