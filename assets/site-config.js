// 把站点名称、主导航、首页卡片和页脚文案集中在这里，方便后续关卡只改配置而不逐页改 HTML。
window.JJS_SITE_CONFIG = {
  siteName: 'Player Guide',
  footerDisclaimer: 'Independent, source-linked local coursework build. Not affiliated with Roblox, Tze\'s Shenanigans, Discord, or Fandom.',
  navigation: [
    { href: 'index.html', label: 'Home' },
    { href: 'guide.html', label: 'Guide' },
    { href: 'characters.html', label: 'Characters' },
    { href: 'updates.html', label: 'Updates' },
    { href: 'community.html', label: 'Community' }
  ],
  homeCards: [
    {
      href: 'controls.html',
      status: 'First-party source',
      title: 'Learn the core keys',
      text: 'Use the controls stated on the Roblox game page before attempting advanced guides.',
      action: 'Read controls →'
    },
    {
      href: 'characters.html',
      status: 'Community reference',
      title: 'Find a character route',
      text: 'Use the community Wiki as a map, then re-check mechanics after game updates.',
      action: 'Browse characters →'
    },
    {
      href: 'updates.html',
      status: 'Version sensitive',
      title: 'Check what changed',
      text: 'Updates can invalidate guides. Treat version information as a checkpoint, not a permanent fact.',
      action: 'Track updates →'
    }
  ]
};
