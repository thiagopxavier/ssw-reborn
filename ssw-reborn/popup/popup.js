document.addEventListener('DOMContentLoaded', () => {
  const manifest = chrome.runtime.getManifest();

  document.querySelector('#version').textContent = `Versão: ${manifest.version}`;

  document.querySelector('#btn-config').addEventListener('click', () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });
});