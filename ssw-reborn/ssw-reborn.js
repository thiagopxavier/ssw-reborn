function loginPage() {
  const body = document.body.style;
  if (body) {
    body.display = "flex";
    body.justifyContent = "center";
    body.alignItems = "center";
    body.background = "none";

    setTimeout(() => {
      body.backgroundImage = "none";
      body.background = "none";
    }, 100);
  }

  const formLogin = document.querySelector('#frm');
  if (formLogin) {
    formLogin.style.background = "#fffffff2";
    formLogin.style.padding = "30px";
    formLogin.style.borderRadius = "12px";
    formLogin.style.boxShadow = "0 8px 25px #0000004d";
    formLogin.style.width = "250px";
    formLogin.style.display = "flex";
    formLogin.style.flexDirection = "column";
  }

  document.querySelectorAll('#frm > :is(div, input, a, label)').forEach(item => {
    item.style.position = "static";
    item.style.display = "flex";
    item.style.width = "50%";
    item.style.margin = "0";
  });

  document.querySelectorAll('#frm input').forEach(input => {
    input.style.width = "100%";
    input.style.padding = "10px 12px";
    input.style.border = "1px solid #c9c9c9ff";
    input.style.borderRadius = "6px";
    input.style.color = "#5560ffff";
    input.style.fontSize = "14px";
  });


  document.querySelectorAll('#frm input[type="checkbox"]').forEach(checkboxInput => {
    checkboxInput.style.width = "20px";
    checkboxInput.style.marginTop = "5px";
    checkboxInput.parentElement.style.gap = "6px";
  });

  document.querySelectorAll('#frm div.texto').forEach(textDiv => {
    textDiv.style.fontSize = "14px";
    textDiv.style.fontWeight = "600";
    textDiv.style.marginTop = "4px";
    textDiv.style.textAlign = "left";
  });


  const oldStyle = document.getElementById("loginStyle");
  if (oldStyle) {
    oldStyle.remove();
  }

  const loginButton = document.querySelectorAll("a.imglnk");

  if (loginButton) {
    loginButton.forEach(button => {
      button.style.display = "block";
      button.style.padding = "12px";
      button.style.border = "none";
      button.style.color = "#ffffff"
      button.style.margin = "10px auto 0 0 ";
      button.style.textAlign = "center";
      button.style.borderRadius = "6px";
      button.style.fontWeight = "bold";
      button.style.fontSize = "16px";
      button.style.textDecoration = "none";
      button.style.width = "90%";
      button.style.transition = "background 0.3s";

      if (button.textContent.includes("►")) {
        button.style.background = "#6973ffff";

        button.onmouseover = () => {
          button.style.background = "#2d3bfcff";
          button.style.boxShadow = "0 8px 10px #0000001a";
        };
        button.onmouseout = () => {
          button.style.background = "#6973ffff";
          button.style.boxShadow = "none";
        };
      }

      else if (button.textContent.includes("×")) {
        button.style.background = "#ff5555ff";
        button.onmouseover = () => {
          button.style.background = "#ff0000ff";
          button.style.boxShadow = "0 8px 10px #0000001a";
        };
        button.onmouseout = () => {
          button.style.background = "#ff5555ff";
          button.style.boxShadow = "none";
        };
      }


    });
  }

  document.querySelectorAll("a.baselnk").forEach(link => {
    link.style.top = "";
    link.style.left = "";
    link.style.right = "";
    link.style.fontSize = "13px";
    link.style.color = "#5560ffff";
    link.style.border = "none";
    link.style.textDecoration = "none";
    if (link.parentElement) {
      link.parentElement.style.display = "flex";
      link.parentElement.style.marginTop = "20px";
    }
  });

  const titleHeader = document.querySelector("#tituloprog > span");
  if (titleHeader) {
    titleHeader.style.display = "block";
    titleHeader.style.fontSize = "22px";
  }

  document.getElementById("mainscript").style.display = "none";

  document.querySelectorAll("img[style*='height:1px']").forEach(img => {
    img.style.display = "none";
  });

  if (formLogin) {
    formLogin.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          loginPage();
          headerReset();
        }, 100);
      });
    });
  }

  const style = document.createElement('style');
  style.id = "loginStyle"
  style.textContent =
    `
    .imglnk:active, .imglnk:hover, .imglnk:focus  {
      color: #ff7c7cff !important;
    }

  `;
  document.head.appendChild(style);
};

