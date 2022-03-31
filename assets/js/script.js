// BYU_Grounds-Haws_Field 
// Token Token 0a86cfd4669882c8a0a5165f0ef6609a8794964c

// Chart Names
// Haws Field ET

// Devices
// Haws Field South z6-12691
// P1 2in 12, P2 6in 12, P3 12in 12, P4, 2in 21, P5 6in 21, P6 ATM41

// Haws Field West z6-12677
// P1 2in 12, P2 6in 12, P3 12in 12, P4, 2in 21, P5 6in 21

// ET API Call
// z6-12691, Port 6, elevation 1400.4 m, latitude 40.2466394
// 
// {"elevation": 3, "latitude": 46.729721, "wind_measurement_height": 2}

// CURL
// curl -X GET "https://zentracloud.com/api/v3/get_env_model_data/?device_sn=z6-12691&model_type=ETo&port_num=6&inputs=%7B%22elevation%22%3A%201400.4%2C%20%22latitude%22%3A%2040.2466394%2C%20%22wind_measurement_height%22%3A%202%7D" -H  "accept: application/json" -H  "Authorization: Token 0a86cfd4669882c8a0a5165f0ef6609a8794964c"

const urlName = 'https://zentracloud.com/api/v3/get_env_model_data/?device_sn=z6-12691&model_type=ETo&port_num=6&inputs=%7B%22elevation%22%3A%201400.4%2C%20%22latitude%22%3A%2040.2466394%2C%20%22wind_measurement_height%22%3A%202%7D';
 const header1 = 'accept: application/json';
 const header2 = 'Authorization: Token 0a86cfd4669882c8a0a5165f0ef6609a8794964c';

// Request URL
// https://zentracloud.com/api/v3/get_env_model_data/?device_sn=z6-12691&model_type=ETo&port_num=6&inputs=%7B%22elevation%22%3A%201400.4%2C%20%22latitude%22%3A%2040.2466394%2C%20%22wind_measurement_height%22%3A%202%7D




// Example response
// {"data":
//     {"metadata":
//         {"units": " in", "start": "2021-03-07", "end": "2021-03-10",
// "data_source": "z6-12345", "model_type": "ETo"},
//         "readings": [
//             {"value": 0.15700, "error_flag": false, "error_description": null, "tz_offset": -25200, "timestamp_utc": 1615186799, "datetime": "2021-03-07 23:59:59-07:00"},
//             {"value": 0.14704, "error_flag": false, "error_description": null, "tz_offset": -25200, "timestamp_utc": 1615273199, "datetime": "2021-03-08 23:59:59-07:00"},
//             {"value": 0.12912, "error_flag": false, "error_description": null, "tz_offset": -25200, "timestamp_utc": 1615359599, "datetime": "2021-03-09 23:59:59-07:00"},
//             {"value": 0.13645, "error_flag": false, "error_description": null, "tz_offset": -25200, "timestamp_utc": 1615445999, "datetime": "2021-03-10 23:59:59-07:00"}
//         }
//     }
        
