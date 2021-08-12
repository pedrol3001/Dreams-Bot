import Discord, { BitFieldResolvable, PermissionString } from 'discord.js';

export type ICommandGroups = 'guildOnly' | 'global' | 'dmOnly';

export default interface ICommand {
  name: string;
  aliases: Array<string>;
  args?: boolean;
  cooldown?: number;
  description: string;
  usage?: string;
  roles?: Array<string>;
  group: ICommandGroups;
  permissions?: Array<BitFieldResolvable<PermissionString>>;

  plugin_id?: string;

  execute(msg: Discord.Message): Promise<void>;
}