function mainMenu() {

  const enterpriseTagInput = document.querySelector("input:not([type='checkbox'])#\\32");
  if (enterpriseTagInput) {
    enterpriseTagInput.addEventListener("input", (_event) => {
      headerReset();
    });
    enterpriseTagInput.style.width = "45px";
    enterpriseTagInput.style.left = "87px";
  }

  document.getElementById("1").addEventListener("click", () => {
    const oldTag = enterpriseTagInput.value
    const startTime = Date.now();
    const maxTime = 10000;
    const interval = setInterval(() => {
      if (enterpriseTagInput.value !== oldTag) {
        enterpriseTagInput.dispatchEvent(new Event("input", { bubbles: true }));
        clearInterval(interval);
      } else if (Date.now() - startTime >= maxTime) {
        clearInterval(interval);
      }
    }, 100);
  });


  document.querySelectorAll('#\\32, #\\33, #\\34').forEach(input => {
    input.style.fontSize = "16px";
    input.style.height = "20px";
  });


  document.querySelectorAll('#\\31 , #frm > div:nth-child(5),  #\\35   ').forEach(text => {
    text.style.fontSize = "16px";
    text.style.width = "auto";
    text.style.textAlign = "center";


  });

  document.querySelector("#frm > div:nth-child(3)").style.left = "75px";

  const optionLabel = document.querySelector("#frm > div:nth-child(5)");
  optionLabel && (optionLabel.style.left = "150px");

  const optionSearchBar = document.querySelector("input:not([type='checkbox'])#\\33");
  if (optionSearchBar) {
    optionSearchBar.style.width = "45px";
    optionSearchBar.style.left = "195px";
  }

  const searchBar = document.querySelector("input:not([type='checkbox'])#\\34");
  if (searchBar) {
    document.getElementById("4").style.left = "250px";
    document.getElementById("5").style.left = "620px";
  }


  const NoticeTAPLabel = document.querySelector('#frm > div:nth-child(10)');
  if (NoticeTAPLabel) {
    NoticeTAPLabel.style.left = "";
    NoticeTAPLabel.style.right = "2vw";
    NoticeTAPLabel.style.fontSize = "14px";
  }

  const NoticeSSWLabel = document.querySelector('#frm > div:nth-child(12)');
  if (NoticeSSWLabel) {
    NoticeSSWLabel.style.left = "";
    NoticeSSWLabel.style.right = "2vw";
    NoticeSSWLabel.style.fontSize = "14px";

  }

  const avisoInicialMenu = document.querySelector("div#aviso_emp.avisoini");
  if (avisoInicialMenu) {
    avisoInicialMenu.style.left = "";
    avisoInicialMenu.style.right = "2vw";
  }

  const avisoInicialPopout = document.querySelector("div#pnlatraso.avisoini")
  if (avisoInicialPopout) {
    avisoInicialPopout.style.left = "";
    avisoInicialPopout.style.right = "5vw";
  }

  const avisoIframe = document.querySelector("div#aviso_ssw.aviso");
  if (avisoIframe) {
    avisoIframe.style.left = "";
    avisoIframe.style.right = "2vw";
  }

  document.querySelectorAll('#frm > div:nth-child(15), #frm > div:nth-child(16)').forEach(divFooter => {
    divFooter.style.width = "90vw";
  });


  const barImage = document.querySelector('#frm > img');
  barImage && (barImage.style.display = "none");

  const divSuport = document.querySelector("div#divss.datar")
  if (divSuport) {
    divSuport.style.left = "";
    divSuport.style.right = "2vw";
  }

  const errorPanel = document.querySelector('#errorpanel');
  if (errorPanel) {
    errorPanel.style.height = '90vh';
    errorPanel.style.width = '90vw';
  }

  const myOptionsTable = document.querySelector('#frm > div:nth-child(17) > a:nth-child(1)');

  if (myOptionsTable) myOptionsTable.style.background = '#008800'


  const oldStyle = document.getElementById("mainMenuStyle");
  if (oldStyle) {
    oldStyle.remove();
  }

  const style = document.createElement('style');
  style.id = "mainMenuStyle"
  style.textContent =
    `

  p.texto {
    width: 200px;
  }

  .titulo {
  font-size: 20px !important;
  }

  .motr:hover,.motr:focus, .motr:active {
  background: #beffc3;
  color: #008800;
}

  .motr {
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
    background: #008800;
    color: #ffffffff;
  }

  tr.motr td {
    color: inherit;
    padding: 0px 8px;
  }

  .motd {
    text-overflow: ellipsis;
    font-size: 12 !important;
    white-space: nowrap;
    overflow: hidden;
    border-top: 1px solid #c9c9c9ff;
  }
  td.motd:nth-child(1) {
    width: 300px;
    border-radius: 0 0 0 5px;
  }
  td.motd:nth-child(2) {
    text-align: end;
    padding: 0;
  }
  td.motd:nth-child(3) {
    width: 8px;
    text-align: end;
  }
  td.motd:nth-child(3):hover,td.motd:nth-child(3):focus,td.motd:nth-child(3):active {
    color: red;
  }

  `;
  document.head.appendChild(style);

}


