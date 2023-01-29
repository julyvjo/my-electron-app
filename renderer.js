
function setAddresses(){

    const div = document.getElementById('ip')
    const network = global.getNetworkInterfaces()

    for (let i in network){
        let output = document.createElement("h5")
        div.appendChild(output)

        output.innerText = i

        for (let j in i){
            if(network[i][j]['family'] == 'IPv4'){
                output.innerText += ': ' + network[i][j]['address']
                continue;
            }
        }
    }
}

async function setDevices(){
    setSpinner(true)
    const div = document.getElementById('devices')
    const tbody = document.getElementById('devices-tbody')
    div.style.display = 'none'
    const devices = await global.getDevices()
    let j = 0

    for (i in devices){

        if(devices[i]['mac'] == '<incompleto>')
            continue

        j++
        //tr
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        //th
        let th = document.createElement('th')
        th.setAttribute('scope', 'row')
        th.innerText = j
        //td
        let name = document.createElement('td')
        let ipaddr = document.createElement('td')
        let mac = document.createElement('td')
        
        name.innerText = devices[i]['name']
        ipaddr.innerText = devices[i]['ip']
        mac.innerText = devices[i]['mac']

        tr.appendChild(th)
        tr.appendChild(name)
        tr.appendChild(ipaddr)
        tr.appendChild(mac)
    }

    setSpinner(false)
    div.style.display = 'block'
    // for (let dev in devices){
    //     console.log(dev)
    // }
}

function setSpinner(status){
    const spinner = document.getElementById('spinner')

    status? spinner.style.display = 'block' : spinner.style.display = 'none'
}

//main
setAddresses()
setDevices()