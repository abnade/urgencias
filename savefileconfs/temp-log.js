function tryParseJson (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return JSON.parse(str);
}

const {SerialPort} = require('serialport');

// Add your USB port name
const port = new SerialPort({
	//parser: SerialPort.parsers.readline('\n')
  path:'COM5', baudRate:1000000
});

const fs = require('fs');

let allSerial=[];

port.on('open', function () {
	console.log('Opened port...');

	port.on('data', function (data) {
		const sensorData = tryParseJson(data);


      //  console.log(sensorData);
        allSerial.push(sensorData);
       fs.writeFileSync('log.json', JSON.stringify(allSerial), 'utf-8');

        // If log interval has elapsed, log entry

        /**/
	});
});