function insertStyles() {
  const localNav = document.body

  if (localNav) {
    localNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          autoReset();
        }, 100);
      });
    });
  }

  const Buttons = document.querySelectorAll("a.imglnk");

  Buttons.forEach(button => {

    button.style.border = "none";
    button.style.textAlign = "center";
    button.style.fontWeight = "bold";
    button.style.textDecoration = "none";
    button.style.transition = "background 0.3s";

    if (button.textContent.includes("►")) {
      button.style.color = '#5560ffff'

    }

    else if (button.textContent.includes("×")) {
      button.style.color = "#ff5555ff";
    }

  });

  const freteLabel = document.querySelector("#frm > div:nth-child(33)")
  if (freteLabel && freteLabel.textContent.includes("Frete")) {
    freteLabel.style.color = "#ff2626ff";
    freteLabel.style.fontWeight = "bold";
  }

  const typeMerchLabel = document.querySelector("#lnk_mercadoria")
  if (typeMerchLabel && typeMerchLabel.textContent.includes("Tipo")) {
    typeMerchLabel.style.color = "#ff2626ff";
    typeMerchLabel.style.fontWeight = "bold";
  }

  const weightLabel = document.querySelector("#frm > div:nth-child(141)")
  if (weightLabel && weightLabel.textContent.includes("Peso")) {
    weightLabel.style.color = "#ff2626ff";
    weightLabel.style.fontWeight = "bold";
  }

  const volumesLabel = document.querySelector("#frm > div:nth-child(137)")
  if (volumesLabel && volumesLabel.textContent.includes("volumes")) {
    volumesLabel.style.color = "#ff2626ff";
    volumesLabel.style.fontWeight = "bold";
  }

  const paresLabel = document.querySelector("#lnk_pares")
  if (paresLabel && paresLabel.textContent.includes("pares")) {
    paresLabel.style.color = "#ff2626ff";
    paresLabel.style.fontWeight = "bold";
  }

  const priceLabel = document.querySelector("#frm > div:nth-child(145)")
  if (priceLabel && priceLabel.textContent.includes("Valor")) {
    priceLabel.style.color = "#ff2626ff";
    priceLabel.style.fontWeight = "bold";
  }

  const oldStyle = document.getElementById("defaultStyle");
  if (oldStyle) {
    oldStyle.remove();
  }

  const style = document.createElement('style');
  style.id = "defaultStyle"
  style.textContent =
    `

  * {
    font-size: 11px !important;
  }

  b {
    font-size: 12px !important;
  }


  span.titulo{
    font-size:18px;
  }

  .imglnk:active, .imglnk:hover, .imglnk:focus  {
    color: #ff7c7cff !important;
  }

  `;
  document.head.appendChild(style);
}

