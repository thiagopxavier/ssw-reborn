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

  const mq = document.querySelector('#mq');
  if (mq) {
    document.querySelectorAll('#\\32, #\\33, #\\34').forEach(input => {
      input.style.fontSize = "16px";
      input.style.height = "20px";
    });

    document.querySelectorAll('#\\31 , #frm > div:nth-child(5),  #\\35   ').forEach(text => {
      text.style.fontSize = "16px";
      text.style.width = "auto";
      text.style.textAlign = "center";
    });
  }

  const unitLabel = document.querySelector("#frm > div:nth-child(3)")

  unitLabel && (unitLabel.style.left = "75px");

  const optionLabel = document.querySelector("#frm > div:nth-child(5)");
  if (optionLabel && optionLabel.textContent === 'Opção:') (optionLabel.style.left = "150px");

  const optionSearchBar = document.querySelector("input:not([type='checkbox'])#\\33");
  if (optionSearchBar && optionSearchBar.maxLength === 3) {
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

  const versionWebColorLabel = document.querySelector('#frm > div:nth-child(4)')
  if (versionWebColorLabel && versionWebColorLabel.textContent.includes('Versão')) {
    versionWebColorLabel.style.width = "90px"
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

function getStyleColor() {
  const styleTag = document.querySelector('head > style:nth-of-type(1):not([id])');
  if (styleTag) {
    const cssText = styleTag.textContent;
    const match = cssText.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
    return match ? match[0] : null;
  }
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

  const color = getStyleColor();

  if (color) {
    console.log(color)
    systemColor = color;
    systemColorActive = DEFAULT_COLOR_ACTIVE;
  }
  else if (systemUpperCase.includes('TSA')) {
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

.cabecalho {
  background: ${systemColor} !important;
  background-color: ${systemColor} !important;
}
a.menulnk:active,
a.menulnk:hover,
a.menulnk:focus {
  color: ${systemColor} !important;
}
a.menulnkdestaca:active,
a.menulnkdestaca:hover,
a.menulnkdestaca:focus {
  color: ${systemColor} !important;
}
.menulnk {
  background: ${systemColor} !important;
}
.menulnkdestaca {
  background: ${systemColor} !important;
}
.texto11 {
  background: ${systemColor} !important;
}
a.texto11:active,
a.texto11:hover,
a.texto11:focus {
  color: ${systemColor} !important;
}
.srtit {
  background: ${systemColor} !important;
}
.srtit2 {
  background: ${systemColor} !important;
}
#scontentbar {
  background-color: ${systemColor} !important;
}


    `;
  document.head.appendChild(style);
}

function headerReset() {
  const domOrUnit = document.querySelector("div#infodiv.texto3")
  const enterpriseTag = document.querySelector('input#\\32');

  domOrUnit.style.bottom = '3px';
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

function cteTyping() {

  const shippingType = document.querySelector('#\\31 6');

  const shipperCNPJ = document.querySelector('#id_cli_rem_cnpj');
  const shipperName = document.querySelector('#id_cli_rem_nome');
  const shipperAdress = document.querySelector('#id_cli_rem_end');
  const shipperAdressNumber = document.querySelector('#id_cli_rem_num');
  const shipperAdressCode = document.querySelector('#id_cli_rem_cep');
  const shipperCountry = document.querySelector('#msgcadcepr');

  const consigneeCNPJ = document.querySelector('#id_cli_des_cnpj');
  const consigneeName = document.querySelector('#id_cli_des_nome');
  const consigneeAdress = document.querySelector('#id_cli_des_end');
  const consigneeAdressNumber = document.querySelector('#id_cli_des_num');
  const consigneeAdressCode = document.querySelector('#id_cli_des_cep');
  const consigneeCountry = document.querySelector('#msgcadcepd');

  const payerCNPJ = document.querySelector('#id_cli_pag_cnpj');
  const payerName = document.querySelector('#id_cli_pag_nome');
  const payerAdress = document.querySelector('#id_cli_pag_end');
  const payerAdressNumber = document.querySelector('#id_cli_pag_num');
  const payerAdressCode = document.querySelector('#id_cli_pag_cep');
  const payerCountry = document.querySelector('#msgcadcepp');

  const fromSP = document.querySelector('#msgcadcepr');
  const typingTitle = document.querySelector("#tituloprog > span")

  if (typingTitle && typingTitle.textContent.includes("Digitação de CT-e")) {
    const adressClearButton = document.createElement("a");
    const adressName = document.querySelector('#fld_nome_entrega');
    const adressInputs = document.querySelectorAll("#fld_end_entrega, #fld_nro_entrega, #fld_comp_entrega, #fld_cep_entrega, #fld_bairro_entrega, #msgcepc")

    document.body.appendChild(adressClearButton);

    adressClearButton.href = "#";
    adressClearButton.className = "imglnk";
    adressClearButton.textContent = " × ";
    adressClearButton.style.position = "absolute";
    adressClearButton.style.left = "730px";
    adressClearButton.style.top = "432px";
    adressClearButton.style.setProperty("font-size", "16px", "important");
    adressClearButton.onclick = () => {
      adressName.value = "";
      adressName.dispatchEvent(new Event("change", { bubbles: true }));

      adressInputs.forEach(input => {
        input.value = "";
      });
    };
  }

  if (shippingType) shippingType.style.fontWeight = "bold";
  if (payerCNPJ) payerCNPJ.style.fontWeight = "bold";
  if (payerName) payerName.style.fontWeight = "bold";
  if (shipperCNPJ) {
    shipperCNPJ.style.fontWeight = "bold";
    shipperCNPJ.style.color = "#00a67d";
  }
  if (shipperName) {
    shipperName.style.fontWeight = "bold";
    shipperName.style.color = "#00a67d";
  }
  if (consigneeCNPJ) {
    consigneeCNPJ.style.fontWeight = "bold";
    consigneeCNPJ.style.color = "#ff2626ff";
  }
  if (consigneeName) {
    consigneeName.style.fontWeight = "bold";
    consigneeName.style.color = "#ff2626ff";
  }

  document.body.insertAdjacentHTML("beforeend",
    `<input  value="" style="left:600px; top:288px; width:120px;" id="weightM3" class="nodata" readonly="">`
  );


  const weightM3 = document.querySelector("#weightM3");

  function verifyWeight() {
    const weight = document.querySelector("#id_peso_real")
    const agroupTitle = document.querySelector("#tituloprog > span")
    const volumeM3 = document.querySelector("#id_m3");
    const typeOfMerchandise = document.querySelector("#id_mercadoria");

    if (weight && parseFloat(weight.value.replace(',', '.')) < 1 && parseFloat(weight.value.replace(',', '.')) != 0) {
      weight.value = '1,000'
    }

    if (agroupTitle && agroupTitle.textContent.includes("Agrupamento")) {
      const inputs = document.querySelectorAll('#frm input[style*="width: 64px"]')
      inputs.forEach(input => {
        if (parseFloat(input.value.replace(',', '.')) < 1 && parseFloat(input.value.replace(',', '.')) != 0) {
          input.value = '1,000';
        }
      });
    }

    if (volumeM3 && parseFloat(volumeM3.value.replace(',', '.')) !== 0) {
      calculateVolume(parseFloat(volumeM3.value.replace(',', '.')), typeOfMerchandise)
    }


    requestAnimationFrame(verifyWeight);
  }
  verifyWeight()

  function calculateVolume(volumeM3, type) {
    switch (Number(type.value)) {
      case 0:
        break;
      case 1:
        weightM3.value = (volumeM3 * 300) + ' Kg'
        break;
      case 2:
        weightM3.value = (volumeM3 * 200) + ' Kg'
        break;
      case 3:
        weightM3.value = (volumeM3 * 250) + ' Kg'
        break;
      default:
        weightM3.value = (volumeM3 * 300) + ' Kg'
        break;
    }
  }

  function verifyState() {
    if (fromSP) {
      if (fromSP.value.includes('/ SP') || fromSP.value === '') {
        fromSP.style.background = ""
        fromSP.style.color = "";
      } else {
        fromSP.style.background = "red";
        fromSP.style.color = "white";
      }
    }
    requestAnimationFrame(verifyState);
  }
  verifyState();

  function changeToConsignee() {
    payerCNPJ.value = consigneeCNPJ.value
    payerName.value = consigneeName.value
    payerAdress.value = consigneeAdress.value
    payerAdressNumber.value = consigneeAdressNumber.value
    payerAdressCode.value = consigneeAdressCode.value
    payerCountry.value = consigneeCountry.value
  }

  function changeToShipper() {
    payerCNPJ.value = shipperCNPJ.value
    payerName.value = shipperName.value
    payerAdress.value = shipperAdress.value
    payerAdressNumber.value = shipperAdressNumber.value
    payerAdressCode.value = shipperAdressCode.value
    payerCountry.value = shipperCountry.value
  }

  function verifyPayer() {
    if (shippingType && payerCNPJ && shipperCNPJ && consigneeCNPJ) {
      if (payerCNPJ.value === shipperCNPJ.value) {
        shippingType && (shippingType.style.color = "#00a67d");
        payerCNPJ && (payerCNPJ.style.color = "#00a67d");
        payerName && (payerName.style.color = "#00a67d");
      } else if (payerCNPJ.value === consigneeCNPJ.value) {
        shippingType && (shippingType.style.color = "#ff2626ff");
        payerCNPJ && (payerCNPJ.style.color = "#ff2626ff");
        payerName && (payerName.style.color = "#ff2626ff");
      } else {
        shippingType && (shippingType.style.color = "#a6a300ff");
        payerCNPJ && (payerCNPJ.style.color = "#a6a300ff");
        payerName && (payerName.style.color = "#a6a300ff");
      }
      if (shippingType) {
        shippingType.addEventListener("input", (_event) => {
          if (shippingType.value === '1' && payerCNPJ.value === consigneeCNPJ.value) {
            changeToShipper();
          }
          else if (shippingType.value === '2' && payerCNPJ.value === shipperCNPJ.value) {
            changeToConsignee();
          }
        });
      }
    }
    requestAnimationFrame(verifyPayer);
  }
  verifyPayer();

  const shippingTypeLabel = document.querySelector('#frm > div:nth-child(33)');
  if (shippingTypeLabel && shippingType && payerCNPJ && shipperCNPJ && consigneeCNPJ) {
    if (payerCNPJ.value === shipperCNPJ.value || payerCNPJ.value === consigneeCNPJ.value) {
      shippingTypeLabel.addEventListener("click", () => {
        if (shippingType.value === '1') {
          shippingType.value = "2"
          changeToConsignee();
        }
        else if (shippingType.value === '2') {
          shippingType.value = "1"
          changeToShipper();
        }
      });

      if (consigneeName) {
        consigneeName.addEventListener("click", () => {
          shippingType.value = '2'
          changeToConsignee();
        });
      }

      if (shipperName) {
        shipperName.addEventListener("click", () => {
          shippingType.value = '1'
          changeToShipper();
        });
      }
    }
  }


  const boldLabel = document.querySelectorAll('#frm > div:nth-child(33), #frm > div:nth-child(141), #frm > div:nth-child(137), #lnk_pares, #frm > div:nth-child(145)')
  if (boldLabel) {
    boldLabel.forEach(b => { b.style.fontWeight = "bold" });
  }

  const highlightsInput = document.querySelectorAll("#id_qtde_vol, #id_peso_real, #id_vlr_mercadoria,#fld_nome_entrega, #fld_end_entrega, #fld_nro_entrega, #fld_comp_entrega, #fld_cep_entrega, #fld_bairro_entrega, #msgcepc")

  if (highlightsInput) {
    highlightsInput.forEach(highlight => {
      highlight.style.color = "#ff2626ff";
      highlight.style.fontWeight = "bold";
    })
  }
}

function cteApproval() {
  const approvalWaitlist = document.querySelector('#\\36 ');
  const refreshButton = document.querySelector('#\\31 ');

  const refresh = setInterval(() => {
    if (refreshButton.textContent.includes("Atualizar") && approvalWaitlist && approvalWaitlist.textContent) {
      clearInterval(refresh);
      refreshButton && refreshButton.click();
    } else {
      clearInterval(refresh);
    }
  }, 3500);
}

function priceAgreement() {
  const highlight = document.querySelectorAll('#tp_frete, #qtde_vol, #vlr_merc, #peso, #cubagem, #vlr_frete');

  if (highlight) {
    highlight.forEach(h => {
      h.style.color = "#ff2626ff";
      h.style.fontWeight = "bold";
      h.style.setProperty("font-size", "14px", "important");
    })
  }
  const highlightNames = document.querySelectorAll('#nome_emit, #nome_dest');
  if (highlightNames) {
    highlightNames.forEach(h => {
      h.style.color = "#ff2626ff";
      h.style.fontWeight = "bold";
    })
  }

  const boldLabel = document.querySelectorAll('#frm > div:nth-child(47), #frm > div:nth-child(97),#frm > div:nth-child(95), #frm > div:nth-child(101)')

  if (boldLabel) boldLabel.forEach(b => { b.style.fontWeight = "bold" });
}

function driverRegistration() {
  const validityMessage = "DATA DE VALIDADE DA HABILITAÇÃO do MOTORISTA  está vencida."
  let warningValue = 0;
  const date = new Date();
  const formattedDate =
    String(date.getDate()).padStart(2, '0') +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getFullYear()).slice(-2);

  const today =
    formattedDate.slice(4, 6) +
    formattedDate.slice(2, 4) +
    formattedDate.slice(0, 2);

  function renderValidity() {

    const validity = document.querySelector("#\\35 0")

    if (validity) {
      const valid =
        validity.value.slice(4, 6) +
        validity.value.slice(2, 4) +
        validity.value.slice(0, 2);

      if (valid < today && validity.value.length === 6) {
        validity.style.background = "red";
        validity.style.color = "white";
        validity.style.fontWeight = "bold";
        if (warningValue === 0) {
          warning(validityMessage);
          warningValue = 1;
        }
      } else {
        validity.style.background = "";
        validity.style.color = "";
        validity.style.fontWeight = "";
        warningValue = 0;
      }
      requestAnimationFrame(renderValidity);
    }
  };
  renderValidity();

}

function paymentIssuance() {
  const payementMessage = "O SALDO do MOTORISTA pode estar incorreto."
  const balance = document.querySelector("#saldo_ccf");

  if (balance && balance.value !== "R$ 0,00") {
    warning(payementMessage)
  }
}

function warning(message) {

  document.body.insertAdjacentHTML("beforeend", `
    <div id="errormsg" style="text-align: left; overflow: visible; left: 272px; top: 208px; height: 139px; width: 416px; z-index: 1147483648; visibility: visible;" class="myerrorpanel">
      <div id="scontentbar" style="text-align: right; width: 416px;">
        <label style="left:16px;top:6px;color:white;" class="texto">Aviso</label>
        <a href="#" onclick="document.querySelector('.myerrorpanel').remove();" style="position:relative;font-size:18px;color:white;text-decoration:none;" class="texto">&nbsp;<b>×</b>&nbsp;</a>
      </div>  
      <div class="texto" id="errormsglabel" style="color:red;left:16px;top:32px;text-align:left;overflow:visible"><b>
        <p> ${message} </p> 
      </div>
      <a id="-1" onfocus="obj=this;" class="dialog" onclick="document.querySelector('.myerrorpanel').remove();showmsgonclick();" style="top:78px;left:16px;" href="#">Corrigir</a>
  `);
}

function cssFunctions() {
  const url = window.location.href;

  headerReset();
  switch (true) {
    case url.includes("/bin/ssw0422"):
      loginPage();
      break;

    case url.includes("/bin/menu01"):
      mainMenu();
      insertStyles();
      break;

    case url.includes("/bin/ssw0024"):
      cteTyping();
      insertStyles();
      break;

    case url.includes("/bin/ssw1601"):
      priceAgreement();
      insertStyles();
      break;

    case url.includes("/bin/ssw0767"):
      cteApproval();
      insertStyles();
      break;
    case url.includes("/bin/ssw0021"):
      driverRegistration();
      insertStyles();
      break;
    case url.includes("/bin/ssw0331"):
      paymentIssuance();
      insertStyles();
      break;
    default:
      insertStyles();
      break;
  }
}

function autoReset() {
  const header = document.querySelector("div.cabecalho");
  if ((header && header.style.width !== "100%")) {
    cssFunctions();
  }
  requestAnimationFrame(autoReset);
}

autoReset();