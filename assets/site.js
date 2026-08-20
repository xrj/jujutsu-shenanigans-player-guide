// 文章正文保留在静态 HTML 中，便于本地查看与搜索引擎读取；全局信息则从配置文件读取。
(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const navigation = document.querySelector('[data-nav]');
  const applyConfig = (config) => {
    // 配置存在时，用同一份导航、站点名、首页卡片和页脚文案渲染，避免跨页面手工修改不一致。
    document.querySelectorAll('.brand span:last-child').forEach((element) => {
      element.textContent = config.siteName;
    });

    document.querySelectorAll('.site-footer .footer-inner > p:first-child').forEach((element) => {
      element.textContent = config.footerDisclaimer;
    });

    document.querySelectorAll('.site-footer .footer-inner > p:last-child').forEach((element) => {
      element.replaceChildren('© ', document.createTextNode(String(new Date().getFullYear())), ' ', config.siteName);
    });

    document.querySelectorAll('[data-nav]').forEach((nav) => {
      const currentFile = window.location.pathname.split('/').pop() || 'index.html';
      nav.replaceChildren();

      config.navigation.forEach((item) => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        if (item.href === currentFile) link.setAttribute('aria-current', 'page');
        nav.append(link);
      });
    });

    document.querySelectorAll('[data-home-cards]').forEach((container) => {
      container.replaceChildren();

      config.homeCards.forEach((card) => {
        const link = document.createElement('a');
        const status = document.createElement('span');
        const title = document.createElement('h3');
        const text = document.createElement('p');
        const action = document.createElement('span');

        link.className = 'guide-card';
        link.href = card.href;
        status.className = 'status-tag';
        status.textContent = card.status;
        title.textContent = card.title;
        text.textContent = card.text;
        action.className = 'arrow';
        action.textContent = card.action;
        link.append(status, title, text, action);
        container.append(link);
      });
    });
  };

  // 所有页面都只引入 site.js，因此由它再加载配置文件，避免逐页重复维护脚本标签。
  const config = window.JJS_SITE_CONFIG;
  if (config) {
    applyConfig(config);
  } else {
    const configScript = document.createElement('script');
    configScript.src = 'assets/site-config.js';
    configScript.addEventListener('load', () => applyConfig(window.JJS_SITE_CONFIG));
    document.head.append(configScript);
  }

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