function verifySystem(system, header) {
  const TSA_COLOR = '#C4170C';
  const TSA_COLOR_ACTIVE = '#ffbebeff';
  const MID_COLOR = '#5560ffff';
  const MID_COLOR_ACTIVE = '#bec2ffff';
  const DEFAULT_COLOR = '#333333';
  const DEFAULT_COLOR_ACTIVE = '#ddddddff'

  let systemColor;
  let systemColorActive;

  systemUpperCase = system.toUpperCase();

  if (systemUpperCase.includes('TSA')) {
    systemColor = TSA_COLOR;
    systemColorActive = TSA_COLOR_ACTIVE;
    header.style.background = TSA_COLOR;
  } else if (systemUpperCase.includes('MID')) {
    systemColor = MID_COLOR;
    systemColorActive = MID_COLOR_ACTIVE;
    header.style.background = MID_COLOR;
  }
  else {
    header.style.background = DEFAULT_COLOR;
    systemColor = DEFAULT_COLOR;
    systemColorActive = DEFAULT_COLOR_ACTIVE;
  }

  const oldStyle = document.getElementById("systemStyle");
  if (oldStyle) {
    oldStyle.remove();
  }

  const style = document.createElement('style');
  style.id = "systemStyle";
  style.textContent =
    `

  .mainMenuLevel1, .mainMenuLevel2, .mainMenuLevel3 {
    font-size: 13px !important;
    background: ${systemColor};
    border-radius: 0 0 0 8px;
    font-weight: bold;
    height: 20px;
  }
    
  a.mainMenuLevel1:active, a.mainMenuLevel1:hover, a.mainMenuLevel1:focus,
  a.mainMenuLevel2:active, a.mainMenuLevel2:hover, a.mainMenuLevel2:focus,
  a.mainMenuLevel3:active, a.mainMenuLevel3:hover, a.mainMenuLevel3:focus {
    color:${systemColor};
    background: ${systemColorActive};
    font-size: 13px !important;
}
  .mainMenuSelected1, .mainMenuSelected2, .mainMenuSelected3 {
    color:${systemColor};
    background: ${systemColorActive};
    font-size: 13px !important;
    font-weight: bold;
    height: 20px;
  }    
    `;
  document.head.appendChild(style);
}

function headerReset() {
  const domOrUnit = document.querySelector("div#infodiv.texto3")
  const enterpriseTag = document.querySelector('input#\\32');

  domOrUnit.style.bottom = '3px';

  document.querySelector("#cablnk > a:nth-child(1)").style.display = "none";
  document.querySelector("div#cablnk").style.bottom = "3px";

  const header = document.querySelector("div.cabecalho");
  header.style.marginBottom = "10px";
  header.style.width = "100%";

  if (enterpriseTag && window.location.href.includes("/bin/menu01")) {
    verifySystem(enterpriseTag.value, header);
  } else {
    verifySystem(domOrUnit.textContent, header);
  }

}


function cssFunctions() {
  if (window.location.href.includes("/bin/ssw0422")) {
    loginPage();
    headerReset();

  } else if (window.location.href.includes("/bin/menu01")) {
    mainMenu();
    headerReset();
    insertStyles();
  } else {
    headerReset();
    insertStyles();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  autoReset();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    autoReset()
  }, 1000);
});

function autoReset() {
  const startTime = Date.now();
  const maxTime = 5000;
  const intervalReset = setInterval(() => {
    const header = document.querySelector("div.cabecalho");
    if (header) {
      const headerWidth = getComputedStyle(header).width;
      if (headerWidth === '1000px') {
        cssFunctions();
        clearInterval(intervalReset);
      }
    } else if (Date.now() - startTime >= maxTime) {
      cssFunctions();
      clearInterval(intervalReset);
    }
  }, 100);
}

autoReset();