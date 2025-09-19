const loginPage = () => {
  const body = document.body;

  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.background = "none";

  setTimeout(() => {
    body.style.backgroundImage = "none";
    body.style.background = "none";
  }, 100);

  const formLogin = document.querySelector('form[action="/bin/ssw0422"]');

  formLogin.style.background = "rgba(255, 255, 255, 0.95)";
  formLogin.style.padding = "30px";
  formLogin.style.borderRadius = "12px";
  formLogin.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
  formLogin.style.width = "250px";
  formLogin.style.display = "flex";
  formLogin.style.flexDirection = "column";
  formLogin.style.alignItems = "flex-start";


  document.querySelectorAll('form[action="/bin/ssw0422"] > :is(div, input, a, label)').forEach(item => { //verificar
    item.style.position = "static";
    item.style.display = "block";
    item.style.width = "100%";
    item.style.margin = "0";
  });

  document.querySelectorAll('form[action="/bin/ssw0422"] input').forEach(input => {
    input.style.width = "100%";
    input.style.padding = "10px 12px";
    input.style.border = "1px solid #c9c9c9ff";
    input.style.borderRadius = "6px";
    input.style.color = "#5560ffff";
    input.style.fontSize = "14px";
  });


  document.querySelectorAll('form[action="/bin/ssw0422"] input[type="checkbox"]').forEach(checkboxInput => {
    checkboxInput.style.width = "16px";
    checkboxInput.parentElement.style.gap = "6px";
  });

  document.querySelectorAll('div.texto').forEach(textDiv => {
    textDiv.style.fontSize = "13px";
    textDiv.style.marginTop = "4px";
    textDiv.style.textAlign = "left";
  });


  const loginButton = document.querySelectorAll("a.imglnk");

  loginButton.forEach(button => {
    button.style.display = "block";
    button.style.color = "#ffffffff";
    button.style.padding = "12px";
    button.style.border = "none";
    button.style.margin = "10px auto 0 0 ";
    button.style.textAlign = "center";
    button.style.borderRadius = "6px";
    button.style.fontWeight = "bold";
    button.style.fontSize = "16px";
    button.style.textDecoration = "none";
    button.style.width = "90%";
    button.style.transition = "background 0.3s";

    if (button.textContent.includes("►")) {
      button.style.background = "#5560ffff";

      button.onmouseover = () => {
        button.style.background = "#3d47ddff";
        button.style.boxShadow = "0 8px 10px rgba(0,0,0,0.1)";
      };
      button.onmouseout = () => {
        button.style.background = "#5560ffff";
        button.style.boxShadow = "none";
      };
    }

    else if (button.textContent.includes("×")) {
      button.style.background = "#ff5555ff";
      button.onmouseover = () => {
        button.style.background = "#ff0000ff";
        button.style.boxShadow = "0 8px 10px rgba(0,0,0,0.1)";
      };
      button.onmouseout = () => {
        button.style.background = "#ff5555ff";
        button.style.boxShadow = "none";
      };
    }

  });





  const titleHeader = document.querySelector("#tituloprog > span");
  if (titleHeader) {
    titleHeader.style.display = "block";
    titleHeader.style.fontSize = "22px";
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
};

const mainMenu = () => {
  headerReset();
  insertStyles();

  const optionsForm = () => {

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

    document.getElementById("2").style.width = "45px";
    document.getElementById("2").style.left = "85px";

    document.querySelector("#frm > div:nth-child(5)").style.left = "135px";


    document.getElementById("3").style.width = "45px";
    document.getElementById("3").style.left = "195px";

    document.getElementById("4").style.left = "250px";

    document.getElementById("5").style.left = "620px";

  }
  optionsForm();


  document.querySelector('#frm > div:nth-child(10)').style.left = "";
  document.querySelector('#frm > div:nth-child(10)').style.right = "3vw";
  document.querySelector('#frm > div:nth-child(10)').style.fontSize = "13px";

  document.querySelector('#frm > div:nth-child(12)').style.left = "";
  document.querySelector('#frm > div:nth-child(12)').style.right = "3vw";
  document.querySelector('#frm > div:nth-child(12)').style.fontSize = "13px";





  const avisoInicialMenu = document.querySelector("div#aviso_emp.avisoini");

  avisoInicialMenu.style.left = "";
  avisoInicialMenu.style.right = "3vw";

  const avisoInicialPopout = document.querySelector("div#pnlatraso.avisoini")

  avisoInicialPopout.style.left = "";
  avisoInicialPopout.style.right = "5vw";

  const avisoIframe = document.querySelector("div#aviso_ssw.aviso");

  avisoIframe.style.left = "";
  avisoIframe.style.right = "3vw";

  document.querySelectorAll('#frm > div:nth-child(15), #frm > div:nth-child(16)').forEach(divFooter => {
    divFooter.style.width = "100vw";
  });

  document.querySelector('#frm > img').style.display = "none";

  const divHelper = document.querySelector("div#divss.datar")
  divHelper.style.left = "";
  divHelper.style.right = "3vw";

  querySelector('#errorpanel').style.height = '100vh';
  querySelector('#errorpanel').style.width = '100vw';
}

const insertStyles = () => {
  const style = document.createElement('style');
  style.textContent =
    `
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    fontsize: 12px;
  }

  .cabecalho {
    width:100%;
  }

  span.titulo{
    font-size:18px;
  }

  a.cablnk {
    font-size:12px;  
  }
  
  .mainMenuLevel1, .mainMenuLevel2, .mainMenuLevel3 {
    font-size: 13px;
    background: #5560ffff;
    border-radius: 0 0 0 8px;
    font-weight: bold;
    height: 20px;
  }
    
  a.mainMenuLevel1:active, a.mainMenuLevel1:hover, a.mainMenuLevel1:focus,
  a.mainMenuLevel2:active, a.mainMenuLevel2:hover, a.mainMenuLevel2:focus,
  a.mainMenuLevel3:active, a.mainMenuLevel3:hover, a.mainMenuLevel3:focus {
    color:#5560ffff;
    background: #bec2ffff;
    font-size: 13px;
}
  .mainMenuSelected1, .mainMenuSelected2, .mainMenuSelected3 {
    color:#5560ffff;
    background: #bec2ffff;
    font-size: 13px;
    font-weight: bold;
    height: 20px;
  }

    
    `;
  document.head.appendChild(style);
}

const headerReset = () => {
  const enterpriseTag = document.querySelector('#infodiv > span > b');

  document.querySelector("div#infodiv.texto3").style.bottom = "3px";

  document.querySelector("#cablnk > a:nth-child(1)").style.display = "none";
  document.querySelector("div#cablnk").style.bottom = "3px";

  const header = document.querySelector("div.cabecalho");



  header.style.marginBottom = "10px";

  if (enterpriseTag && enterpriseTag.textContent === 'a') {
    header.style.background = "#ff5555ff";
  } else {
    header.style.background = "#5560ffff";
  }

}

window.addEventListener('DOMContentLoaded', () => {
  headerReset();
  insertStyles();

  if (window.location.href.includes("/bin/ssw0422")) {
    loginPage();

  } else if (window.location.href.includes("/bin/menu01")) {
    mainMenu();
  }



});

window.addEventListener('load', () => {
  headerReset();
  insertStyles();
  if (window.location.href.includes("/bin/ssw0422")) {
    loginPage();
  } else if (window.location.href.includes("/bin/menu01")) {
    mainMenu();
  }

});

const autoReset = setInterval(() => {
  const header = document.querySelector("div.cabecalho");
  if (header) {
    clearInterval(autoReset);
    headerReset();
    insertStyles();
  } else {
    console.log('header not found')
    clearInterval(autoReset);
  }
}, 100);

