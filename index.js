const electron = require("electron")
const { app, BrowserWindow, globalShortcut } = electron

let win
const Menu = electron.Menu

function criaMenus() {
	let template = [{
		label: 'Criar movimentação'

	}, {
		label: 'Ver movimentações',
			submenu: [{
				label: 'Deste mês'
			},{
				label: 'Desta semana'
			},{
				label: 'Todas',
				//icon: 'icon.ico',
				accelerator: 'Alt+m',
				click() { win.loadFile('movimentacoes.html')}
		}]
	}, {
		label: 'Configurações'
	}, {
		label: 'Equipamentos'
	}]
	const menu =  Menu.buildFromTemplate(template)
  	Menu.setApplicationMenu(menu)
}

function criaJanela() {
	win = new BrowserWindow({
		height: 800,
		width: 800,
		backgroundColor: 'white',
		title: 'Carregando...',
		icon: 'icon.ico'
		//show: false
	})
}

app.on("ready", () => {
	 criaJanela()
	globalShortcut.register('Control+y', () => {
		console.log("Atalho CTRL+y ativado")
	})
	criaMenus()
	 
	win.loadFile('index.html')

	//win.webContents.openDevTools()
	
	// win.once('ready-to-show', () => { //So exibe a tela quando carregar por completo o index.html
 	//  		win.show()
	// })	
})

app.on("before-quit", (event) => { //Nâo preve de desligamento de máquina ou logout
	//event.preventDefault() 
	console.log("Why?")
})

app.on("browser-window-blur", () => {
	console.log("Janela desfocada")
})