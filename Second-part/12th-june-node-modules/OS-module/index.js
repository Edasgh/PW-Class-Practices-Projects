// node index.js
// getting the os module
const os=require("os");

// cpu architecture
// console.log("CPU Architecture",os.arch()) // CPU Architecture x64

// free-memory
// console.log("Free memory",os.freemem(),"bytes"); //Free memory 1479970816 bytes

// total memory
// console.log("Total memory",os.totalmem(),"bytes"); //Total memory 8215105536 bytes

/*


// network interfaces
console.log("network interfaces",os.networkInterfaces());

RESULT

{
  'vEthernet (Default Switch)': [
    {
      address: 'fe80::83b3:f7a0:1ae9:527a',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:15:5d:30:95:7f',
      internal: false,
      cidr: 'fe80::83b3:f7a0:1ae9:527a/64',
      scopeid: 2
    },
    {
      address: '172.26.16.1',
      netmask: '255.255.240.0',
      family: 'IPv4',
      mac: '00:15:5d:30:95:7f',
      internal: false,
      cidr: '172.26.16.1/20'
    }
  ],
  'Wi-Fi': [
    {
      address: '2409:4060:e8d:57a4:56f3:5cd3:70bd:aeb',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'd8:80:83:29:16:1b',
      internal: false,
      cidr: '2409:4060:e8d:57a4:56f3:5cd3:70bd:aeb/64',
      scopeid: 0
    },
    {
      address: '2409:4060:e8d:57a4:e822:1d6d:9551:e75c',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: 'd8:80:83:29:16:1b',
      internal: false,
      cidr: '2409:4060:e8d:57a4:e822:1d6d:9551:e75c/128',
      scopeid: 0
    },
    {
      address: 'fe80::a403:7bfe:ccb4:d3ca',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'd8:80:83:29:16:1b',
      internal: false,
      cidr: 'fe80::a403:7bfe:ccb4:d3ca/64',
      scopeid: 13
    },
    {
      address: '192.168.43.10',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'd8:80:83:29:16:1b',
      internal: false,
      cidr: '192.168.43.10/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}

*/



//os default temp directory
// console.log("os default temp directory",os.tmpdir());// os default temp directory C:\Users\edas2\AppData\Local\Temp


